Ext.define('3725OS.view.checkcolumn.CheckColumnWindow', {
    extend : 'Ext.Window',
    alias : 'widget.checkcolumnwindow',
    requires : ['3725OS.view.checkcolumn.CheckColumnGrid'],

    constructor : function(config) {
        Ext.apply(this, {
            modal : true,
            width : 450,
            height : 250,
            title : 'CheckColumn',
            layout : 'fit',
            items : [{
                xtype : 'checkcolumngrid',
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
