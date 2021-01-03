Ext.define('3725OS.view.Viewport', {
    renderTo : Ext.getBody(),
    extend : 'Ext.container.Viewport',
    requires : ['3725OS.view.Sms',
    'Ext.tab.Panel',
    '3725OS.view.cellediting.CellEditing',
    '3725OS.view.rowediting.RowEditing',
    '3725OS.view.treeviewdragdrop.TreeViewDragDrop',
    '3725OS.view.checkcolumn.CheckColumnWindow',
    '3725OS.view.multiselect.MultiSelectWindow',
    '3725OS.view.itemselector.ItemSelectorWindow',
    '3725OS.view.livesearch.LiveSearchWindow',
    '3725OS.view.labeledSpinner.LabeledSpinnerWindow',
    '3725OS.view.chartdownloadplugin.ChartDownloadPluginWindow',
    '3725OS.view.gridsearch.GridSearchWindow',
    '3725OS.view.clearbutton.ClearButtonWindow',
    '3725OS.view.messagebar.MessageBar'],

    layout : {
        type : 'fit'
    },

    items : [{
        xtype : 'tabpanel',
        defaults : {
            defaultType: 'button',
            bodyPadding : 10,
            layout : {
                type : 'hbox',
                pack : 'center',
                align : 'cengter',
                defaultMargins: 10
            }
        },
        items : [{
            title : 'Chapter 1: Plug-ins and Extensions',
            items : [{
                text : 'Open SMS window',
                handler : function() {
                    Ext.create('3725OS.view.Sms').show();
                }
            }]
        }, {
            title : 'Chapter 2: Ext JS provided plug-ins & Extensions',
            items : [{
                text : 'Open CellEditing',
                handler : function() {
                    Ext.widget('cellediting').show();
                }
            }, {
                text : 'Open RowEditing',
                handler : function() {
                    Ext.widget('rowediting').show();
                }
            }, {
                text: 'Open TreeViewDragDrop',
                handler: function(){
                    Ext.widget('treeviewdragdrop').show();
                }
            }, {
                text: 'Open CheckColumn',
                handler: function(){
                    Ext.widget('checkcolumnwindow').show();
                }
            }, {
                text: 'Open MultiSelect',
                handler: function(){
                    Ext.widget('multiselectwindow').show();
                }
            }, {
                text: 'Open ItemSelector',
                handler: function(){
                    Ext.widget('itemselectorwindow').show();
                }
            }, {
                text: 'Open LiveSearchGridPanel',
                handler: function(){
                    Ext.widget('livesearchwindow').show();
                }
            }]
        }, {
            title : 'Chapter 4: Labeled spinner',
            items : [{
                text : 'Open LabeledSpinner window',
                handler : function() {
                    Ext.widget('labeledspinnerwindow').show();
                }
            }]
        }, {
            title : 'Chapter 5: Chart container',
            items : [{
                text : 'Open ChartDownloadPlugin window',
                handler : function() {
                    Ext.widget('chartdownloadpluginwindow').show();
                }
            }]
        }, {
            title : 'Chapter 6:Grid search',
            items : [{
                text : 'Open GridSearch window',
                handler : function() {
                    Ext.widget('gridsearchwindow').show();
                }
            }]
        }, {
            title : 'Chapter 7:Clear button',
            items : [{
                text : 'Open Input field with clear button window',
                handler : function() {
                    Ext.widget('clearbuttonwindow').show();
                }
            }]
        }, {
            title: 'Chapter 8: Message bar',
            items:[{
                text: 'Open Messgebar window',
                handler: function(){
                    Ext.widget('messageBarWindow').show();
                }
            }]
        }]
    }]
});
