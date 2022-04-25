exports.up = function (knex) {
    return knex.schema
        .createTable('users', tbl => {
            tbl.increments('user_id')
            tbl.string('user_name').notNullable().unique()
            tbl.string('password').notNullable()
        })
        .createTable('items', tbl => {
            tbl.increments('item_id')
            tbl.string('item_name').notNullable().unique()
            tbl.decimal('price').notNullable()
            tbl.string('picture', 1000).notNullable()
        })
        .createTable('orders', tbl => {
            tbl.increments('order_id')
            tbl.string('date')
        })
        .createTable('items_orders', tbl => {
            tbl.integer('order_id')
                .unsigned()
                .notNullable()
                .references('order_id')
                .inTable('orders')
                .onDelete('CASCADE')
            tbl.integer('item_id')
                .unsigned()
                .notNullable()
                .references('item_id')
                .inTable('items')
                .onDelete('CASCADE')
            tbl.increments('item_order_id')
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('items_orders')
        .dropTableIfExists('users')
        .dropTableIfExists('items')
        .dropTableIfExists('orders')
};
