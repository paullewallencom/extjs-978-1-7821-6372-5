Ext.define('3725OS.view.livesearch.LiveSearchGrid', {
    extend : 'Ext.ux.LiveSearchGridPanel',
    alias : 'widget.livesearchgrid',
    requires : ['3725OS.store.DummyStore'],

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
                renderer : Ext.util.Format.dateRenderer('m/d/Y'),
                flex : 1
            }]
        });
        
        this.callParent(arguments); 

    }
});
