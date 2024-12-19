const {getKnex} = require('./db.js');
const {rowFilter} = require('./security/row.js');

const table = 'manager';
const columns = ['username', 'fullname', 'base_salary']

const getAll = async (req) => {
    let knex = getKnex()(table)
        .select(columns);
    knex = rowFilter(knex, "getAll", table, req.user);
    const result = await knex;
    return result;
} 

const _ = require('lodash');

const update = async(context, username, patch) => {
    const {role} = context;
    const validPatch = _.pick(patch, columnFilter(table, role, "update"));

    let knex = getKnex()(table)
        .update(validPatch)
        .where({username: username});
    knex = rowFilter(knex, "update", table, context);
    const rowCount = await knex;
    return {
        success: rowCount == 1,
        data: validPatch
    };
}

module.exports = {
    getAll, update
}