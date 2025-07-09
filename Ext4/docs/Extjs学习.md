### Ext.MessageBox

Ext.MessageBox是一个工具类，提供了各种风格的信息提示对话框，也可以简写为Ext.Msg,这在Ext中很常见,很多组件或类都可以使用简写形式。

#### 常用方法

##### alert

显示一个标准的带有一个“确定”按钮的只读消息盒子(类似于警告提示)

window_messagebox.js

```js
Ext.onReady(function(){
	Ext.Msg.alert('标题', '提示内容');
})
```

window_messagebox.html

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="stylesheet" type="text/css" href=".\tool\ext-4.2.1.883\resources\css\ext-all.css" />
    <script type="text/javascript" charset="utf-8" src=".\tool\ext-4.2.1.883\ext-all-debug.js"></script>
    <script type="text/javascript" charset="utf-8" src=".\tool\ext-4.2.1.883\locale\ext-lang-zh_CN.js"></script>
    <script type= "text/javascript" charset="utf-8" src=".\window_messagebox.js"></script>
</head>

<body>
</body>

</html>
```

效果:

![image-20250709152835417](D:\git\extjs\Ext4\docs\Extjs学习.assets\image-20250709152835417.png)

##### confirm

显示一个带有“YES”和“NO”按钮的确认消息盒子（类似于JavaScript的确认）

js

```js
Ext.onReady(function() {
			Ext.Msg.confirm('删除告警提示', '是否删除该条记录', function(op) {
						if (op == 'yes') {
							Ext.Msg.alert('提示', '已删除')
						} else {
							Ext.Msg.alert('提示', '已取消删除')
						}
					}, this)
		})
```

![GIF 2025-7-9 16-06-31](D:\git\extjs\Ext4\docs\Extjs学习.assets\GIF 2025-7-9 16-06-31.gif)

##### prompt

显示一个带有“确定”和“取消”按钮，提供用户输入一些文本的消息盒子(类似于JavaScript的提示)。 提示可以是一个单行或者多行的文本框

```js
Ext.onReady(function() {
			Ext.Msg.prompt('标题', '请输入你的名字:', function(btn,
							text) {
						if (btn == 'ok') {
							// 处理文本值并且关闭...
							console.log('callback到的信息',text)
						}
					});
		})
```

![GIF 2025-7-9 16-56-11](D:\git\extjs\Ext4\docs\Extjs学习.assets\GIF 2025-7-9 16-56-11.gif)

multiline 参数设置为真时使用defaultTextHeight属性创建一个多行文本框，或者以px为高度单位的文本框

```js
Ext.onReady(function() {
			Ext.Msg.prompt('标题', '请输入你的名字:', function(btn,
							text) {
						if (btn == 'ok') {
							// 处理文本值并且关闭...
							console.log('callback到的信息',text)
						}
					},this,true);
		})
```

![image-20250709170840135](D:\git\extjs\Ext4\docs\Extjs学习.assets\image-20250709170840135.png)

##### wait

##### show

