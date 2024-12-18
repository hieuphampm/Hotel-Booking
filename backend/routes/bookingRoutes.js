const Router = require("restify-router").Router;
const BookingModel = require("../models/bookingModel");
const router = new Router();
const restify = require('restify');

const server = restify.createServer();
server.use(restify.plugins.bodyParser());

router.get("/bookings", async (req, res) => {
  try {
    const bookings = await BookingModel.getAllBookings();
    res.send(200, bookings);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.send(500, { message: "Failed to fetch bookings", error });
  }
});

router.get("/bookings/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const booking = await BookingModel.getBookingById(id);
    if (!booking) {
      return res.send(404, { message: "Booking not found" });
    }
    res.send(200, booking);
  } catch (error) {
    console.error("Error fetching booking by ID:", error);
    res.send(500, { message: "Failed to fetch booking", error });
  }
});

router.post("/bookings", async (req, res) => {
  console.log("Received request body:", req.body);

  const { totalPrice, ...rest } = req.body;

  if (typeof totalPrice === "undefined") {
    return res.send(400, { message: "totalPrice is required" });
  }

  const parsedTotalPrice = parseFloat(totalPrice);
  if (isNaN(parsedTotalPrice)) {
    return res.send(400, { message: "Invalid totalPrice value" });
  }

  console.log("Parsed totalPrice:", parsedTotalPrice);

  try {
    const result = await pool.query(
      `INSERT INTO bookings ("checkInDate", "checkOutDate", "bookingId", "totalPrice", "selectedServices", "roomId")
       VALUES ($1, $2, $3, $4, $5, $6) 
       RETURNING "id", "checkInDate", "checkOutDate", "bookingId", "totalPrice", "selectedServices", "roomId"`,
      [
        rest.checkInDate,
        rest.checkOutDate,
        rest.bookingId,
        parsedTotalPrice,
        rest.selectedServices || [],
        rest.roomId || null,
      ]
    );

    const newBooking = result.rows[0];
    res.send(201, newBooking);
  } catch (error) {
    console.error("Error creating booking:", error);
    res.send(500, { message: "Failed to create booking", error });
  }
});


router.put("/bookings/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedBooking = await BookingModel.updateBooking(id, req.body);
    if (!updatedBooking) {
      return res.send(404, { message: "Booking not found" });
    }
    res.send(200, updatedBooking);
  } catch (error) {
    console.error("Error updating booking:", error);
    res.send(500, { message: "Failed to update booking", error });
  }
});

router.del("/bookings/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await BookingModel.deleteBooking(id);
    if (!deleted) {
      return res.send(404, { message: "Booking not found" });
    }
    res.send(200, { message: "Booking deleted successfully" });
  } catch (error) {
    console.error("Error deleting booking:", error);
    res.send(500, { message: "Failed to delete booking", error });
  }
});

module.exports = router;