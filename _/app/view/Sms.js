Ext.define('3725OS.view.Sms',{
    extend:'Ext.Window',
    requires:['3725OS.view.sms.Extension',
              'Ext.form.FieldSet',
              '3725OS.plugin.Sms'],
    constructor: function(config){
        Ext.apply(this,{
            modal: true,
            width: 450,
            height: 450,
            bodyPadding: 10,
            title: 'SMS',
            defaults:{
                height: 140
            },
            items:[{
                xtype:'fieldset',
                title:'SMS Extension for textarea field',
                items:[{
                    xtype:'sms',
                    width: 400,
                    height: 90,
                }]
            }, {
                xtype:'fieldset',
                title:'SMS plugin attached to a textarea field',
                items:[{
                    xtype : 'textareafield',                                    
                    plugins:['sms'],
                    width: 400,
                    height: 90
                }]
            }, {
                xtype:'fieldset',
                title:'SMS plugin attached to a text field',
                height: 70,
                items:[{
                    xtype : 'textfield',                                    
                    plugins:['sms'],
                    width: 400
                }]
            }],
            buttons:[{
                text: 'OK',
                handler: function(){
                    this.close();
                },
                scope: this
            }]
        });
        this.callParent(arguments);
    }
})
