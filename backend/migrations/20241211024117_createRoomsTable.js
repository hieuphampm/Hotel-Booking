exports.up = async function(knex) {
  await knex.raw(`
      CREATE TABLE room(  
          room_id int NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
          name text,
          price int,
          imageUrl text, 
          description text  
      );
      COMMENT ON TABLE room IS 'Room';
      COMMENT ON COLUMN room.name IS 'Room Name';
      COMMENT ON COLUMN room.price IS 'Room Price';
      COMMENT ON COLUMN room.imageUrl IS 'Room Images';
      COMMENT ON COLUMN room.description IS 'Room Description';
  `);
};

exports.down = async function(knex) {
  await knex.raw(`
      DROP TABLE room;
  `);
};
