exports.up = async function(knex) {
    await knex.raw(`
        CREATE TABLE booking(
            booking_id int NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,   
            username text,
            booking_date timestamp,
            checkin_date timestamp,
            checkout_date timestamp,
            total_price int
        );
        COMMENT ON TABLE booking IS 'Booking information';
        COMMENT ON COLUMN booking.username IS 'Name of the person placing the order';
        COMMENT ON COLUMN booking.booking_date IS 'Booking date';
        COMMENT ON COLUMN booking.checkin_date IS 'Check-in date';
        COMMENT ON COLUMN booking.checkout_date IS 'Check-out date';
        COMMENT ON COLUMN booking.total_price IS 'Total expected amount';
    `);
};

exports.down = async function(knex) {
    await knex.raw(`
        DROP TABLE booking;
    `);
};