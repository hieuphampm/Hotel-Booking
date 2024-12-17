const bcrypt = require('bcryptjs');

exports.seed = async function(knex) {
  await knex('users').del();

  const hashedPassword1 = await bcrypt.hash('demo123', 10);
  const hashedPassword2 = await bcrypt.hash('demo123', 10);

  await knex('users').insert([
    { username: 'demo', email: 'demo@example.com', password: hashedPassword1 },
    { username: 'demo123', email: 'demo123@example.com', password: hashedPassword2 },
  ]);
};
