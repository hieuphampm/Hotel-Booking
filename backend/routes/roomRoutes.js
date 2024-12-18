require('dotenv').config();

const restify = require('restify');
const Router = require('restify-router').Router;
const { Pool } = require('pg');

const router = new Router();
const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
});

const server = restify.createServer();
server.use(restify.plugins.bodyParser());

router.get('/rooms', async (req, res) => {
  try {
    console.log('Fetching all rooms...');
    const result = await pool.query('SELECT * FROM rooms');
    res.send(200, { message: 'Rooms fetched successfully', data: result.rows });
  } catch (error) {
    console.error('Error fetching all rooms:', error);
    res.send(500, { message: 'Failed to fetch rooms', error: error.message });
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
    res.send(200, { message: 'Room fetched successfully', data: room });
  } catch (error) {
    console.error(`Error fetching room with ID ${id}:`, error);
    res.send(500, { message: 'Failed to fetch room', error: error.message });
  }
});

router.post("/rooms", async (req, res) => {
  console.log("Received request body:", req.body);

  const { roomType, description, imageURL, price, amenities } = req.body;

  if (!roomType || !description || !imageURL || !price || !amenities) {
    return res.send(400, { message: "Missing required fields in the request body" });
  }

  const client = await pool.connect(); 
  try {
    const result = await client.query(
      `INSERT INTO rooms ("roomType", "description", "imageURL", "price", "amenities")
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *;`,
      [roomType, description, imageURL, price, amenities]
    );
    res.send(201, result.rows[0]);
  } catch (error) {
    console.error("Error in /rooms POST route:", error);
    res.send(500, { message: "Internal server error", error });
  } finally {
    client.release();
  }
});

router.put('/rooms/:id', async (req, res) => {
  const { id } = req.params;
  const { roomType, description, imageURL, price, amenities } = req.body;

  try {
    console.log(`Updating room with ID: ${id}`);
    const result = await pool.query(
      `UPDATE rooms 
       SET "roomType" = $1, "description" = $2, "imageURL" = $3, "price" = $4, "amenities" = $5
       WHERE id = $6
       RETURNING *;`,
      [roomType, description, imageURL, price, amenities, id]
    );

    const updatedRoom = result.rows[0];
    if (!updatedRoom) {
      return res.send(404, { message: 'Room not found' });
    }
    res.send(200, { message: 'Room updated successfully', data: updatedRoom });
  } catch (error) {
    console.error(`Error updating room with ID ${id}:`, error);
    res.send(500, { message: 'Failed to update room', error: error.message });
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
    res.send(200, { message: 'Room deleted successfully', data: deletedRoom });
  } catch (error) {
    console.error(`Error deleting room with ID ${id}:`, error);
    res.send(500, { message: 'Failed to delete room', error: error.message });
  }
});

module.exports = router;
