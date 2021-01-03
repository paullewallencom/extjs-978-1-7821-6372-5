Ext.define('3725OS.view.itemselector.ItemSelectorWindow', {
    extend : 'Ext.Window',
    alias : 'widget.itemselectorwindow',
    requires : ['3725OS.view.itemselector.ItemSelectorFormPanel'],

    constructor : function(config) {
        Ext.apply(this, {
            modal : true,
            width : 500,
            height : 250,
            title : 'ItemSelector',
            layout : 'fit',
            items : [{
                xtype : 'itemselectorformpanel',
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
