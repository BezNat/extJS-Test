MyApp.controllers.product = {
    showForm: function(record) {
        // Если уже есть — уничтожаем
        if (MyApp.screens.productContainer && !MyApp.screens.productContainer.destroyed) {
            MyApp.screens.productContainer.destroy();
        }

        // Создаём новую форму с текущей записью
        MyApp.screens.productContainer = Ext.create('MyApp.view.product.ProductContainer', {
            record: record
        });

        // Показываем на весь экран
        MyApp.show('productContainer');
    }
};