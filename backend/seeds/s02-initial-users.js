exports.seed = async function(knex) {
  await knex.raw(`
    select public.create_account('admin', '1234', 'admin');
    select public.create_account('manager01', '1234', 'manager');
    select public.create_account('manager02', '1234', 'manager');
    select public.create_account('customer01', '1234', 'customer');
    select public.create_account('customer02', '1234', 'customer');
  `);
};
