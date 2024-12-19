exports.seed = async function(knex) {
  await knex('booking_detail').del();
  await knex('booking').del();
  var result;
  var id;

  result = await knex.insert(
    {username: 'customer01', booking_date: new Date(), checkin_date: new Date(2024, 12, 4, 9, 0, 0), checkout_date: new Date(2024, 12, 7, 9, 0, 0), total_price: 2000000},
  ).returning('booking_id')
  .into('booking');
  id = result[0].booking_id; 
  await knex.insert(
    {booking_id: id, room_id: 1, price_per_day: 120000, total_price: 1100000},
    {booking_id: id, room_id: 2, price_per_day: 130000, total_price: 1200000},
  ).into('booking_detail');


  result = await knex.insert(
    {username: 'customer01', booking_date: new Date(), checkin_date: new Date(2024, 12, 15, 14, 0, 0), checkout_date: new Date(2024, 12, 19, 9, 0, 0), total_price: 4000000},
  ).returning('booking_id')
  .into('booking')
  id = result[0].booking_id; 
  await knex.insert(
      {booking_id: id, room_id: 3, price_per_day: 140000, total_price: 1300000},
      {booking_id: id, room_id: 4, price_per_day: 150000, total_price: 1400000},
  ).into('booking_detail');
 

  result = await knex.insert(
    {username: 'customer02', booking_date: new Date(), checkin_date: new Date(2024, 12, 26, 9, 0, 0), checkout_date: new Date(2024, 12, 30, 9, 0, 0), total_price: 5000000},
  ).returning('booking_id')
  .into('booking')
  id = result[0].booking_id; 
  await  knex.insert(
      {booking_id: id, room_id: 5, price_per_day: 160000, total_price: 1500000},
      {booking_id: id, room_id: 1, price_per_day: 170000, total_price: 1600000},
    ).into('booking_detail');
  

    result = await knex.insert(
    {username: 'customer02', booking_date: new Date(), checkin_date: new Date(2025, 1, 10, 9, 0, 0), checkout_date: new Date(2025, 12, 1, 19, 0, 0), total_price: 6000000},
  ).returning('booking_id')
  .into('booking')
  id = result[0].booking_id; 
  await knex.insert(
      {booking_id: id, room_id: 2, price_per_day: 180000, total_price: 1700000},
      {booking_id: id, room_id: 3, price_per_day: 190000, total_price: 1800000},
    ).into('booking_detail');


  result = await knex.insert(
    {username: 'customer02', booking_date: new Date(), checkin_date: new Date(2025, 2, 15, 9, 0, 0), checkout_date: new Date(2025, 12, 2, 29, 0, 0), total_price: 7000000},
  ).returning('booking_id')
  .into('booking')
  id = result[0].booking_id; 
  await  knex.insert(
      {booking_id: id, room_id: 4, price_per_day: 200000, total_price: 1900000},
    ).into('booking_detail');
};
