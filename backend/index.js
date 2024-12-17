const express = require('express');
const { Client } = require('pg');
require('dotenv').config();
const path = require('path');
const roomRoutes = require('./routes/roomRoutes'); 

const server = express();

server.use(express.json()); 
server.use('/static', express.static(path.join(__dirname, 'public')));

server.use('/api', roomRoutes); 

server.get('/', async function(req, res) {
    const client = new Client({
        host: `${process.env.POSTGRES_HOST}`,
        port: `${process.env.POSTGRES_PORT}`,
        database: `${process.env.POSTGRES_DB}`,
        user: `${process.env.POSTGRES_USER}`,
        password: `${process.env.POSTGRES_PASSWORD}`,
    });

    let db_info = "Database is up & running";
    try {
        await client.connect();
    } catch (e) {
        db_info = "Cannot connect to database!";
        console.log(e);
    } finally {
        await client.end();
    }

    res.send({
        Server: "Server is working",
        Database: db_info
    });
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Static files are served at http://localhost:${PORT}`);
});
