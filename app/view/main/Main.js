Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.container.Container',
    layout: 'border',

    initComponent: function() {

        this.toolbar = Ext.create('Ext.toolbar.Toolbar', {
            region: 'north',
            items: [
                {
                    text: 'Товары',
                    itemId: 'productsBtn',
                },
                '->',
                {
                    text: 'Выход',
                    itemId: 'logoutBtn',
                }
            ]
        });

        this.tabPanel = Ext.create('Ext.tab.Panel', {
            region: 'center',
            items: []
        });

        this.items = [this.toolbar, this.tabPanel];
        this.callParent();
    }
});