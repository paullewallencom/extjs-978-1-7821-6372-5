Ext.define('3725OS.view.sms.Extension', {
    extend : 'Ext.form.field.TextArea',
    alias : 'widget.sms',

    config : {

        perMessageLength : 160,
        defaultColor : '#000000',
        warningColor : '#ff0000'

    },

    constructor : function(cfg) {

        Ext.apply(this, cfg);

        this.callParent(arguments);
    },

    afterRender : function() {

        this.on({
            scope : this,
            change : this.handleChange
        });

        var dom = Ext.get(this.bodyEl.dom);

        Ext.DomHelper.append(dom, {
            tag : 'div',
            cls : 'extension-sms'
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

        return this.el.select('.extension-sms');

    }
});
