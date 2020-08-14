
exports.up = function(knex) {
  return knex.schema.createTable('products', table => {
      table.increments('id');
      table.string('image').notNullable();
      table.string('nameMain').notNullable();
      table.string('nameDetails').notNullable();
      table.integer('price').notNullable();
      table.integer('category').notNullable();
      table.boolean('disponibility').notNullable();
      table.boolean('originalPack').notNullable();
      table.string('description').notNullable();
      table.string('mark').notNullable();
      table.string('product_id').unique().notNullable();
      table.integer('peso');
      table.string('dimensions');
      table.string('material');
      table.integer('quantidade');


  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('products');
};
