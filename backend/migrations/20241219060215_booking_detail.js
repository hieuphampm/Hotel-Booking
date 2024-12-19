exports.up = async function(knex) {
    await knex.raw(`
        CREATE TABLE booking_detail(
            booking_detail_id int NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,   
            booking_id int references booking(booking_id),
            room_id int references room(room_id),
            price_per_day int,
            total_price int
        );
        COMMENT ON TABLE booking_detail IS 'Booking details';
        COMMENT ON COLUMN booking_detail.booking_detail_id IS 'Booking detail code';
        COMMENT ON COLUMN booking_detail.booking_id IS 'Booking information code';
        COMMENT ON COLUMN booking_detail.room_id IS 'Booking date';
        COMMENT ON COLUMN booking_detail.price_per_day IS 'Room rate per day';
        COMMENT ON COLUMN booking_detail.total_price IS 'Total amount payable';
    `);
};

exports.down = async function(knex) {
    await knex.raw(`
        DROP TABLE booking_detail;
    `);
};