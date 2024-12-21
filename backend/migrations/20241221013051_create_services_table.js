exports.up = function (knex) {
    return knex.schema.createTable('services', function (table) {
        table.increments('service_id').primary();
        table.string('service_name').notNullable();
        table.integer('service_price').notNullable().unsigned();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('services');
};
