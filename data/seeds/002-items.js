exports.seed = async function (knex) {
    // await knex('items').truncate()
    await knex('items').insert(
        [
            {
                item_name: 'Naruto T-shirt',
                price: 14.99,
                picture: 'https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C8135oufoT2L.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UL1500_.png',
            },
            {
                item_name: 'Eren Yeager T-shirt',
                price: 19.99,
                picture: 'https://axiesvg.com/wp-content/uploads/2021/09/Attack-On-Titan-Shingeki-No-Kyojin-Eren-Yeager-Jaeger-Classic-Tshirt.jpg',
            },
            {
                item_name: 'Levi Ackermann shirt',
                price: 24.99,
                picture: 'https://res.cloudinary.com/teepublic/image/private/s--hp5SxT10--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,w_470/c_crop,g_north_west,h_626,w_470,x_0,y_9/g_north_west,u_upload:v1462829024:production:blanks:a59x1cgomgu5lprfjlmi,x_-395,y_-325/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1617901577/production/designs/20944711_0.jpg',
            },
            {
                item_name: 'AOT Scout Hoodie',
                price: 25.99,
                picture: 'https://www.thedota2store.com/media/catalog/product/a/t/attack-on-titan-scouting-legion-hoodie-cosplay-costume-2.jpg',
            },
            {
                item_name: 'Naruto Hokage Hoodie',
                price: 30.99,
                picture: 'https://m.media-amazon.com/images/I/61SHXZL25NL._AC_UL1500_.jpg',
            },
            {
                item_name: 'Uchiha Madara Jordans',
                price: 120.99,
                picture: 'https://i.pinimg.com/736x/b7/87/85/b7878544f8c6411b60d36c43ae0d138d--madara-uchiha-nike-dunks.jpg',
            },
            {
                item_name: 'My Hero Academia Deku T-shirt',
                price: 19.99,
                picture: 'https://resize.cdn.otakumode.com/full/shop/product/ab4724be4aa44dc2aab29235859323c7.jpg',
            },
            {
                item_name: 'My Hero Academia All Might T-shirt',
                price: 15.99,
                picture: 'https://i5.walmartimages.com/asr/8d84837c-348a-4225-9988-d9573388bb0c_1.53e17ad3fd947382ee1c94bfd37e4832.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
            },
            {
                item_name: 'Full Metal Alchemist Hoodie',
                price: 40.99,
                picture: 'https://m.media-amazon.com/images/I/51XqVwX6yUL._AC_UY445_.jpg',
            },
            {
                item_name: 'Full Metal Alchemist T-shirt',
                price: 25.99,
                picture: 'https://ctl.s6img.com/society6/img/jA63rYCAR6UFLpq9AW1G7x0v6zA/w_700/tshirts/men/greybg/black/~artwork,bg_FFFFFFFF,fw_3300,fh_5100,fx_-172,iw_3643,ih_5100/s6-original-art-uploads/society6/uploads/misc/9c42d538d11c4e6697efe34aaf8fcce7/~~/full-metal-alchemist1726256-tshirts.jpg',
            },
        ]
    )
}