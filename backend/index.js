const express = require('express');
const { Client } = require('pg');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
require('dotenv').config();
const roomRoutes = require('./routes/roomRoutes');

const server = express();

server.use(express.json());
server.use('/static', express.static(path.join(__dirname, 'public')));
server.use('/api', roomRoutes);

server.get('/', async function (req, res) {
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

mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err));

const imageSchema = new mongoose.Schema({
    filename: String,
    data: Buffer,
    contentType: String,
});

const Image = mongoose.model('Image', imageSchema);
const storage = multer.memoryStorage();
const upload = multer({ storage });

server.post('/api/upload-image', upload.single('image'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded.' });
        }

        const newImage = new Image({
            filename: req.file.originalname,
            data: req.file.buffer,
            contentType: req.file.mimetype,
        });

        await newImage.save();
        res.status(201).json({ message: 'Image uploaded successfully!' });
    } catch (err) {
        console.error('Error uploading image:', err);
        res.status(500).json({ message: 'Failed to upload image.' });
    }
});

server.get('/api/images', async (req, res) => {
    try {
        const images = await Image.find({});
        res.status(200).json(
            images.map((img) => ({
                id: img._id,
                filename: img.filename,
                contentType: img.contentType,
                data: img.data.toString('base64'),
            }))
        );
    } catch (err) {
        console.error('Error fetching images:', err);
        res.status(500).json({ message: 'Failed to fetch images.' });
    }
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Static files are served at http://localhost:${PORT}`);
});
