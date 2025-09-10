Ext.define('MyApp.view.login.LoginContainer', {
    extend: 'Ext.container.Container',
    layout: 'center',
    width: '100%',
    height: '100%',

    initComponent: function() {
        this.items = [Ext.create('MyApp.view.login.Login')];
        this.callParent();
    }
    
});