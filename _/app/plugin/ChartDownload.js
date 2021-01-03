Ext.define('3725OS.plugin.ChartDownload', {

    alias : 'plugin.chartdownload',

    config : {
        chartXtype: 'chart',
        downloadButtonText: 'Download as image',
        chartNotFoundErrorMsg: 'No valid chart type found!',
        errorText: 'Error'
    },

    constructor : function(cfg) {

        Ext.apply(this, cfg);

        this.callParent(arguments);
    },

    init : function(container) {

        this.container = container;

        if (!container.rendered) {
            container.on('afterrender', this.handleAfterRender, this);
        } else {
            this.handleAfterRender();
        }

    },

    handleAfterRender : function(container) {

        this.chart = this.container.down(this.getChartXtype());

        if(!Ext.isDefined(this.chart) || this.chart ==null){        
            Ext.Function.defer(function(){                                    
                this.showErrorMessage({
                    title: this.getErrorText(),
                    text: this.getChartNotFoundErrorMsg()
                })
            }, 1000, this);
        }

        else{
            
            this.addDownloadButton();
        }

    },

    addDownloadButton: function(){

        var toolbar = this.getToolbar(),
        itemsToAdd = [],
        placeholder = '->',
        button = {
            iconCls : 'icon-export',
            text : this.getDownloadButtonText(),           
            handler: this.saveChart,
            scope : this
        };

        if(toolbar.items.items.length === 0){
            itemsToAdd.push(placeholder);
        }
        
        itemsToAdd.push(button);
        toolbar.add(itemsToAdd); 
    },

    getToolbar: function(){
        
        var dockedItems = this.container.getDockedItems(),
        toolbar = null,
        hasToolbar = false;
        
        if(dockedItems.length>0){
            Ext.each(dockedItems, function(item){                    
                if(item.xtype ==='toolbar' && item.dock == 'bottom'){                        
                    hasToolbar = true;
                    toolbar = item;
                    return false; 
                }
            });
        }

        if(!hasToolbar){
            toolbar = this.container.addDocked({
                xtype: 'toolbar',
                dock: 'bottom'
            })[0];
        }

        return toolbar;

    },

    saveChart: function(){

        this.chart.save({
            type : 'image/png'
        });

    },

    showErrorMessage: function(msg){
        Ext.Msg.show({
            title: msg.title || this.getErrorText(),            
            msg: msg.text || '',
            buttons: Ext.MessageBox.OK,
            fn: Ext.emptyFn,
            icon: Ext.Msg.ERROR
        })
    }
});