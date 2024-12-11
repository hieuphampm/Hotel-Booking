'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Rooms', [
      {
        name: 'Standard Room',
        description: 'Comfortable and affordable stay with essential amenities for solo travelers or business guests.',
        imageUrl: './backend/img/standard-room.jpg',  
        route: '/standard-room',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Deluxe Room',
        description: 'Extra space and stylish furnishings, perfect for those seeking a more luxurious and relaxing experience.',
        imageUrl: './backend/img/deluxe-room.jpg', 
        route: '/deluxe-room',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Family Room',
        description: 'Designed for families, offering spacious accommodations and convenient amenities for a memorable stay.',
        imageUrl: './backend/img/family-room.jpg', 
        route: '/family-room',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Dormitory Room',
        description: 'Budget-friendly shared accommodations, ideal for backpackers and group travelers.',
        imageUrl: './backend/img/Dormitory-Room.jpg',  
        route: '/dormitory-room',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Presidential Suite',
        description: 'The ultimate in luxury with expansive living space and exclusive services for a truly indulgent experience.',
        imageUrl: './backend/img/Presidential-Suite-Room.jpg',  
        route: '/presidential-suite',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Rooms', null, {});
  },
};
