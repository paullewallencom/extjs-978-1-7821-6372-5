Ext.define('3725OS.view.messagebar.MessageBar', {
    extend: 'Ext.Window',
    alias: 'widget.messageBarWindow',
    requires: ['3725OS.ux.MessageBar'],

    constructor: function (config) {
        Ext.apply(this, {
            modal: true,
            maximizable: true,
            width: 500,
            height: 250,
            title: 'Message bar',
            layout: 'fit',
            items: [
                {
                    xtype: 'form',
                    border: 0,
                    bodyPadding: 10,
                    items: [
                        {
                            xtype: 'textfield',
                            width: 450,
                            labelWidth: 200,
                            value: 'Hello World!!!',
                            fieldLabel: 'Enter text to show in message bar'
                        },
                        {
                            xtype: 'radiogroup',
                            fieldLabel: 'Icon to show',
                            vertical: true,
                            columns: 1,
                            items: [
                                {
                                    boxLabel: 'No icon',
                                    name: 'rb',
                                    inputValue: '',
                                    checked: true
                                },
                                {
                                    boxLabel: 'Valid icon',
                                    name: 'rb',
                                    inputValue: 'valid'
                                },
                                {
                                    boxLabel: 'Invalid icon',
                                    name: 'rb',
                                    inputValue: 'error'
                                },
                                {
                                    boxLabel: 'Info icon',
                                    name: 'rb',
                                    inputValue: 'info'
                                }
                            ]
                        },
                        {
                            xtype: 'button',
                            text: 'Show message',
                            handler: function(){
                                this.up('window').showMessage();
                            }
                        }
                    ]
                }
            ],
            dockedItems: [
                {
                    xtype: 'ux-msgbar'
                }
            ],
            buttons: [
                {
                    text: 'OK',
                    handler: function () {
                        this.close();
                    },
                    scope: this
                }
            ]
        });
        this.callParent(arguments);
    },

    showMessage: function () {
        var text = this.down('textfield').getValue(),
            type = this.down('radiogroup').getValue().rb || '';

        this.down('ux-msgbar').showMessage({
            text: text,
            type: type
        });

    }
});
