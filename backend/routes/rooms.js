const express = require('express');
const { Room } = require('../models');
const router = express.Router();

// 1. Get all rooms
router.get('/rooms', async (req, res) => {
  try {
    const rooms = await Room.findAll();  // Get all rooms from the database
    res.json(rooms);  // Send the room data as a JSON response
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while fetching rooms' });
  }
});

// 2. Get a single room by ID
router.get('/rooms/:id', async (req, res) => {
  try {
    const room = await Room.findByPk(req.params.id);  // Find room by primary key (ID)
    if (!room) {
      return res.status(404).json({ error: 'Room not found' });
    }
    res.json(room);  // Send the room data as a JSON response
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while fetching the room' });
  }
});

// 3. Create a new room
router.post('/rooms', async (req, res) => {
  try {
    const { name, description, imageUrl, route } = req.body;
    const newRoom = await Room.create({ name, description, imageUrl, route });  // Create a new room
    res.status(201).json(newRoom);  // Return the created room
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while creating the room' });
  }
});

// 4. Update a room by ID
router.put('/rooms/:id', async (req, res) => {
  try {
    const room = await Room.findByPk(req.params.id);
    if (!room) {
      return res.status(404).json({ error: 'Room not found' });
    }
    const { name, description, imageUrl, route } = req.body;
    await room.update({ name, description, imageUrl, route });  // Update room data
    res.json(room);  // Return updated room
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while updating the room' });
  }
});

// 5. Delete a room by ID
router.delete('/rooms/:id', async (req, res) => {
  try {
    const room = await Room.findByPk(req.params.id);
    if (!room) {
      return res.status(404).json({ error: 'Room not found' });
    }
    await room.destroy();  // Delete room from the database
    res.status(204).send();  // Send a successful response with no content
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while deleting the room' });
  }
});

module.exports = router;
