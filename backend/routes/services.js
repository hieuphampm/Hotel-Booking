const Router = require('restify-router').Router;
const router = new Router();
const format = require('pg-format');
const Service = require('../models/services');
const { authenticated } = require('./middleware/authenticate');
const { authorized } = require('./middleware/authorize');
const { validated } = require('./middleware/validated');
const { getPgClient } = require('../models/db');


router.get('/services', async (req, res) => {
    const result = await Service.all();

    res.send({
        services: result
    });
});

router.get('/services/:id', [validated], async (req, res) => {
    const id = req.params.id;

    const { found, data } = await Service.byId(id);

    if (found) {
        res.send({
            success: true, code: 200, message: "",
            data: data
        });
    } else {
        res.send({
            success: false, code: 404,
            message: `Cannot find service with id: ${id}`
        });
    }
});

router.post('/services', [authenticated, authorized, validated], async (req, res) => {
    const { method, path } = req.getRoute();
    if (!authorized(req.user, method, path)) {
        res.send({
            success: false, code: 401, message: "Unauthorized access - Insufficient privilege"
        });
        return;
    }

    const { service_name = "", service_price = 0 } = req.body;
    if (service_name.length === 0) {
        res.send({
            success: false, code: 403,
            message: "Invalid parameters"
        });
        return;
    }

    const result = await Service.create({ service_name, service_price });
    res.send(result);
});

router.del('/services/:id', [authenticated, authorized, validated], async (req, res) => {
    const id = req.params.id;
    const sql = format("DELETE FROM services WHERE service_id=%L", id);
    const client = getPgClient();
    await client.connect();
    const result = await client.query(sql);
    await client.end();

    if (result.rowCount > 0) {
        res.send({ success: true, code: 200, message: "Service deleted successfully" });
    } else {
        res.send({ success: false, code: 404, message: `Service with id ${id} not found.` });
    }
});

router.patch('/services/:id', [authenticated, authorized, validated], async (req, res) => {
    const { id } = req.params;
    const { service_name, service_price } = req.body;

    if (!service_name && service_price === undefined) {
        res.send({ success: false, code: 400, message: "No valid fields provided for update." });
        return;
    }

    const updates = [];
    if (service_name) updates.push(format("service_name=%L", service_name));
    if (service_price !== undefined) updates.push(format("service_price=%L", service_price));

    const sql = `UPDATE services SET ${updates.join(", ")} WHERE service_id=${format("%L", id)}`;

    const client = getPgClient();
    await client.connect();
    const result = await client.query(sql);
    await client.end();

    if (result.rowCount > 0) {
        res.send({ success: true, code: 200, message: "Service updated successfully." });
    } else {
        res.send({ success: false, code: 404, message: `Service with id ${id} not found.` });
    }
});

module.exports = router;
