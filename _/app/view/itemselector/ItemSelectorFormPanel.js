Ext.define('3725OS.view.itemselector.ItemSelectorFormPanel', {
    extend : 'Ext.form.Panel',
    alias : 'widget.itemselectorformpanel',
    requires : ['Ext.ux.form.ItemSelector'],

    constructor : function(config) {

        Ext.apply(this, {
            bodyPadding : 10,
            items : [{
                anchor : '100%',
                xtype: 'itemselector',
                name: 'itemselector',
                store : Ext.create('3725OS.store.DummyStore'),
                valueField : 'name',
                displayField : 'name',
                fromTitle: 'Available',
                toTitle: 'Selected'               
                
            }]
        });
        this.callParent(arguments);

    }
});
