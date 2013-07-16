Ext.define('HISTORY.view.client.View' ,{
    extend  : 'Ext.panel.Panel',
    alias   : 'widget.history_client_view',

	title  	: 'Info',

	bodyStyle	: 'padding: 24px',

    initComponent: function() {

		this.tpl = new Ext.XTemplate(
			'<p>Client: {company}</p>',
			'<p>Price: {price}</p>',
			'<p>Change: {change}</p>'
		);

        this.callParent(arguments);
    }
});
	




