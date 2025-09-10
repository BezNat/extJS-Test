Ext.define('MyApp.view.login.Login', {
    extend: 'Ext.form.Panel',
    xtype: 'login',

    title: 'Авторизация',
    frame: true,
    width: 320,
    bodyPadding: 10,

    defaultType: 'textfield',

    items: [{
        allowBlank: false,
        fieldLabel: 'Логин',
        name: 'user',
    }, {
        allowBlank: false,
        fieldLabel: 'Пароль',
        name: 'pass',
        inputType: 'password'
    }],

    buttons: [
        { text: 'Войти' ,
        formBind: true, /////////////
        itemId: 'logBtn',
    } 
    ],

    defaults: {
        anchor: '100%',
        labelWidth: 120
    }
});