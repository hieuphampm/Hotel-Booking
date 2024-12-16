const express = require('express');
const { Client } = require('pg');  // Khai báo Client một lần duy nhất
require('dotenv').config();
const path = require('path');
const roomRoutes = require('./routes/roomRoutes');  // Đảm bảo rằng bạn có file roomRoutes.js trong thư mục routes

const server = express();

server.use(express.json()); 
server.use('/static', express.static(path.join(__dirname, 'public')));

server.use('/api', roomRoutes); 

server.get('/rooms', async function(req, res) {
    const client = new Client({
        host: `${process.env.POSTGRES_HOST}`,
        port: `${process.env.POSTGRES_PORT}`,  // Cổng kết nối PostgreSQL, ví dụ 5432
        database: `${process.env.POSTGRES_DB}`,
        user: `${process.env.POSTGRES_USER}`,
        password: `${process.env.POSTGRES_PASSWORD}`,
    });

    const sql = "SELECT * FROM rooms";
    let result = [];

    try {
        await client.connect();  // Kết nối đến PostgreSQL
        const queryResult = await client.query(sql);  // Thực thi truy vấn
        result = queryResult.rows;  // Lấy dữ liệu từ kết quả
    } catch (e) {
        console.log(e);  // Log lỗi
        res.status(500).send({ error: "Error fetching rooms" });  // Trả về lỗi nếu có
        return;
    } finally {
        await client.end();  // Đóng kết nối
    }

    res.json({ rooms: result });  // Trả kết quả
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Static files are served at http://localhost:${PORT}`);
});
