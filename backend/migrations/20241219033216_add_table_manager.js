exports.up = async function(knex) {
    await knex.raw(`
        CREATE TABLE manager(  
            username text NOT NULL PRIMARY KEY,
            fullname text,
            base_salary int
        );
        COMMENT ON TABLE manager IS 'Manager';
        COMMENT ON COLUMN manager.username IS 'Room Name';
        COMMENT ON COLUMN manager.fullname IS 'Full Name';
        COMMENT ON COLUMN manager.base_salary IS 'Salary';
    `);
};

exports.down = async function(knex) {           
    await knex.raw(`
        DROP TABLE manager;
    `);
};