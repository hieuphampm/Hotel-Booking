exports.seed = async function(knex) {
  await knex('room').del();
  await knex('room').insert([
    {name: 'Standard Room', price: 100000, imageUrl: '/static/images/standard-room.jpg', description: 'A cozy standard room'},
    {name: 'Family Room', price: 200000, imageUrl: '/static/images/family-room.jpg', description: 'Perfect for families'},
    {name: 'Dormitory Room', price: 300000, imageUrl: '/static/images/Dormitory-Room.jpg', description: 'Shared dormitory room'},
    {name: 'Deluxe Room', price: 350000, imageUrl: '/static/images/deluxe-room.jpg', description: 'Luxurious deluxe room'},
    {name: 'Presidential Suite Room', price: 400000, imageUrl: '/static/images/Presidential-Suite-Room.jpg', description: 'Top-notch suite'}
  ]);
};
