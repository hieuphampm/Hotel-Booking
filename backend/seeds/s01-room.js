exports.seed = async function(knex) {
  await knex('room').del()
  await knex('room').insert([
    {name: 'Standard Room', price: 500000},
    {name: 'Family Room', price: 750000},
    {name: 'Deluxe Room', price: 1000000},
    {name: 'Dormitory Room', price: 1250000},
    {name: 'Presidential Suite Room', price: 2500000}
  ]);
};
