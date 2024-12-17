require('dotenv').config();

var restify = require('restify');
var jwt = require('jsonwebtoken');
var Router = require('restify-router').Router;
var router = new Router();
const { Pool } = require('pg');
const RoomModel = require('../models/roomModel');

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
});

router.get('/rooms', async (req, res) => {
  try {
    console.log('Fetching all rooms...');
    const result = await pool.query('SELECT * FROM rooms');
    res.send(200, result.rows); 
  } catch (error) {
    console.error('Error in /rooms route:', error);
    res.send(500, { message: 'Failed to get rooms', error });
  }
});

router.get('/rooms/:id', async (req, res) => {
  const { id } = req.params;
  try {
    console.log(`Fetching room with ID: ${id}`);
    const result = await pool.query('SELECT * FROM rooms WHERE id = $1', [id]);
    const room = result.rows[0];
    if (!room) {
      return res.send(404, { message: 'Room not found' });
    }
    res.send(200, room);
  } catch (error) {
    console.error('Error in /rooms/:id route:', error);
    res.send(500, { message: 'Failed to get room', error });
  }
});

router.post('/rooms', async (req, res) => {
  const { roomType, description, imageURL, price, amenities } = req.body;
  try {
    console.log('Creating new room...');
    const result = await pool.query(
      'INSERT INTO rooms (room_type, description, image_url, price, amenities) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [roomType, description, imageURL, price, amenities]
    );
    const newRoom = result.rows[0];
    res.send(201, newRoom);
  } catch (error) {
    console.error('Error in /rooms POST route:', error);
    res.send(500, { message: 'Failed to create room', error });
  }
});

router.put('/rooms/:id', async (req, res) => {
  const { id } = req.params;
  const { roomType, description, imageURL, price, amenities } = req.body;
  try {
    console.log(`Updating room with ID: ${id}`);
    const result = await pool.query(
      'UPDATE rooms SET room_type = $1, description = $2, image_url = $3, price = $4, amenities = $5 WHERE id = $6 RETURNING *',
      [roomType, description, imageURL, price, amenities, id]
    );
    const updatedRoom = result.rows[0];
    if (!updatedRoom) {
      return res.send(404, { message: 'Room not found' });
    }
    res.send(200, updatedRoom);
  } catch (error) {
    console.error('Error in /rooms/:id PUT route:', error);
    res.send(500, { message: 'Failed to update room', error });
  }
});

router.del('/rooms/:id', async (req, res) => {
  const { id } = req.params;
  try {
    console.log(`Deleting room with ID: ${id}`);
    const result = await pool.query('DELETE FROM rooms WHERE id = $1 RETURNING *', [id]);
    const deletedRoom = result.rows[0];
    if (!deletedRoom) {
      return res.send(404, { message: 'Room not found' });
    }
    res.send(200, { message: 'Room deleted successfully' });
  } catch (error) {
    console.error('Error in /rooms/:id DELETE route:', error);
    res.send(500, { message: 'Failed to delete room', error });
  }
});

module.exports = router;
