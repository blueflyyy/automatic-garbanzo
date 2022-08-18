const express = require('express')
const app = express()

app.use((request,response,next)=>{
	console.log('有人请求服务器了');
	console.log('请求来自于',request.get('Host'));
	console.log('请求的地址',request.url);
	next()
})

app.get('/list',(request,response)=>{
	const lists = [
		{
            id: 110, name: "初念初恋", time: "1月前",
            label: [{
                num: 2, contents: ["后端", "java"]
            }],
            title: "面试官：应用上线后Cpu使用率飙升如何排查？",
            content: "大家好，我是飘渺。上次面试官问了个问题：应用上线后Cpu使用率飙升如何排查？其实这是个很常见的问题，也非常简单，那既然如此我为什么还要写呢？因为上次回答的时候我忘记将线程PID转换成16进制的命令了。所以我决定再重温一遍这个问题，当然贴心的我还给大家准备好了测试代码，大家可以实际操作一下，这样下次就不会忘记了。",
            labels: { views: 5907, likes: 13, comments: 0 },
            isLike: false
        },
		{
            id: 111, name: "转转技术团队", time: "21天前",
            label: [{
                num: 3, contents: ['前端','JavaScript','Vue.js']
            }],
            title: "深入了解vue-cli",
            content: "转转内部脚手架的 Webpack 部分，是基于 @vue/cli 进行二次封装的。选择二次封装而不是自己搞一套 Webpack 配置，是为了减少维护的成本。",
            labels: { views: 3269, likes: 31, comments: 2 },
            isLike: false
        },
		{
            id: 120, name: "江南一点雨", time: "1月前",
            label: [{
                num: 3, contents: ['后端','Java','Spring Boot']
            }],
            title: "权限想要细化到按钮，怎么做？",
            content: "@[toc] 因为写了不少 Spring Security 文章的缘故，所以总是有小伙伴来问松哥：按钮级别的权限怎么实现？甚至有一些看过 vhr 的小伙伴也问这种问题，其实有的时候搞得我确实挺郁闷的，",
            labels: { views: 8785, likes: 114, comments: 9 },
            isLike: false
        },
		{
            id: 112, name: "六玥", time: "11天前",
            label: [{
                num: 1, contents: ['前端']
            }],
            title: "前端工程师必会的两种图片裁剪方式，cropperjs+阿里云oss",
            content: "目前在实际生产中，有很多种情况下需要进行图片裁剪，比如说上传头像、上传封面、自由编辑图片或其他的功能需求，这个时候我们该怎么样去进行图片的裁剪呢？",
            labels: { views: 860, likes: 8, comments: 0 },
            isLike: false
        },
		{
            id: 113, name: "Denstiny_", time: "11月前",
            label: [{
                num: 3, contents: ['面试','JavaScript','前端']
            }],
            title: "🔥 extends和寄生式组合继承原型之间的区别？",
            content: "在面向对象编程中讨论最多的就是继承，大部分的面向对象语言都支持两种继承，一种是接口继承，一种是实现继承。前者只继承方法签名（比如Java中继承接口的抽象类），后者继承实际的方法。在ECMAScript",
            labels: { views: 1440, likes: 12, comments: 9 },
            isLike: false
        },
		{
            id: 118, name: "gelald", time: "26天前",
            label: [{
                num: 1, contents: ['后端']
            }],
            title: "Contorllor 就该这么写",
            content: "从统一返回结构到参数校验再到异常处理等方面改造Controller层，想写出优雅简洁的Controller逻辑，不要错过这篇文章",
            labels: { views: 11000, likes: 120, comments: 29 },
            isLike: false
        },
		{
            id: 114, name: "ho", time: "28天前",
            label: [{
                num: 2, contents: ['前端','three.js']
            }],
            title: "初学three 基于tween.js完成聚焦等任务",
            content: "初入公司，因为公司主要业务是three 3D，所以需要学习three.js,主要学习以视频为主，这里推荐老陈打码的视频，讲的不错，还免费 demo的环境搭建 1、创建文件夹后，npm init; 初始,",
            labels: { views: 1331, likes: 14, comments: 4 },
            isLike: false
        },
		{
            id: 115, name: "water", time: "4月前",
            label: [{
                num: 2, contents: ['JavaScript','前端']
            }],
            title: "你需要知道的js类型和判断类型的方法",
            content: "前言 相信不管是在开发还是在巩固基础的时候，js中的类型都是必须要知道的部分。并且由于js是还在数据计算和比较的过程中还存在数据类型的转换，所以这个不定的数据类型还是很头疼的。但是就算很头疼，js中的",
            labels: { views: 219, likes: 5, comments: 0 },
            isLike: false
        },
		{
            id: 116, name: "hua_bang", time: "11天前",
            label: [{
                num: 2, contents: ['前端','TypeScript']
            }],
            title: "TS实现简易的井字棋",
            content: "TS的类型系统比较灵活，可以支持类型间的编程，由于过于灵活的编程技巧，所以也戏称TS的类型体操。这里，用TS来简单实现一个井子棋吧。",
            labels: { views: 378, likes: 5, comments: 2 },
            isLike: false
        },
		{
            id: 117, name: "XboxYan", time: "1月前",
            label: [{
                num: 2, contents: ['前端','CSS']
            }],
            title: "CSS color-scheme和夜间模式",
            content: "介绍一个和深色模式相关的CSS属性：color-scheme 一、什么是 color-scheme？ color-scheme顾名思义，即为“配色方案”，在系统中指的是“白天模式”和“夜间模式”。使用",
            labels: { views: 941, likes: 18, comments: 0 },
            isLike: false
        },
		{
            id: 119, name: "悟空聊架构", time: "1月前",
            label: [{
                num: 1, contents: ['后端']
            }],
            title: "唐太宗把微服务的'心跳机制'玩到了极致",
            content: "唐朝第二位皇帝唐太宗为了扩张领土，到处攻打周边的小国，即使有不服的小国也被唐太宗打服了。 朝贡就是朝拜和进贡。是两国或者说是两个政府之间的一种承认对方尊卑关系的礼节性外交。",
            labels: { views: 3283, likes: 25, comments: 19 },
            isLike: false
        },
		{
            id: 121, name: "xiaozhihong", time: "27天前",
            label: [{
                num: 2, contents: ['TensorFlow','PyTorch']
            }],
            title: "前端如何开始深度学习，那不妨试试JAX",
            content: "一、简介 在深度学习方面，TensorFlow 和 PyTorch是绝对的王者。但是，但除了这两个框架之外，一些新生的框架也不容小觑，比如谷歌推出的 JAX深度学习框架。 1.1、快速发展的JAX J",
            labels: { views: 5206, likes: 4, comments: 0 },
            isLike: false
        },
		{
            id: 122, name: "Livingbody", time: "14天前",
            label: [{
                num: 2, contents: ['后端','人工智能']
            }],
            title: "彩虹屁机器人 开心每一天",
            content: "我正在参加「创意开发 投稿大赛」详情请看：掘金创意开发大赛来了！ 一、彩虹屁机器人 开心每一天 1.主要功能 1.彩虹屁，不开心哄你开心 2.舔狗日记，舔与被舔是不是都很开心啊哈哈 3.毒鸡汤，兄弟干",
            labels: { views: 1561, likes: 13, comments: 6 },
            isLike: false
        },
		{
            id: 123, name: "Marno", time: "8月前",
            label: [{
                num: 3, contents: ['Flutter','macOS','Windows']
            }],
            title: "Flutter很强，仅2天就写了个桌面端App",
            content: "仅 2 天就用 Flutter 写了一个桌面端微信图片视频批量重命名的App，理论上也可以运行在手机端。",
			picUrl:'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8c497a8a7a7042d2adeda162c40e9d92~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?',
            labels: { views: 9300, likes: 202, comments: 94 },
            isLike: false
        },
		{
            id: 124, name: "岛上码农", time: "8月前",
            label: [{
                num: 3, contents: ['Flutter','iOS','前端']
            }],
            title: "丢掉丑陋的 toast，会动的 toast 更有趣！",
            content: "大多数 App的 toast 都很简单，简单的半透明黑底加上白色文字草草了事。相比之下，我们要介绍的 motion_toast就有趣多了！",
			picUrl:'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/aa5d4bd5d3034410875ccfe76fb0125f~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?',
            labels: { views: 7900, likes: 218, comments: 74 },
            isLike: false
        },
		{
            id: 125, name: "riki", time: "10月前",
            label: [{
                num: 2, contents: ['JavaScript','Android']
            }],
            title: "Android Studio 微信界面",
            content: "界面设计 （1）创建新项目之后在其中创建.xml文件，分别为top和bottom两个文件，然后在其中插入插件，修改其属性。 top控件示例如下： bottom控件示例如下： 最后top和bottom结",
            labels: { views: 1324, likes: 1, comments: 5 },
            isLike: false
        },
		{
            id: 126, name: "pdudo", time: "1小时前",
            label: [{
                num: 3, contents: ['Linux','运维', 'Redis']
            }],
            title: "如何预防利用Redis弱密码进行攻击",
            content: "携手创作，共同成长！这是我参与「掘金日新计划 · 8 月更文挑战」的第18天，点击查看活动详情 各位运维同仁大家好，我们之前在 服务器被挖矿了后应当如何做 中提及过，如何预防服务器被挖矿，其中有几条措",
            labels: { views: 90, likes: 1, comments: 0 },
            isLike: false
        },
		{
            id: 127, name: "董员外", time: "1小时前",
            label: [{
                num: 3, contents: ['算法','JavaScript', '面试']
            }],
            title: "LeetCode最长公共前缀使用JavaScript解题,一种不太正经的解法|前端学算法",
            content: "使用JavaScript解决LeetCode最长公共前缀的问题,for循环的几种跳出循环的方式；前端学习算法",
			picUrl:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2f76a75ab4ad43699778776958c32c15~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?",
            labels: { views: 96, likes: 1, comments: 1 },
            isLike: false
        },
		{
            id: 128, name: "waws520", time: "4小时前",
            label: [{
                num: 1, contents: ['Python']
            }],
            title: "Fiddler的使用(一)",
            content: "什么是 Fiddler? Fiddler 是一个 HTTP 协议调试代理工具，它能够记录并检查所有你的电脑和互联网之间的 HTTP 通讯。 Fiddler 提供了电脑端、移动端的抓包、包括 http",
			picUrl:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/882444723e0d477e9d9377daf7c1dbfb~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?",
            labels: { views: 202, likes: 0, comments: 0 },
            isLike: false
        },
        {
            id: 129, name: "AnLingYi", time: "1月前",
            label: [{
                num: 2, contents: ['Java','Intellij IDEA']
            }],
            title: "是的，我写了一个摸鱼插件！",
            content: "这个插件理论上支持JetBrains全系列开发工具，让你能够在IDEA里实现聊天自由、下棋自由、斗地主自由！还有IDEA防沉迷功能哦~ 冲呀~",
			picUrl:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ab9953b8a3f24861bf817c1b69642135~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?",
            labels: { views: 7902, likes: 47, comments: 30 },
            isLike: false
        },
        {
            id: 130, name: "熊的猫", time: "1天前",
            label: [{
                num: 3, contents: ['前端','Vue.js','前端框架']
            }],
            title: "你知道前端水印功能是怎么实现的吗？",
            content: "携手创作，共同成长！这是我参与「掘金日新计划 · 8 月更文挑战」的第4天，点击查看活动详情。 前言 前一段时间由于项目需要实现水印功能，于是去了解了相关的内容后，基于 Vue 的实现了一个 v-wa",
			picUrl:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6589261bf98347daa9581931e02dea79~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?",
            labels: { views: 3022, likes: 70, comments: 19 },
            isLike: false
        },
	]
	response.send(lists)
})

app.listen(5000,(err)=>{
	if(!err) console.log('服务器启动成功了,请求列表信息地址为：http://localhost:5000/list');
})
