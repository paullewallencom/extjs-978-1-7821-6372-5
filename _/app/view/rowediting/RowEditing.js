Ext.define('3725OS.view.rowediting.RowEditing', {
    extend : 'Ext.Window',
    alias : 'widget.rowediting',
    requires : ['3725OS.view.rowediting.RowEditingGrid'],

    constructor : function(config) {
        Ext.apply(this, {
            modal : true,
            width : 450,
            height : 250,
            title : 'RowEditing',
            layout : 'fit',
            items : [{
                xtype : 'roweditingGrid',
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
