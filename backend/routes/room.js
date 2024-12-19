var Router = require('restify-router').Router;
const router = new Router();
var format = require('pg-format');
var {authenticated} = require('./middleware/authenticate'); 
var {authorized} = require('./middleware/authorize');
var {validated} = require('./middleware/validated');
const Room = require('../models/room');

router.get('/room', async (req, res) => {
    const result = await Room.all();

    res.send( {
        rooms: result
    });
});

router.get('/room/:id', [validated], async (req, res) => {
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

router.post('/room', [authenticated, authorized, validated], async (req, res) => {
    const {method, path} = req.getRoute();
    if (!authorized(req.user, method, path)) {
        res.send({
            success: false, code: 401, message: "Unauthorized access - Insufficient priviledge"
        }); return;
    } 

    var {name = "", price = 0} = req.body;
    if (name.length == 0) {
        res.send({
            success: false, code: 403,
            message: "Invalid parameters"
        }); 
    }

    const result = await Room.create({name, price});
    res.send(result); 
});

router.del('/room/:id',  [authenticated, authorized, validated], async(req, res) => {
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

// router.patch('/room/:id',  [authenticated, authorized, validated], async(req, res) => {
//     const { name, price } = req.body;
//     const id = req.params.id;

//     if (!name && price === undefined) {
//         res.send({ success: false, code: 400, message: "No valid fields provided for update." });
//         return;
//     }

//     const updates = [];
//     if (name) updates.push(format("name=%L", name));
//     if (price !== undefined) updates.push(format("price=%L", price));

//     const sql = `UPDATE room SET ${updates.join(", ")} WHERE room_id=${format("%L", id)}`;

//     const client = getPgClient();
//     await client.connect();
//     const result = await client.query(sql);
//     await client.end();

//     if (result.rowCount > 0) {
//         res.send({ success: true, code: 200, message: "Room updated successfully." });
//     } else {
//         res.send({ success: false, code: 404, message: `Room with id ${id} not found.` });
//     }
// });

router.patch('/room/:id', [authenticated, authorized, validated], async(req, res) => { 
    const {id} = req.params;
    const result = await Room.updateById(id, req);
    res.send(result); 
});

module.exports = router;