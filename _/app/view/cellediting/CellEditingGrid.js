Ext.define('3725OS.view.cellediting.CellEditingGrid', {
    extend : 'Ext.grid.Panel',
    alias : 'widget.celleditingGrid',
    requires : ['3725OS.store.DummyStore',
                'Ext.grid.plugin.CellEditing', 
                'Ext.form.field.Date'],

    constructor : function(config) {

        Ext.apply(this, {          
            border : false,
            store : Ext.create('3725OS.store.DummyStore'),
            columns : [{
                header : 'Name',
                dataIndex : 'name',
                flex : 1,
                editor : 'textfield'
            }, {
                header : 'Birth date',
                dataIndex : 'birthdate',
                renderer : Ext.util.Format.dateRenderer('m/d/Y'),
                flex : 1,
                editor : {
                    xtype : 'datefield',
                    allowBlank : false
                }
            }],
            selType : 'cellmodel',
            plugins : [Ext.create('Ext.grid.plugin.CellEditing', {
                clicksToEdit : 1
            })]
        });
        
        this.callParent(arguments); 

    }
});
