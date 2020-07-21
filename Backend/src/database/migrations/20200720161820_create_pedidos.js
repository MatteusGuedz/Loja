
exports.up = function(knex) {
  
  return knex.schema.createTable('requests', table => {
    table.increments()
    table.string('product').notNull()
    table.integer('infoDelivery_ref').notNull()
    table.integer('quantidade').notNull()
    table.integer('priceTotal').notNull()
    table.string('message')
    table.string('status').notNull()
    table.integer('user_id').notNull()

      table
        .foreign('user_id')
        .references('id')
        .inTable('users');
    

    table
      .foreign('product')
      .references('product_id')
      .inTable('products');

    table
      .foreign('infoDelivery_ref')
      .references('id')
      .inTable('delivery_info');
    

  })

};

exports.down = function(knex) {
  return knex.schema.dropTable('requests')
};
