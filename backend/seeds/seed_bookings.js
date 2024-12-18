exports.seed = function(knex) {
  return knex("bookings").del()
    .then(function() {
      return knex("bookings").insert([
        {
          checkInDate: "2024-12-20",
          checkOutDate: "2024-12-25",
          bookingId: "BOOK001",
          totalPrice: 2500000.00,
          selectedServices: ["Spa", "Breakfast", "Airport Pickup"],
          roomId: null
        },
        {
          checkInDate: "2024-12-25",
          checkOutDate: "2024-12-30",
          bookingId: "BOOK003",
          totalPrice: 750000.00,
          selectedServices: ["Breakfast", "Laundry"],
          roomId: null 
        }
      ]);
    });
};
