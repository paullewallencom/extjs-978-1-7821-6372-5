Ext.define('3725OS.view.chartdownloadplugin.Chart', {
    extend : 'Ext.chart.Chart',    
    requires : ['3725OS.store.DummyStore'],

    constructor : function(config) {
        Ext.apply(this, {
            xtype:'chart',
            animate: true,
            store: Ext.create('3725OS.store.DummyStore'),
            theme: 'Base:gradients',
            series: [{
                type: 'pie',
                angleField: 'salary',
                showInLegend: true,

                highlight: {
                    segment: {
                        margin: 20
                    }
                },
                label: {
                    field: 'name',
                    display: 'rotate',
                    contrast: true,
                    font: '18px Arial'
                }
            }]
        });
        this.callParent(arguments);
    }
});