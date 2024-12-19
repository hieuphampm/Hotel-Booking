const Router = require('restify-router').Router;
const router = new Router();
const Booking = require('../models/booking');
const { authenticated } = require('./middleware/authenticate');
const { authorized } = require('./middleware/authorize');
const { validated } = require('./middleware/validated');

router.get('/customer/:username/booking', [authenticated, validated], async (req, res) => {
    const { username } = req.params;
    const bookings = await Booking.getByUsername(username);

    res.send({ success: true, code: 200, data: bookings });
});

router.get('/booking/:id', [authenticated, validated], async (req, res) => {
    const { id } = req.params;
    const { username } = req.user;
    const booking = await Booking.getById(id, username);

    if (booking) {
        res.send({ success: true, code: 200, data: booking });
    } else {
        res.send({ success: false, code: 404, message: 'Booking not found or access denied' });
    }
});

router.post('/booking', [authenticated, authorized, validated], async (req, res) => {
    const { username, booking_date, checkin_date, checkout_date, total_price } = req.body;
    const id = await Booking.create({ username, booking_date, checkin_date, checkout_date, total_price });

    res.send({ success: true, code: 201, message: 'Booking created successfully', data: { booking_id: id } });
});

router.patch('/booking/:id', [authenticated, validated], async (req, res) => {
    const { id } = req.params;
    const { username } = req.user;
    const { checkin_date, checkout_date, total_price } = req.body;

    const updated = await Booking.updateById(id, username, { checkin_date, checkout_date, total_price });
    if (updated) {
        res.send({ success: true, code: 200, message: 'Booking updated successfully' });
    } else {
        res.send({ success: false, code: 404, message: 'Booking not found or access denied' });
    }
});

router.del('/booking/:id', [authenticated, validated], async (req, res) => {
    const { id } = req.params;
    const { username } = req.user;

    const deleted = await Booking.deleteById(id, username);
    if (deleted) {
        res.send({ success: true, code: 200, message: 'Booking deleted successfully' });
    } else {
        res.send({ success: false, code: 404, message: 'Booking not found or access denied' });
    }
});

module.exports = router;
