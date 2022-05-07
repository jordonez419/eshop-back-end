exports.seed = async function (knex) {
    // await knex('users').truncate()
    await knex('orders').insert(
        [
            {
                user_id: 1,
                // date: '4/25/22'
            },
            {
                user_id: 2,
                // date: '1/20/22'
            },
            {
                user_id: 3,
                // date: '3/15/22'
            },
        ]
    )
}