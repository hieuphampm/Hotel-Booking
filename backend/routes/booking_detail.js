const Router = require('restify-router').Router;
const router = new Router();
const BookingDetail = require('../models/booking_detail');
const { authenticated } = require('./middleware/authenticate');
const { validated } = require('./middleware/validated');

// 2.5 PATCH /customer/:username/booking/:booking_id/detail/:detail_id
router.patch('/customer/:username/booking/:booking_id/detail/:detail_id', [authenticated, validated], async (req, res) => {
    const { username, booking_id, detail_id } = req.params;
    const { price_per_day, total_price } = req.body;

    const updated = await BookingDetail.updateById(detail_id, booking_id, username, { price_per_day, total_price });
    if (updated) {
        res.send({ success: true, code: 200, message: 'Booking detail updated successfully' });
    } else {
        res.send({ success: false, code: 404, message: 'Booking detail not found or access denied' });
    }
});

// 2.6 DEL /detail/:id
router.del('/detail/:id', [authenticated, validated], async (req, res) => {
    const { id } = req.params;
    const { username } = req.user;

    const deleted = await BookingDetail.deleteById(id, username);
    if (deleted) {
        res.send({ success: true, code: 200, message: 'Booking detail deleted successfully' });
    } else {
        res.send({ success: false, code: 404, message: 'Booking detail not found or access denied' });
    }
});

module.exports = router;
