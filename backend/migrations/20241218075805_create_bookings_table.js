exports.up = function(knex) {
  return knex.schema.createTable("bookings", (table) => {
    table.increments("id").primary();
    table.date("checkInDate").notNullable();
    table.date("checkOutDate").notNullable();
    table.string("bookingId").unique().notNullable();
    table.decimal("totalPrice", 10, 2).notNullable();
    table.specificType("selectedServices", "TEXT[]").notNullable();
    table.integer("roomId").unsigned().references("id").inTable("rooms").onDelete("SET NULL"); 
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("bookings");
};
