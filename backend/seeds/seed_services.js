exports.seed = function (knex) {
  return knex('services').del()
      .then(function () {
          return knex('services').insert([
              { service_name: 'Room Cleaning', service_price: 50000 },
              { service_name: 'Spa', service_price: 100000 },
              { service_name: 'Breakfast', service_price: 20000 },
              { service_name: 'Airport Transfer', service_price: 200000 },
              { service_name: 'Rental Car', service_price: 150000 },
              { service_name: 'Camping', service_price: 180000 }
          ]);
      });
};
