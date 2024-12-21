const { getPgClient } = require('./db.js');
var format = require('pg-format');

const all = async () => {
    const client = getPgClient();
    const sql = "SELECT * FROM services";
    let result = [];

    try {
        await client.connect();
        const queryResult = await client.query(sql);    
        result = queryResult.rows;
    } catch (e) {
        console.error("Error fetching services:", e);
    } finally {
        await client.end();
    }
    return result;
};

const byId = async (id) => {
    const client = getPgClient();
    const sql = format("SELECT * FROM services WHERE service_id=%L", id);
    let result, found;

    try {
        await client.connect();
        result = await client.query(sql);
        found = result.rows.length > 0;
    } catch (e) {
        console.error("Error fetching service by ID:", e);
        found = false;
    } finally {
        await client.end();
    }

    return { found, data: result?.rows[0] };
};

const create = async ({ service_name, service_price }) => {
    const client = getPgClient();
    const sql = format(
        "INSERT INTO services (service_name, service_price) VALUES (%L, %L) RETURNING service_id",
        service_name, service_price
    );
    let id;

    try {
        await client.connect();
        const result = await client.query(sql);
        id = result.rows[0].service_id;
    } catch (e) {
        console.error("Error creating service:", e);
    } finally {
        await client.end();
    }

    return { success: !!id, id };
};

const updateById = async (id, req) => {
    const info = _.pick(req.params, ['service_name', 'service_price']);
    const updates = [];

    if (info.service_name) updates.push(format("service_name=%L", info.service_name));
    if (info.service_price !== undefined) updates.push(format("service_price=%L", info.service_price));

    if (updates.length === 0) {
        return {
            success: false, code: 400, message: "No valid fields provided for update."
        };
    }

    const sql = `UPDATE services SET ${updates.join(", ")} WHERE service_id=${format("%L", id)}`;
    const client = getPgClient();
    let rowCount = 0;

    try {
        await client.connect();
        const result = await client.query(sql);
        rowCount = result.rowCount;
    } catch (e) {
        console.error("Error updating service:", e);
    } finally {
        await client.end();
    }

    if (rowCount > 0) {
        return {
            success: true, message: "Service updated successfully", data: { service: info }
        };
    } else {
        return {
            success: false, code: 404, message: `Cannot update service. Service with id ${id} does not exist.`
        };
    }
};

const deleteById = async (id) => {
    const sql = format("DELETE FROM services WHERE service_id=%L", id);
    const client = getPgClient();
    let rowCount = 0;

    try {
        await client.connect();
        const result = await client.query(sql);
        rowCount = result.rowCount;
    } catch (e) {
        console.error("Error deleting service:", e);
    } finally {
        await client.end();
    }

    return {
        success: rowCount > 0,
        message: rowCount > 0 ? "Service deleted successfully" : `Service with id ${id} does not exist.`
    };
};

module.exports = { all, byId, create, updateById, deleteById };
