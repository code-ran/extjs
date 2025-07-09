// Ext.onReady(function(){
// Ext.Msg.alert('标题', '提示内容');
// })

// Ext.onReady(function() {
// Ext.Msg.confirm('删除告警提示', '是否删除该条记录', function(op) {
// if (op == 'yes') {
// Ext.Msg.alert('提示', '已删除')
// } else {
// Ext.Msg.alert('提示', '已取消删除')
// }
// }, this)
// })

Ext.onReady(function() {
			Ext.Msg.prompt('标题', '请输入你的名字:', function(btn,
							text) {
						if (btn == 'ok') {
							// 处理文本值并且关闭...
							console.log('callback到的信息',text)
						}
					},this,true);
		})