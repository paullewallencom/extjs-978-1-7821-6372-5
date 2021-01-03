Ext.Loader.setConfig({
	enabled: true,
	disableCaching: !/[?&](cache|breakpoint|debug)/i.test(location.search),
	paths: {		
		'app.ux': 'app/ux'
	}
});

Ext.application({
    controllers: ["Main"],

    views: [],


    name: '3725OS',

    autoCreateViewport: true
});
