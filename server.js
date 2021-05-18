

const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
    const customers = [
        {id: 1, firstName: 'John', lastName: 'Doe'},
        {id: 2, firstName: 'Steve', lastName: 'Smith'},
        {id: 3, firstName: 'Mary', lastName: 'Swanson'},
    ];

    res.json(customers);
});

app.get('/api/products', (req, res) => {
    const products = [
        {id: 1, name: 'Xiaomi Redmi 9 3/32GB Carbon Grey NFC', price: '150 $', description: 'Xiaomi Redmi 9 3/32GB Carbon Grey NFC', images: [{image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2020/6/pr_2020_6_25_15_18_4_537_00.jpg"}]},
        {id: 2, name: 'Motorola Moto G30 6/128GB Dark Pearl 90Hz', price: '220 $', description: 'Motorola Moto G30 6/128GB Dark Pearl 90Hz', images: [{image:'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/2/pr_2021_2_20_8_32_27_472_00.jpg'}]},
        {id: 3, name: 'Dell S2721DGFA nanoIPS HDR', price: '450 $', description: 'Dell S2721DGFA nanoIPS HDR', images: [{image:'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2020/9/pr_2020_9_2_11_10_57_978_00.jpg'}]},
        {id: 4, name: 'SanDisk Extreme Portable SSD 500GB USB 3.1', price: '80 $', description: 'SanDisk Extreme Portable SSD 500GB USB 3.1', images: [{image:'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2018/3/pr_2018_3_20_12_3_20_475_02.jpg'}]},
        {id: 5, name: 'be quiet! Straight Power 11 1000W 80 Plus Gold', price: '240 $', description: 'be quiet! Straight Power 11 1000W 80 Plus Gold', images: [{image:'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2018/1/pr_2018_1_8_8_23_29_663_04.jpg'}]},
        {id: 6, name: 'LG 55NANO863PA', price: '1050 $', description: 'LG 55NANO863PA', images: [{image:'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/3/pr_2021_3_12_13_16_13_64_03.jpg'}]},
        {id: 7, name: 'Sony WH-CH510', price: '30 $', description: 'Sony WH-CH510', images: [{image:'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2019/11/pr_2019_11_18_10_18_21_501_00.jpg'}]},
        {id: 8, name: 'Silver Monkey SMG-700', price: '150 $', description: 'Silver Monkey SMG-700', images: [{image:'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2019/5/pr_2019_5_23_12_53_27_334_00.jpg'}]},
    ];

    res.json(products);
});

app.get('/api/hot_deal', (req, res) => {
    const products = [
        {
            id: 1, 
            name: 'Green Cell Induction Charger AirJuice 15W', 
            price: '150,00', 
            discountedPrice: '75,00',
            inStock: 32,
            sold: 60,
            description: 'Green Cell Induction Charger AirJuice 15W', 
            images: [{image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2020/2/pr_2020_2_17_8_30_48_849_00.jpg"}],
            dealDeadline: '05/28/2021 16:22:16' }
    ];

    res.json(products);
});



const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));