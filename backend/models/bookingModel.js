const knex = require("../db/knex");

class BookingModel {
  static async getAllBookings() {
    try {
      console.log("Querying all bookings...");
      return await knex("bookings").select("*");
    } catch (error) {
      console.error("Error querying all bookings:", error);
      throw error;
    }
  }

  static async getBookingById(id) {
    try {
      console.log(`Querying booking by ID: ${id}`);
      return await knex("bookings").where("id", id).first();
    } catch (error) {
      console.error(`Error querying booking by ID ${id}:`, error);
      throw error;
    }
  }

  static async createBooking(data) {
    try {
      console.log("Inserting new booking:", data);
      return await knex("bookings").insert(data).returning("*");
    } catch (error) {
      console.error("Error inserting new booking:", error);
      throw error;
    }
  }

  static async updateBooking(id, data) {
    try {
      console.log(`Updating booking with ID ${id}:`, data);
      return await knex("bookings").where("id", id).update(data).returning("*");
    } catch (error) {
      console.error(`Error updating booking with ID ${id}:`, error);
      throw error;
    }
  }

  static async deleteBooking(id) {
    try {
      console.log(`Deleting booking with ID: ${id}`);
      return await knex("bookings").where("id", id).del();
    } catch (error) {
      console.error(`Error deleting booking with ID ${id}:`, error);
      throw error;
    }
  }
}

module.exports = BookingModel;
