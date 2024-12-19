exports.seed = async function(knex) {
  await knex('manager').del()
  await knex('manager').insert([
    {username: 'manager01', fullname: 'Vo Huynh Thai Bao', base_salary: 20000000},
    {username: 'manager02', fullname: 'Pham Phuoc Minh Hieu', base_salary: 35000000},
  ]);
};