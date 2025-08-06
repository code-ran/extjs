Ext.onReady(function() {

	Ext.create('Ext.window.Window', {
		title : 'window组件',
		height : 200,
		width : 400,
		layout : 'fit',
		constrain : true,// 限制窗口不超出浏览器边界
		modal : true, // 将窗口设置成模态窗口（加一个遮罩层，不能对父组件页面操作）
		x : 50,// 在初始显示时，该窗口的左边缘的X位置
		y : 50, // 在初始显示时，该窗口的上边的Y位置
		autoScroll : true, // 增加滚动条
		//在windows组件中写html
		html : '<div style="width: 200px;height:200px">你好</div style="width: 200px;height:200px"><div>世界</div>'
	}).show();
})