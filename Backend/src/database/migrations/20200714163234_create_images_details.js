
exports.up = function(knex) {
  return knex.schema.createTable('images', table => {
    table.increments();
    table.string('image').notNullable();
    table.string('ref_id').notNullable();
    


    table.foreign('ref_id').references('product_id').inTable('products');
    
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('images')
};
