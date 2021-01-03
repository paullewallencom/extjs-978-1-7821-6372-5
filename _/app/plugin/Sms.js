Ext.define('3725OS.plugin.Sms', {

    alias : 'plugin.sms',

    config : {

        perMessageLength : 160,
        defaultColor : '#000000',
        warningColor : '#ff0000'

    },

    constructor : function(cfg) {

        Ext.apply(this, cfg);

        this.callParent(arguments);
    },

    init : function(textField) {

        this.textField = textField;

        if (!textField.rendered) {
            textField.on('afterrender', this.handleAfterRender, this);
        } else {
            this.handleAfterRender();
        }

    },

    handleAfterRender : function(textField) {

        this.textField.on({
            scope : this,
            change : this.handleChange
        });

        var dom = Ext.get(this.textField.bodyEl.dom);

        Ext.DomHelper.append(dom, {
            tag : 'div',
            cls : 'plugin-sms'
        });

    },

    handleChange : function(field, newValue) {

        if (newValue.length > this.getPerMessageLength()) {
            field.setFieldStyle('color:' + this.getWarningColor());
        } else {
            field.setFieldStyle('color:' + this.getDefaultColor());
        }
        this.updateMessageInfo(newValue.length);

    },

    updateMessageInfo : function(length) {

        var tpl = ['Characters: {length}<br/>', 'Messages: {messages}'].join('');
        var text = new Ext.XTemplate(tpl);
        var messages = parseInt(length / this.getPerMessageLength());

        if ((length / this.getPerMessageLength()) - messages > 0) {++messages;
        }
        Ext.get(this.getInfoPanel()).update(text.apply({
            length : length,
            messages : messages
        }));

    },

    getInfoPanel : function() {

        return this.textField.el.select('.plugin-sms');

    }
});
