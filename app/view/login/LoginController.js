MyApp.controllers = MyApp.controllers || {};

MyApp.controllers.login = {
    init: function(view) {
        this.view = view;
        this.bindEvents();
    },

    bindEvents: function() {
        this.view.down('form').down('#logBtn').on('click', this.onLoginClick, this);
    },

    onLoginClick: function() {
        var form = this.view.down('form').getForm();
        if (form.isValid()) {
            var values = form.getValues();
            if (values.user === 'admin' && values.pass === 'padmin') {
                MyApp.show('main');
            } else {
                Ext.Msg.alert('Ошибка', 'Неверный логин или пароль');
            }
        }
    }
};