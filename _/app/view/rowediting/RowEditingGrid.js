Ext.define('3725OS.view.rowediting.RowEditingGrid', {
    extend : 'Ext.grid.Panel',
    alias : 'widget.roweditingGrid',
    requires : ['3725OS.store.DummyStore',
                'Ext.grid.plugin.RowEditing', 
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
            selType : 'rowmodel',
            plugins : [Ext.create('Ext.grid.plugin.RowEditing', {
                clicksToEdit : 1
            })]
        });
        
        this.callParent(arguments); 

    }
});
