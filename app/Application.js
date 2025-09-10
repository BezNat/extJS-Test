Ext.define('MyApp.Application', {
    //  применяет и расширяет всю логику базового класса
    extend: 'Ext.app.Application', 

    constructor: function() {
        console.log('✅ MyApp.Application создан');
        this.callParent(arguments);
    },
    
    onLaunch: function() {
        console.log('🚀 Приложение запущено');
        this.redirectTo('logincontainer');
    },

    onUrlChange: function(token) {
        var view = this.getMainView();
        if (view) {
            view.destroy();
        }

        if (token === 'main') {
            this.setMainView('main');
        } else if (token === 'logincontainer') {
            this.setMainView('logincontainer');
        }
    }

});