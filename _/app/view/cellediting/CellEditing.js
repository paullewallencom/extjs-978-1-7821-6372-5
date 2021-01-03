Ext.define('3725OS.view.cellediting.CellEditing', {
    extend : 'Ext.Window',
    alias : 'widget.cellediting',
    requires : ['3725OS.view.cellediting.CellEditingGrid'],

    constructor : function(config) {
        Ext.apply(this, {
            modal : true,
            width : 450,
            height : 250,
            title : 'CellEditing',
            layout : 'fit',
            items : [{
                xtype : 'celleditingGrid',
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
