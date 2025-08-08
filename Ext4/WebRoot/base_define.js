/**
 * 使用define创建类
 */
//Ext.onReady(function() {
//			// Ext中去定义一类：Ext.define(className,properties,callback)
//			Ext.define('Person', {
//						// 这里是对于这个类的一些配置信息
//						// config属性就是配置当前类的属性内容，并且会加上gt和set方法
//						config : {
//							name : 'z3',
//							age : 20
//						},
//						// 自己定义的方法
//						say : function() {
//							alert('方法')
//						},
//						// 给当前定义的类加一个构造器
//						constructor : function(config) {
//							// this指的是当前的类对象
//							var me = this;
//							// 初始化配置信息
//							me.initConfig(config);
//						}
//					});
//			// debugger;
//			//对象实例化
//			var p = Ext.create('Person', {
//						name : '王五',
//						age : 30
//					});
//			alert(p.getName());
//			alert(p.getAge());
//			p.say();
//		});
		
/**
 * ext中类的继承extend
 */
// Ext.onReady(function() {
// 	        //父类
//			Ext.define('Person', {
//						config : {
//							name : undefined
//						},
//						// 给当前定义的类加一个构造器
//						constructor : function(config) {
//							// this指的是当前的类对象
//							var me = this;
//							// 初始化配置信息
//							me.initConfig(config);
//						}
//					});
//            //子类
//			Ext.define('girl', {
//				        //继承Person类
//				        extend: 'Person',
//						config : {
//							age : undefined,
//							sex : 'woman'
//						}
//					});
//					//使用父类的构造方法
//		 var p1 = 	Ext.create('girl', {
//						name : '灵儿',
//						age : 20
//					});
//					console.log('name:',p1.name);
//					console.log('age:',p1.age);
//					console.log('sex:',p1.sex);
//					
//		});
		
/**
 * 混合的配置项，可以多继承的配置
 */		
 Ext.onReady(function() {
			Ext.define('Sing', {
						canSing : function() {
							console.log('canSing......')
						}
					});
			Ext.define('Say', {
						canSay : function() {
							console.log('canSay......')
						}
					});
			Ext.define('User', {
						mixins : {
							sing : 'Sing',
							say : 'Say'
						}
					});
			var user = Ext.create("User");
			console.log(user.canSing())
			console.log(user.canSay())
		});		
		
		
		
		