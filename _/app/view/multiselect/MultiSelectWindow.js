Ext.define('3725OS.view.multiselect.MultiSelectWindow', {
    extend : 'Ext.Window',
    alias : 'widget.multiselectwindow',
    requires : ['3725OS.view.multiselect.MultiSelectFormPanel'],

    constructor : function(config) {
        Ext.apply(this, {
            modal : true,
            width : 300,
            height : 200,
            title : 'MultiSelect',
            layout : 'fit',
            items : [{
                xtype : 'multiselectformpanel',
                border : false
            }],
            buttons : [{
                text : 'OK',
                handler : function() {
                    this.close();
                },
                scope : this
            }]
        });
        this.callParent(arguments);
    }
});
