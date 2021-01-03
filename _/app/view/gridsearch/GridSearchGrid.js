Ext.define('3725OS.view.gridsearch.GridSearchGrid', {
    extend : 'Ext.grid.Panel',
    alias : 'widget.gridsearchgrid',
    requires : ['3725OS.store.DummyStore',
                '3725OS.plugin.GridSearch'],

    constructor : function(config) {

        Ext.apply(this, {            
            border : false,
            store : Ext.create('3725OS.store.DummyStore'),
            plugins: ['gridsearch'],
            dockedItems:[{
                xtype:'toolbar',
                dock: 'top'                    
            }],
            
            columns : [{
                header : 'Name',
                dataIndex : 'name',
                flex : 1
            }, {
                xtype: 'datecolumn',
                header : 'Birth date',
                dataIndex : 'birthdate',
                format: 'm/d/Y'
            }]            
        });
        
        this.callParent(arguments); 

    }
});
