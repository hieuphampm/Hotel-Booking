const Router = require('restify-router').Router;
const router = new Router();
const {authenticated} = require('./middleware/authenticate');
const {authorized} = require('./middleware/authorize');
const {validated} = require('./middleware/validated');

const Manager = require('../models/manager');

router.get('/manager', [authenticated, authorized], async (req, res) => {
    const result = await Manager.getAll(req);
    res.send({
        success: true, code: 200, 
        data: result
    });
});

router.patch('/manager/:username', [authenticated, authorized, validated], async(req, res) => {
    const {username} = req.params;
    const context = req.user;
    const patch = req.params;

    const result = await Manager.update(context, username, patch);
    res.send(result);
})

module.exports = router;