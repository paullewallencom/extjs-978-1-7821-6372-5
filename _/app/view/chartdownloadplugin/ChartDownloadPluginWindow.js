Ext.define('3725OS.view.chartdownloadplugin.ChartDownloadPluginWindow', {
    extend : 'Ext.Window',
    alias : 'widget.chartdownloadpluginwindow',
    requires : ['3725OS.view.chartdownloadplugin.Chart',
                '3725OS.plugin.ChartDownload'],

    constructor : function(config) {

        Ext.apply(this, {
            modal : true,
            width : 400,
            height : 300,
            title : 'ChartDownloadPlugin',
            layout : {
                type:'fit'
            },                     
            items : [{
                xtype:'panel',
                plugins:['chartdownload'],
                layout:'fit',
                items:[Ext.create('3725OS.view.chartdownloadplugin.Chart')]
            }],
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