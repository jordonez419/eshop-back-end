exports.seed = async function (knex) {
    // await knex('users').truncate()
    await knex('users').insert(
        [
            {
                user_name: 'Locoman305',
                password: 'Computer246'
            },
            {
                user_name: 'Valerio',
                password: 'Flex'
            },
            {
                user_name: 'chrii',
                password: 'ethchris'
            },
        ]
    )
}