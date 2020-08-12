
exports.up = function(knex) {
  return knex.schema.createTable('images', table => {
    table.increments('id').primary();
    table.string('ref_id').notNullable();
    table.string('imageURL').notNullable();
    


    table
    .foreign('ref_id')
    .references('product_id')
    .inTable('products')
    .onUpdate('CASCADE')
    .onDelete('CASCADE')
    ;
    
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('images')
};
