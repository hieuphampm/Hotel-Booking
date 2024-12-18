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

module.exports = { all, byId };