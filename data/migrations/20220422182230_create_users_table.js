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
        .createTable('users_items', tbl => {
            tbl.integer('item_id')
                .unsigned()
                .notNullable()
                .references('item_id')
                .inTable('items')
                .onDelete('CASCADE')
            tbl.integer('user_id')
                .unsigned()
                .notNullable()
                .references('user_id')
                .inTable('users')
                .onDelete('CASCADE')
            tbl.increments('user_item_id')
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('users_items')
        .dropTableIfExists('users')
        .dropTableIfExists('items')
};
