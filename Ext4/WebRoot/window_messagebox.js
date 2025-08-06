// 告警提示框

// Ext.onReady(function(){
// Ext.Msg.alert('标题', '提示内容');
// })

// 确认框

// Ext.onReady(function() {
// Ext.Msg.confirm('删除告警提示', '是否删除该条记录', function(op) {
// if (op == 'yes') {
// Ext.Msg.alert('提示', '已删除')
// } else {
// Ext.Msg.alert('提示', '已取消删除')
// }
// }, this)
// })

// 输入框

// Ext.onReady(function() {
// Ext.Msg.prompt('标题', '请输入你的名字:', function(btn,
// text) {
// if (btn == 'ok') {
// // 处理文本值并且关闭...
// console.log('callback到的信息',text)
// }
// },this,true);
// })

// 等待框
// Ext.onReady(function() {
// Ext.Msg.wait('消息内容', '消息标题', {
// interval : 400, // 循环时间间隔
// duration : 2000, // 总时长
// increment : 5, // 执行进度条的次数
// text : 'Updating...', // 进度条上提示的文字
// scope : this,
// fn : function() {
// // 进度条执行完后的回调
// alert('更新成功')
// // p.updateText('Done!');
// },
// animate : true
// //进度条平滑渲染
// })
// })

// MessageBox的show方法
Ext.onReady(function() {
			Ext.Msg.show({
				title : '我是自定义提示框',
				msg : '我是内容:',
				height : 300,
				width : 300,
				buttons : Ext.Msg.OKCANCEL,// 静态属性
				multiline : true,
				// fn: saveAddress, //回调函数
				// animateTarget: 'addAddressBtn',
				icon : Ext.Msg.INFO // ext自带的图标有，ERROR/INFO/QUESTION/WARNING
				});
		})
