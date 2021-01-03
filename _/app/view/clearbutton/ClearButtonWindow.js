Ext.define('3725OS.view.clearbutton.ClearButtonWindow', {
    extend : 'Ext.Window',
    alias : 'widget.clearbuttonwindow',
    requires : ['Ext.form.field.*', 
    '3725OS.plugin.ClearButton'],

    constructor : function(config) {
        Ext.apply(this, {
            modal : true,
            width : 300,
            height : 230,
            title : 'ClearButton plugin',
            layout : 'fit',
            items : [{
                xtype:'form',
                bodyPadding: 10,
                defaults:{
                    anchor: '95%'
                },
                items:[{
                    xtype:'textfield',
                    plugins:['clearbutton'],
                    value: 'textfield'
                },{
                    xtype : 'textareafield',
                    plugins:['clearbutton'],
                    value: 'textareafield'
                },{
                    xtype : 'combobox',
                    plugins:['clearbutton'],
                    value: 'combobox'
                },{
                    xtype : 'datefield',
                    plugins:['clearbutton'],
                    value: new Date()
                }]
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
