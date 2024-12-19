const { getKnex } = require('./db');
const { rowFilter, columnFilter } = require('./security/row');

const table = 'booking_detail';
const columns = ['booking_detail_id', 'booking_id', 'room_id', 'price_per_day', 'total_price'];

const updateById = async (context, detailId, bookingId, patch) => {
    const validPatch = _.pick(patch, columnFilter(table, context.role, "update"));
    let knex = getKnex()(table)
        .update(validPatch)
        .where({ booking_detail_id: detailId, booking_id: bookingId });
    knex = rowFilter(knex, "updateById", table, context);
    const rowCount = await knex;
    return {
        success: rowCount === 1,
        data: validPatch,
    };
};

const deleteById = async (context, detailId) => {
    let knex = getKnex()(table).where({ booking_detail_id: detailId });
    knex = rowFilter(knex, "deleteById", table, context);
    const rowCount = await knex.del();
    return rowCount > 0;
};

module.exports = {
    updateById,
    deleteById,
};
