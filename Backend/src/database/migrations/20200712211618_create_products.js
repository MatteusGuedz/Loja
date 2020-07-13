
exports.up = function(knex) {
  return knex.schema.createTable('products', table => {
      table.string('id').primary();
      table.string('name').notNullable();
      table.integer('price').notNullable();
      table.string('category').notNullable();
      table.boolean('disponibility').notNullable();
      table.boolean('originalPack').notNullable();
      table.string('description').notNullable();
      table.string('mark').notNullable();
      table.string('productID').notNullable();
      table.string('peso');
      table.string('dimensions');
      table.integer('quantidade');


  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('products');
};
