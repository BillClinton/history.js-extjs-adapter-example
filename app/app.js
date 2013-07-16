Ext.Loader.setConfig({enabled: true});

Ext.application({
    name: 'HISTORY',

    // Define all the controllers that should initialize at boot up of your application
    controllers: ['Menu', 'Clients'],

    autoCreateViewport: true,

    launch: function() 
	{

		if (typeof console === "undefined") { 
			console = { log: function () { }, info: function () { }, warn: function () { }, error: function () { } }; 
		}

		var History = window.History;

		// Try and Initialise History
		if ( typeof History.init !== 'undefined' ) {
			console.log('Initializing History...');
			History.init();
		}


	}
});
