Ext.define('MyApp.view.product.ProductTable', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.producttable',
    flex: 1,
    width: '100%',

    initComponent: function() {
        this.columns = [
            { text: 'ID', dataIndex: 'id', width: 60 },
            { text: 'Имя', dataIndex: 'name', flex: 1 },
            { text: 'Описание', dataIndex: 'description', flex: 1 },
            { text: 'Цена', dataIndex: 'price', width: 100},
            { 
                text: 'Кол-во', 
                dataIndex: 'quantity', 
                width: 80,
                renderer: function(value, meta) {
                    if (value===0) {
                        meta.tdCls = 'numZero'
                    }
                    return value;
                }
            }
        ];

        this.store = MyApp.stores.productStore;

        this.listeners = {
            cellclick: function(view, cell, cellIndex, record, row, rowIndex, e) {
                if (cellIndex === 1) {
                    MyApp.controllers.product.showForm(record);
                }
            }
        };

        this.callParent();
    }
});