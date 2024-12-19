const { Client } = require('pg');

module.exports.getPgClient = function () {
    return new Client({    
        host: `${process.env.POSTGRES_HOST}`,
        port: `${process.env.POSTGRES_PORT}`,
        database: `${process.env.POSTGRES_DB}`,
        user: `${process.env.POSTGRES_USER}`,
        password: `${process.env.POSTGRES_PASSWORD}`,
    })
};

module.exports.getKnex = function () {
    return require('knex')({
        client: 'postgresql',
        connection: {
            host: `${process.env.POSTGRES_HOST}`,
            port: `${process.env.POSTGRES_PORT}`,
            database: `${process.env.POSTGRES_DB}`,
            user:     `${process.env.POSTGRES_USER}`,
            password: `${process.env.POSTGRES_PASSWORD}`
        },
      });
};