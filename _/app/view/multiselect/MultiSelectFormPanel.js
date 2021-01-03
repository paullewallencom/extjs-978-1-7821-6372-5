Ext.define('3725OS.view.multiselect.MultiSelectFormPanel', {
    extend : 'Ext.form.Panel',
    alias : 'widget.multiselectformpanel',
    requires : ['Ext.ux.form.MultiSelect'],

    constructor : function(config) {

        Ext.apply(this, {
            bodyPadding : 10,
            items : [{
                anchor : '100%',
                xtype : 'multiselect',                
                fieldLabel : 'Multi Select',
                name : 'multiselect',
                store : Ext.create('3725OS.store.DummyStore'),
                valueField : 'name',
                displayField : 'name',
                ddReorder : true,
                listeners : {
                    change : {
                        fn : this.getMultiSelectValue
                    },
                    scope : this
                }
            }]
        });
        this.callParent(arguments);

    },

    getMultiSelectValue : function() {
        var title = "Multiselect values",
        value = this.getForm().findField('multiselect').getValue();
        Ext.Msg.alert(title, value);
    }
});
