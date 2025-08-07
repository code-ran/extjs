// 点击一个按钮，打开一个新的窗体
// Ext.onReady(function() {
//			// 根据元素id获取元素,经过ext包装后的对象
//			var btn = Ext.get('btn');
//			// 获取元素的值
//			console.log(btn.dom.value);
//
//			// 给按钮元素绑定事件
//			btn.on('click', function() {
//						if (!Ext.getCmp('mywin')) {
//							Ext.create('Ext.window.Window', {
//										id : 'mywin',
//										title : '新窗体',
//										height : 300,
//										width : 400
//									}).show();
//						}
//					})
//		})

/**
 * 在组件中添加子组件
 */
// Ext.onReady(function() {
//			var win = new Ext.window.Window({
//						title : '新窗体',
//						height : 300,
//						width : 400,
//						draggable : false,// 不允许拖拽
//						resizable : false, // 不允许窗体改变大小
//						closable : false,// 不显示关闭按钮
//						collapsible : true,// 显示折叠窗体的按钮
//						bodyStyle : 'background:#ffc; padding:10px;',
//						html : '窗体内容',
//						// 配置子组件的配置项
//						items : [{
//									// Ext组件提供了一个简单的写法，xtype属性去创建属性
//									xtype : 'panel',
//									height : 100,
//									width : '50%',
//									html : '我是子组件-panel面板组件'
//								}, {
//									xtype : 'button',
//									text : '按钮',
//									//给按钮绑定事件
//									handler : function(btn) {
//										alert('被点击了');
//										alert(btn.text);
//									}
//								}]
//					});
//			win.show();
//		})

/**
 * 在组件中添加子组件,并进行一系列针对子组件的操作
 */
//Ext.onReady(function() {
//			var win = new Ext.Window({
//						title : '操作组件的形式',
//						width : 500,
//						height : 300,
//						id: 'mywin',
//						// 在当前组件的top位置加一个工具条。
//						//bbar-底部左侧增加工具条 lbar-左侧增加工具条 rbar-右侧增加工具条 fbar-底部右侧增加工具条
//						tbar : [{
//									text : '按钮1',
//									handler : function(btn) {
//										//组件都会有up(向上查找)和down(向下查找)方法,需要的参数是组件的xtype或者选择器
//										//子组件获取父组件的信息-方式一
//										console.log('方式一，父组件window的title值:',btn.up('window').title);
//									}
//								}, {
//									text : '按钮2',
//									handler : function(btn) {
//										//子组件获取父组件的信息-方式二-常用:给父组件绑定id,通过getCmp获取组件信息
//										console.log('方式二，父组件window的title值',Ext.getCmp('mywin').title)
//									}
//								}, {
//									text : '按钮3',
//									handler : function(btn) {
//                                        //子组件获取父组件的信息-方式三,以上一级组件的形式去查找
//										console.log('方式三，父组件window的title值',btn.ownerCt.ownerCt.title)
//									}
//								}]
//					});
//					win.show();
//		})

/**
 * 使用windowGroup对象去操作多个window窗口
 */
Ext.onReady(function() {
			var windowGroup = new Ext.WindowGroup();
			// 创建五个window
			for (var i = 0; i < 5; i++) {
				var win = new Ext.Window({
							title : '第' + i + '个窗口',
							id : 'win_' + i,
							width : 300,
							height : 300
						});
				win.show();
				// 将窗体对象注册到ZindexManager
				windowGroup.register(win);
			}

			var btn1 = Ext.create('Ext.button.Button', {
						text : '全部隐藏',
						// 将按钮渲染到body上去
						renderTo:Ext.getBody(),
						handler : function() {
							// 隐藏所有被管理起来的window组件
							windowGroup.hideAll();
						}
					});
								var btn2 = Ext.create('Ext.button.Button', {
						text : '全部显示',
						// 将按钮渲染到body上去
						renderTo:Ext.getBody(),
						handler : function() {
							// 显示所有被管理起来的window组件
							windowGroup.each(function(win){
							win.show();
							})
						}
					});
		})

























