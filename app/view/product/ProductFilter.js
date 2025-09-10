Ext.define('MyApp.view.product.ProductFilter', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.productfilter',
    layout: 'hbox',
    bodyPadding: 5,

    initComponent: function() {
        this.idFilter = Ext.create('Ext.form.field.Number', {
            fieldLabel: 'ID товара',
            width: 200,
            hideTrigger: true,
            keyNavEnabled: false,
            mouseWheelEnabled: false,
            emptyText: 'Точное совпадение',
            enableKeyEvents: true,
            minValue: 0,                 
            allowDecimals: false, 
            listeners: {
                specialkey: function(field, e) {
                    if (e.getKey() === e.ENTER) {
                        var value = parseInt(field.getValue(), 10),
                            grid = field.up('producttab').down('producttable');
                        if (grid) {
                            grid.getStore().clearFilter();
                            if (!isNaN(value)) {
                                grid.getStore().addFilter({
                                    property: 'id',
                                    value: value
                                });
                            }
                        }
                    }
                }
            }
        });

        this.nameFilter = Ext.create('Ext.form.field.Text', {
            fieldLabel: 'Наименование',
            width: 300,
            emptyText: 'Часть названия',
            enableKeyEvents: true,
            listeners: {
                specialkey: function(field, e) {
                    if (e.getKey() === e.ENTER) {
                        var value = field.getValue(),
                            grid = field.up('producttab').down('producttable');
                        if (grid && value) {
                            grid.getStore().clearFilter();
                            grid.getStore().addFilter({
                                property: 'name',
                                value: value,
                                operator: 'like'
                            });
                        }
                    }
                }
            }
        });

        this.items = [this.idFilter, this.nameFilter];
        this.callParent();
    }
});