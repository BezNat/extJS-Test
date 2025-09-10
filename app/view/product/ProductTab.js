Ext.define('MyApp.view.product.ProductTab', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.producttab',
    title: 'Товары',
    closable: true,
    layout: 'vbox',

    initComponent: function() {
        this.items = [
            Ext.create('MyApp.view.product.ProductFilter'),
            Ext.create('MyApp.view.product.ProductTable')
        ];

        this.callParent();
    }
});