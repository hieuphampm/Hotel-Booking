var Router = require('restify-router').Router;
const router = new Router();
var format = require('pg-format');
var {authenticated} = require('./authenticate'); 
const Room = require('../models/room');

router.get('/room', async (req, res) => {
    const result = await Room.all();

    res.send( {
        rooms: result
    });
});

router.get('/room/:id', async (req, res) => {
    const id = req.params.id;
    
    const {found, data} = await Room.byId(id);

    if (found) {
        res.send({
            success: true, code: 200, message: "",
            data: data
        });
    } else {
        res.send({
            success: false, code: 404,
            message: "Cannot find room with id: " + id
        });
    }   
});

router.post('/room', authenticated, async (req, res) => {
    const { name = "", price = 0 } = req.body;

    if (!name.trim()) {
        res.send({ success: false, code: 400, message: "Invalid room name." });
        return;
    }

    const client = getPgClient();
    const sql = format("INSERT INTO room (name, price) VALUES (%L, %L)", name, price);

    await client.connect();
    await client.query(sql);
    await client.end();

    res.send({ success: true, code: 201, message: "Room created successfully." });
});

router.del('/room/:id', authenticated, async (req, res) => {
    const id = req.params.id;
    const sql = format("DELETE FROM room WHERE room_id=%L", id);
    const client = getPgClient();
    await client.connect();
    const result = await client.query(sql);
    await client.end();

    if (result.rowCount > 0) {
        res.send({ success: true, code: 200, message: "Room deleted successfully" });
    } else {
        res.send({ success: false, code: 404, message: `Room with id ${id} not found.` });
    }
});

router.patch('/room/:id', authenticated, async (req, res) => {
    const { name, price } = req.body;
    const id = req.params.id;

    if (!name && price === undefined) {
        res.send({ success: false, code: 400, message: "No valid fields provided for update." });
        return;
    }

    const updates = [];
    if (name) updates.push(format("name=%L", name));
    if (price !== undefined) updates.push(format("price=%L", price));

    const sql = `UPDATE room SET ${updates.join(", ")} WHERE room_id=${format("%L", id)}`;

    const client = getPgClient();
    await client.connect();
    const result = await client.query(sql);
    await client.end();

    if (result.rowCount > 0) {
        res.send({ success: true, code: 200, message: "Room updated successfully." });
    } else {
        res.send({ success: false, code: 404, message: `Room with id ${id} not found.` });
    }
});

module.exports = router;