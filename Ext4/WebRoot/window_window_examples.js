// 点击一个按钮，打开一个新的窗体
Ext.onReady(function() {
			// 根据元素id获取元素,经过ext包装后的对象
			var btn = Ext.get('btn');
			// 获取元素的值
			console.log(btn.dom.value);

			// 给按钮元素绑定事件
			btn.on('click', function() {
						Ext.create('Ext.window.Window', {
									title : '新窗体',
									height : 300,
									width : 400,
									// 解决重复点击的问题，增加模态属性
									modal : true
								}).show();
					})
		})