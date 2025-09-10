Ext.define('MyApp.view.product.ProductContainer', {
    extend: 'Ext.container.Container',
    layout: 'center',
    width: '100%',
    height: '100%',
    record: null,
    initComponent: function() {
        var me = this;
        me.items = [Ext.create('MyApp.view.product.ProductForm', {record: me.record})
        ];
        me.callParent();
    }
    
});
