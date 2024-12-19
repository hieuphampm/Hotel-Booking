const { getPgClient } = require('./db.js');
var format = require('pg-format');

const all = async () => {
    const client = getPgClient();
    const sql = "SELECT * FROM room";
    let result = [];

    try {
        await client.connect();
        const queryResult = await client.query(sql);    
        result = queryResult.rows;
    } catch (e) {
        console.error("Error fetching rooms:", e);
    } finally {
        await client.end();
    }
    return result;
} 

const byId = async (id) => {
    const client = getPgClient();
    const sql = format("SELECT * FROM room WHERE room_id=%L", id);
    let result, found;

    try {
        await client.connect();
        result = await client.query(sql);
        found = result.rows.length > 0;
    } catch (e) {
        console.error("Error fetching room by ID:", e);
        found = false;
    } finally {
        await client.end();
    }

    return { found, data: result?.rows[0] };
}

const _ = require('lodash');
const updateById = async (id, req) => {
    const info = _.pick(req.params, ['name', 'price']);
    
const rowCount = await getKnex()('room')
        .where('room_id', '=', id)
    .update(info);

const success = rowCount > 0;

if (success) {
    return {
        success: true, message: "Room updated successfully", data: {room: info}
    };
} else {
    return {
        success: false, code: 1, message: `Cannot update room's information. Room with id ${id} does not exist.`,
    }
}
}

module.exports = { all, byId, updateById };