Ext.define('HISTORY.controller.Menu', {
    extend: 'Ext.app.Controller',

	refs : [
		{
        	ref : 'centerPanel',
        	selector: 'viewport container[region="center"]'
		}
	],

    init: function() 
	{
		this.control(
		{
			'viewport'	:
			{
				render	: this.bindHistory,
				afterrender: this.setState
			},
			'#clients-button' : 
			{
				click	: this.goClients
			},
			'#settings-button' : 
			{
				click	: this.goSettings
			},
			'#another-button' : 
			{
				click	: this.goAnother
			}
		});
	},

	bindHistory: function(cmp) 
	{
		var History = window.History;

		History.Adapter.bind(window, 'statechange', this.chooseView, this);

	},

	setState: function(){

		this.chooseView();
	},

	/* 
	 * This works function works if you are changing the History via the History.pushState function,
	 * but what if you want the view chosen by the URL + parameters for pages that are not 
	 * in the window history? For example if you wish to email a link.  You could try something like 
	 * this: 
	 * 		var url    	= History.getPageUrl(),
	 *			parts 	= url.split("?")
	 *			params	= {};
	 *
	 *		if (parts.length>1)
	 *		{
	 *			// remove trailing slash and objectify
	 *			params = Ext.Object.fromQueryString(parts[1].replace(/\/$/, ""));
	 *		}
	 *
	 * and then work that into your routing logic,
	 *
	 * Or, better still, look at Bruno Tavares' ExtJS router and create something similar
	 * that works for your your application: https://github.com/brunotavares/Ext.ux.Router
	 */
	chooseView: function() {

		var History	= window.History,
			State 	= History.getState(),
			route	= State.title;

		if (route == 'Clients')
		{
			this.getCenterPanel().getLayout().setActiveItem(0);
			this.getCenterPanel().getLayout().getActiveItem().getLayout().setActiveItem(0); 
		}
		else if (route == 'Settings')
		{
			this.getCenterPanel().getLayout().setActiveItem(1);
		}
		else if (route == 'Another')
		{
			this.getCenterPanel().getLayout().setActiveItem(2);
		}
		else if (route == 'client-view')
		{
			this.getController('Clients').showClient(State.data.idx);
		} 
		else 
		{
			History.pushState({}, "Clients", "?clients");
		}
	},

	goClients: function()
	{
		var History = window.History;
		History.pushState({}, "Clients", "?clients");
	},

	goSettings: function()
	{
		var History = window.History;
		History.pushState({data:"any kind of data object"}, "Settings", "?settings");
	},

	goAnother: function()
	{
		var History = window.History;
		History.pushState({data:"any kind of data object"}, "Another", "?another");
	}

});
