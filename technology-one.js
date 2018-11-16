module.exports = {
	// 模版标识
	name: 'example',
	// 模版引擎
	engine: 'pug',

	// 页面
	pages: [
		{
			name: '首页',
			// 路径
			path: '/',
			// 预览图
			thumbnail: 'home.png',
		},
		{
			name: '关于我们',
			// 路径
			path: '/about',
			// 预览图
			thumbnail: 'about.png',
		},
		{
			name: '经典案例',
			// 路径
			path: '/cases',
			// 预览图
			thumbnail: 'cases.png',
		},
		{
			name: '联系我们',
			// 路径
			path: '/contact',
			// 预览图
			thumbnail: 'contact.png',
		},
		{
			name: '渠道招商',
			// 路径
			path: '/join',
			// 预览图
			thumbnail: 'join.png',
		},
		{
			name: '产品与方案',
			// 路径
			path: '/product',
			// 预览图
			thumbnail: 'product.png',
		},
	]
}
