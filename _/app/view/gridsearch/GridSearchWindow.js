Ext.define('3725OS.view.gridsearch.GridSearchWindow', {
    extend : 'Ext.Window',
    alias : 'widget.gridsearchwindow',
    requires : ['3725OS.view.gridsearch.GridSearchGrid'],

    constructor : function(config) {
        Ext.apply(this, {
            modal : true,
            width : 450,
            height : 250,
            title : 'GridSearchPlugin',
            layout : 'fit',
            items : [{
                xtype : 'gridsearchgrid',
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
