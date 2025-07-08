//ext中的application

Ext.application({
	name: 'Hello Ext',
	launch: function(){
		Ext.create('Ext.container.Viewport',{
			layout: 'fit',
			items: [
				{
					title: 'hello ext',
					html: 'wecome to ext.js'
				}
			]
		})
	}
})