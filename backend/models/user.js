
const {getPgClient} = require('./db.js');
const format = require('pg-format');

const login = async (username, password) => {
    const client = getPgClient();
    const sql = format(
        "select json_agg(public.login(%L, %L))",
        username, password
    );
    
    await client.connect();
    const result = await client.query(sql);  
    await client.end();

    return result.rows[0].json_agg[0];;
} 

module.exports = {
    login
}