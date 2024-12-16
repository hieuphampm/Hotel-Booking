exports.up = function(knex) {
    return knex.schema.createTable("rooms", (table) => {
      table.increments("id").primary();
      table.string("roomType").notNullable();
      table.string("description", 1000);
      table.string("imageURL");
      table.integer("price").notNullable();
      table.specificType("amenities", "TEXT[]");
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable("rooms");
  };
  