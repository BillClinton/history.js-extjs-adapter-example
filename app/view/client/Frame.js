Ext.define('HISTORY.view.client.Frame' ,{
    extend  : 'Ext.container.Container',
    alias   : 'widget.history_client_frame',

	layout	: 'card',

	activeItem: 1,

	items	: [
		{
			xtype: 'history_client_list'
		},
		{
			xtype: 'history_client_view'
		}
	]
});




