
exports.up = function(knex) {
  return knex.schema.createTable('offers', table => {
    table.increments();
    table.integer('priceAnterior').notNullable(); 
    table.integer('priceNew').notNullable();
    table.string('ref_product').notNullable()
    
    // table.foreign('ref_product').references('productID').inTable('products');

    
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('offers')
};
