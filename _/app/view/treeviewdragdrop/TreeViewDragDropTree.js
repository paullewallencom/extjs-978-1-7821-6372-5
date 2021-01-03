Ext.define('3725OS.view.treeviewdragdrop.TreeViewDragDropTree', {
    extend : 'Ext.tree.Panel',
    alias : 'widget.treeviewdragdroptree',
    requires : ['3725OS.store.SampleTreeStore',
                'Ext.tree.plugin.TreeViewDragDrop'],

    constructor : function(config) {

        Ext.apply(this, {
            border : false,
            store : Ext.create('3725OS.store.SampleTreeStore'),
            viewConfig : {
                plugins : [
                    'treeviewdragdrop'
                ]
            },            
            useArrows : true
        });

        this.callParent(arguments);

    }
});
