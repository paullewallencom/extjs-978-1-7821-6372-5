Ext.define('3725OS.view.treeviewdragdrop.TreeViewDragDrop', {
    extend : 'Ext.Window',
    alias : 'widget.treeviewdragdrop',
    requires : ['3725OS.view.treeviewdragdrop.TreeViewDragDropTree'],

    constructor : function(config) {
        Ext.apply(this, {
            modal : true,
            width : 450,
            height : 250,
            title : 'TreeViewDragDrop',
            layout : 'fit',
            items : [{
                xtype : 'treeviewdragdroptree',
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
