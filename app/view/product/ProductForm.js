Ext.define('MyApp.view.product.ProductForm', {
    extend: 'Ext.form.Panel',
    bodyPadding: 10,
    frame: true,
    title: 'Редактирование товара',

    record: null,

    initComponent: function() {
        var me = this;
        console.log('ProductForm record:', me.record);
        if (!me.record) {
            console.error('ProductForm: record не передан');
            return;
        }
        // Принимаем запись
        me.items = [
            { xtype: 'displayfield', fieldLabel: 'ID', value: me.record.get('id') },
            { xtype: 'displayfield', fieldLabel: 'Имя', value: me.record.get('name') },
            {
                xtype: 'numberfield',
                fieldLabel: 'Цена',
                name: 'price',
                value: me.record.get('price'),
                minValue: 0,
                decimalPrecision: 2,
                allowBlank: false
            },
            {
                xtype: 'numberfield',
                fieldLabel: 'Кол-во',
                name: 'quantity',
                value: me.record.get('quantity'),
                minValue: 0,
                allowDecimals: false,
                allowBlank: false
            }
        ];

        me.buttons = [{
            text: 'Отмена',
            handler: function() {
                MyApp.show('main'); // В главное окно
            }
        }, {
            text: 'Сохранить',
            handler: function() {
                let form = this.up('form'),
                    values = form.getValues();

                // Обновляем запись
                me.record.set('price', values.price);
                me.record.set('quantity', values.quantity);

                MyApp.show('main');
            }
        }];

        me.callParent();
    }
});
