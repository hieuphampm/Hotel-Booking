const knex = require('../db/knex'); 

class RoomModel {
  static async getAllRooms() {
    return knex('rooms').select('*');
  }

  static async getRoomById(id) {
    return knex('rooms').where('id_room', id).first();
  }

  static async createRoom(data) {
    return knex('rooms').insert(data).returning('*');
  }

  static async updateRoom(id, data) {
    return knex('rooms').where('id_room', id).update(data).returning('*');
  }

  static async deleteRoom(id) {
    return knex('rooms').where('id_room', id).del();
  }
}

module.exports = RoomModel;
