MyApp.screens = {};
MyApp.controllers = MyApp.controllers || {};

Ext.onReady(function() {
    // Создаём экраны
    MyApp.screens.loginContainer = Ext.create('MyApp.view.login.LoginContainer');
    MyApp.screens.main = Ext.create('MyApp.view.main.Main');
    

    // Инициализируем контроллеры
    MyApp.controllers.login.init(MyApp.screens.loginContainer);
    MyApp.controllers.main.init(MyApp.screens.main);

    // Главный Viewport
    MyApp.viewport = Ext.create('Ext.container.Viewport', {
        layout: 'card',
        items: [
            MyApp.screens.loginContainer,
            MyApp.screens.main
        ]
    });

    // Показать вход
    MyApp.show = function(screenName) {
        var screen = MyApp.screens[screenName];

        // Если это productForm и его нет в Viewport — добавляем
        if (screenName === 'productContainer') {
            if (!screen || screen.destroyed) {
                console.error('productContainer не существует или уничтожен');
                return;
            }

            // Добавляем в Viewport, если ещё не добавлен
            if (!MyApp.viewport.items.contains(screen)) {
                MyApp.viewport.add(screen);
            }
        }

        if (screen && MyApp.viewport) {
            MyApp.viewport.setActiveItem(screen);
        }
    };

    MyApp.show('loginContainer');
    
});
