MyApp.controllers.main = {
    init: function(view) {
        this.view = view;
        this.bindEvents();
    },

    bindEvents: function() {
        this.view.down('#productsBtn').on('click', this.onProductsClick, this);
        this.view.down('#logoutBtn').on('click', this.onLogoutClick, this);
    },

    onProductsClick: function() {
        var tabPanel = this.view.down('tabpanel');
        var tab = Ext.create('MyApp.view.product.ProductTab');
        tabPanel.add(tab);
        tabPanel.setActiveTab(tab);
    },

    onLogoutClick: function() {
        MyApp.show('loginContainer');

        var loginForm = MyApp.screens.loginContainer.down('form');
        if (loginForm) {
            loginForm.getForm().reset();
        }
    }
};


