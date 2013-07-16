Ext.define('HISTORY.controller.Clients', {
    extend: 'Ext.app.Controller',

	models: [
		'HISTORY.model.Client'
	],

	stores: [
		'Clients'
	],

	views: [
		'client.Frame',
		'client.List',
		'client.View'
	],

	refs : [
		{
        	ref : 'centerPanel',
        	selector: 'viewport container[region="center"]'
		},
		{
        	ref : 'clientFrame',
        	selector: 'history_client_frame'
		},
		{
        	ref : 'clientList',
        	selector: 'history_client_list'
		},
		{
        	ref : 'clientView',
        	selector: 'history_client_view'
		}
	],

    init: function() 
	{
		this.control(
		{
			'history_client_list' : {
				itemdblclick: this.clientSelected
			}
		});
	},

	clientSelected: function(view, rec, el, idx) 
	{
		var History = window.History;
		History.pushState({idx:idx}, "client-view", "?client="+idx);
	},	

	showClient: function(idx) 
	{
		var panel 	= this.getCenterPanel(),
			frame 	= this.getClientFrame(),
			list	= this.getClientList(),
			view	= this.getClientView(),
			rec		= list.getStore().getAt(idx);

		view.setTitle(rec.get('company'));	
		view.tpl.overwrite(view.body,rec.getData());

		frame.getLayout().setActiveItem(view); // set the client frame to be the active item in center panel
		panel.getLayout().setActiveItem(frame);// set the client view to be the active item in the client frame

	}	
});
