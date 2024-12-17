const { Client } = require('pg');

module.exports.getPgClient = function () {
    const client = new Client({    
        host: `${process.env.POSTGRES_HOST}`,
        port: `${process.env.POSTGRES_PORT}`,
        database: `${process.env.POSTGRES_DB}`,
        user: `${process.env.POSTGRES_USER}`,
        password: `${process.env.POSTGRES_PASSWORD}`,
    });

    console.log('Attempting to connect to PostgreSQL...');
    client.connect(err => {
        if (err) {
            console.error('Error connecting to PostgreSQL:', err.stack);
        } else {
            console.log('Successfully connected to PostgreSQL');
        }
    });

    return client;
};

module.exports.getKnex = function () {
    const knex = require('knex')({
        client: 'postgresql',
        connection: {
            host: `${process.env.POSTGRES_HOST}`,
            port: `${process.env.POSTGRES_PORT}`,
            database: `${process.env.POSTGRES_DB}`,
            user: `${process.env.POSTGRES_USER}`,
            password: `${process.env.POSTGRES_PASSWORD}`
        },
    });

    // Log knex initialization
    console.log('Knex initialized with the following config:', {
        host: process.env.POSTGRES_HOST,
        port: process.env.POSTGRES_PORT,
        database: process.env.POSTGRES_DB
    });

    return knex;
};
