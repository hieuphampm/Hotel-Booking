const express = require('express');
const router = express.Router();
const RoomModel = require('../models/roomModel');

router.get('/rooms', async (req, res) => {
  try {
    const rooms = await RoomModel.getAllRooms();
    res.status(200).json(rooms);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get rooms', error });
  }
});

router.get('/rooms/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const room = await RoomModel.getRoomById(id);
    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }
    res.status(200).json(room);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get room', error });
  }
});

router.post('/rooms', async (req, res) => {
  const { roomType, description, imageURL, price, amenities } = req.body;
  try {
    const newRoom = await RoomModel.createRoom({ roomType, description, imageURL, price, amenities });
    res.status(201).json(newRoom);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create room', error });
  }
});

router.put('/rooms/:id', async (req, res) => {
  const { id } = req.params;
  const { roomType, description, imageURL, price, amenities } = req.body;
  try {
    const updatedRoom = await RoomModel.updateRoom(id, { roomType, description, imageURL, price, amenities });
    if (!updatedRoom) {
      return res.status(404).json({ message: 'Room not found' });
    }
    res.status(200).json(updatedRoom);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update room', error });
  }
});

router.delete('/rooms/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedRoom = await RoomModel.deleteRoom(id);
    if (!deletedRoom) {
      return res.status(404).json({ message: 'Room not found' });
    }
    res.status(200).json({ message: 'Room deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete room', error });
  }
});

module.exports = router;
