Ext.define('MyApp.store.Product', {
    extend: 'Ext.data.Store',
    alias: 'store.product',
    // model: 'product',
    model: 'MyApp.model.Product',

    data:  [
    {
        id: 1,
        name: 'Huawei MateBook D 16',
        description: '16", IPS, Intel Core i5-12450H, 16 ГБ ОЗУ, 512 ГБ SSD, Windows 11',
        price: 41999.99,
        quantity: 8
    },
    {
        id: 2,
        name: 'Apple MacBook Air M2',
        description: '13.6", Retina, Apple M2, 8 ГБ ОЗУ, 256 ГБ SSD, серебристый',
        price: 98990.00,
        quantity: 3
    },
    {
        id: 3,
        name: 'ASUS ROG Zephyrus G14',
        description: '14", OLED, AMD Ryzen 9 7940HS, 32 ГБ ОЗУ, 1 ТБ SSD, для игр',
        price: 125000.00,
        quantity: 2
    },
    {
        id: 4,
        name: 'Яндекс Станция Миди',
        description: 'Умная колонка с Алисой, 24 Вт, поддержка YaGPT, чёрная',
        price: 12990.50,
        quantity: 0
    },
    {
        id: 5,
        name: 'Apple HomePod mini',
        description: 'Умная колонка, Siri, 360° звук, белая',
        price: 10990.00,
        quantity: 12
    },
    {
        id: 6,
        name: 'AMD Ryzen 5 7500F',
        description: 'AM5, OEM, 6 ядер, 3.7 ГГц, без кулера',
        price: 12000.99,
        quantity: 5
    },
    {
        id: 7,
        name: 'Intel Core i7-13700K',
        description: 'LGA1700, 16 ядер, 3.4 ГГц, для разгона',
        price: 34500.00,
        quantity: 1
    },
    {
        id: 8,
        name: 'Dell UltraSharp U2723QE',
        description: '27", 4K, IPS, USB-C, для дизайна и офиса',
        price: 58000.00,
        quantity: 4
    },
    {
        id: 9,
        name: 'Samsung Odyssey G7',
        description: '32", 1440p, 240 Гц, изогнутый, для игр',
        price: 67000.00,
        quantity: 0
    },
    {
        id: 10,
        name: 'Samsung 980 Pro 1 ТБ',
        description: 'NVMe M.2, PCIe 4.0, до 7000 МБ/с',
        price: 11500.00,
        quantity: 15
    },
    {
        id: 11,
        name: 'Crucial P5 Plus 500 ГБ',
        description: 'NVMe M.2, PCIe 4.0, надёжный выбор',
        price: 5200.50,
        quantity: 20
    },
    {
        id: 12,
        name: 'Logitech MX Keys',
        description: 'Механическая клавиатура, Bluetooth, для Mac/Windows',
        price: 8990.00,
        quantity: 7
    },
    {
        id: 13,
        name: 'Razer DeathAdder V3',
        description: 'Эргономичная игровая мышь, 20000 DPI, RGB',
        price: 4500.00,
        quantity: 0
    },
    {
        id: 14,
        name: 'iPad Air 5',
        description: '10.9", M1, 64 ГБ, Wi-Fi, розовый',
        price: 52990.00,
        quantity: 6
    },
    {
        id: 15,
        name: 'Samsung Galaxy Tab S9',
        description: '11", Snapdragon 8 Gen 2, S Pen в комплекте',
        price: 78000.00,
        quantity: 3
    },
    {
        id: 16,
        name: 'iPhone 15 Pro',
        description: '6.1", Titanium, A17 Pro, 128 ГБ, чёрный',
        price: 99990.00,
        quantity: 2
    },
    {
        id: 17,
        name: 'Xiaomi 14',
        description: '6.36", Snapdragon 8 Gen 3, 256 ГБ, камера Leica',
        price: 65000.00,
        quantity: 9
    }
]});

MyApp.stores = MyApp.stores || {};
MyApp.stores.productStore = Ext.create('MyApp.store.Product');