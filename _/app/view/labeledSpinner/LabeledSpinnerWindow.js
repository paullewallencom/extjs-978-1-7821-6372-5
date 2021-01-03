Ext.define('3725OS.view.labeledSpinner.LabeledSpinnerWindow', {
    extend : 'Ext.Window',
    alias : 'widget.labeledspinnerwindow',
    requires : ['3725OS.ux.LabeledSpinner',
    'Ext.layout.container.Form',
    'Ext.draw.Text'],

    constructor : function(config) {
        Ext.apply(this, {
            modal : true,
            width : 300,
            height : 200,
            title : 'LabeledSpinner',
            layout : {
                type:'vbox',
                align:'stretch',
                pack:'start'
            },
            bodyPadding: 10,
            bodyStyle:{
                'background-color' : '#ffffff'
            },
            items : [{
                xtype : 'labeledspinner',
                fieldLabel: 'Time elapsed',
                labelText: 'Days',
                value: 10
                //flex: 1
            },{
                xtype:'text',
                flex:2,
            }/*,{
                xtype:'container',
                flex:1,
                layout:{
                    type:'hbox',
                    pack:'end'
                },
                items:[{
                    xtype: 'button',
                    text: 'Get value',
                    width: 80,
                    handler: function(){                    
                        var value = this.up('window').down('labeledspinner').getValue(),
                        labeledValue = this.up('window').down('labeledspinner').getLabeledValue();
                        console.log(value+', '+labeledValue);
                        this.up('window').down('text').setText('Value: '+value+'\n Labeled value: '+labeledValue);
                    }
                }]
            }*/],
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