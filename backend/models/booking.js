const { getKnex } = require('./db');
const { rowFilter, columnFilter } = require('./security/row');

const table = 'booking';
const columns = ['booking_id', 'username', 'booking_date', 'checkin_date', 'checkout_date', 'total_price'];

const getByUsername = async (context) => {
    let knex = getKnex()(table).select(columns).where({ username: context.user.username });
    knex = rowFilter(knex, "getByUsername", table, context.user);
    const result = await knex;
    return result;
};

const getById = async (context, id) => {
    let knex = getKnex()(table).select(columns).where({ booking_id: id });
    knex = rowFilter(knex, "getById", table, context.user);
    const result = await knex.first();
    return result;
};

const create = async (context, data) => {
    const validData = _.pick(data, columnFilter(table, context.role, "create"));
    let knex = getKnex()(table).insert(validData).returning('booking_id');
    knex = rowFilter(knex, "create", table, context);
    const [id] = await knex;
    return id;
};

const updateById = async (context, id, patch) => {
    const validPatch = _.pick(patch, columnFilter(table, context.role, "update"));
    let knex = getKnex()(table).update(validPatch).where({ booking_id: id });
    knex = rowFilter(knex, "updateById", table, context);
    const rowCount = await knex;
    return {
        success: rowCount === 1,
        data: validPatch,
    };
};

const deleteById = async (context, id) => {
    let knex = getKnex()(table).where({ booking_id: id }).del();
    knex = rowFilter(knex, "deleteById", table, context);
    const rowCount = await knex;
    return rowCount > 0;
};

module.exports = {
    getByUsername,
    getById,
    create,
    updateById,
    deleteById,
};
