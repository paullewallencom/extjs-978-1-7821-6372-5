Ext.define('3725OS.view.checkcolumn.CheckColumnGrid', {
    extend : 'Ext.grid.Panel',
    alias : 'widget.checkcolumngrid',
    requires : ['3725OS.store.DummyStore',
                'Ext.ux.CheckColumn'],

    constructor : function(config) {

        Ext.apply(this, {            
            border : false,
            store : Ext.create('3725OS.store.DummyStore'),
            columns : [{
                header : 'Name',
                dataIndex : 'name',
                flex : 1
            }, {
                header : 'Birth date',
                dataIndex : 'birthdate',
                renderer : Ext.util.Format.dateRenderer('m/d/Y')
            }, {
                xtype : 'checkcolumn',
                header : 'Attending?',
                dataIndex : 'attending'                
            }]            
        });
        
        this.callParent(arguments); 

    }
});
