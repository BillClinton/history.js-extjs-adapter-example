Ext.define('HISTORY.view.Viewport', {
    extend: 'Ext.container.Viewport',

    layout: 'border',

    items: [
		{
			region		: 'north',
			xtype		: 'panel',
			height		: 72,
			bodyStyle	: 'padding: 16px;',
			html		: '<h2>History.js ExtJS Adapter example </h1> \
							<p>This is a simple implementation of the <b>ExtJS History.js adapter</b>. \
							see this thread for details: \
							<a target="_new" href="http://www.sencha.com/forum/showthread.php?185182-ExtJS-Adapter-for-History.js"> \
							http://www.sencha.com/forum/showthread.php?185182-ExtJS-Adapter-for-History.js</a></p>'
		}, 
		{
			region	: 'center',
			xtype	: 'container',
			layout	: 'card',
			items	: [
				{
					xtype	: 'history_client_frame'
				},
				{
					xtype		: 'panel',
					title		: 'Settings',
					bodyStyle	: 'padding: 24px',
					html		: '<h1> Settings </h1> just an example blank page'
				},
				{
					xtype		: 'panel',
					title		: 'Another blank panel',
					bodyStyle	: 'padding: 24px',
					html		: '<h1> Another</h1> just another example blank page'
				}
			]
		}, 
		{
			region	: 'west',
			xtype	: 'panel',
			title	: 'Menu',
			width	: 160,
			layout	: { type:  "vbox", align: "center"},
			defaults: { margin: "10 0 0 0", width: '60%'},
			items	: [
				{
					xtype	: 'button',
					text	: 'Clients',
					itemId	: 'clients-button'
				},	
				{
					xtype	: 'button',
					text	: 'Settings',
					itemId	: 'settings-button'
				},	
				{
					xtype	: 'button',
					text	: 'Another',
					itemId	: 'another-button'
				}	
			]
		
		}
	]
});
