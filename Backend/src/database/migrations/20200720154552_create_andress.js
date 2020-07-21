
exports.up = function(knex) {
    return knex.schema.createTable('delivery_info', table => {

      table.increments()
      table.string('name').notNull()
      table.string('andress').notNull()
      table.string('bairro').notNull()
      table.string('city').notNull()
      table.string('email').notNull()
      table.string('whats').notNull()
      table.integer('user_id').notNull()

      table
        .foreign('user_id')
        .references('id')
        .inTable('users');

    } )
};

exports.down = function(knex) {
   return knex.schema.dropTable('delivery_info')
};
