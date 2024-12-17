const knex = require('../db/knex'); 

class RoomModel {
  static async getAllRooms() {
    try {
      console.log('Querying all rooms...');
      return await knex('rooms').select('*');
    } catch (error) {
      console.error('Error querying all rooms:', error); 
      throw error;
    }
  }

  static async getRoomById(id) {
    try {
      console.log(`Querying room by ID: ${id}`);
      return await knex('rooms').where('id_room', id).first();
    } catch (error) {
      console.error(`Error querying room by ID ${id}:`, error);  
      throw error;
    }
  }

  static async createRoom(data) {
    try {
      console.log('Inserting new room:', data);
      return await knex('rooms').insert(data).returning('*');
    } catch (error) {
      console.error('Error inserting new room:', error); 
      throw error;
    }
  }

  static async updateRoom(id, data) {
    try {
      console.log(`Updating room with ID ${id}:`, data);
      return await knex('rooms').where('id_room', id).update(data).returning('*');
    } catch (error) {
      console.error(`Error updating room with ID ${id}:`, error);  
      throw error;
    }
  }

  static async deleteRoom(id) {
    try {
      console.log(`Deleting room with ID: ${id}`);
      return await knex('rooms').where('id_room', id).del();
    } catch (error) {
      console.error(`Error deleting room with ID ${id}:`, error);  
      throw error;
    }
  }
}

module.exports = RoomModel;
