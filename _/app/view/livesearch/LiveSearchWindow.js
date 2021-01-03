Ext.define('3725OS.view.livesearch.LiveSearchWindow', {
    extend : 'Ext.Window',
    alias : 'widget.livesearchwindow',
    requires : ['3725OS.view.livesearch.LiveSearchGrid'],

    constructor : function(config) {
        Ext.apply(this, {
            modal : true,
            width : 550,
            height : 250,
            title : 'Live Search',
            layout : 'fit',
            items : [{
                xtype : 'livesearchgrid',
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
