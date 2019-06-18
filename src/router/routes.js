// 导入文件时, 如果没有 ./, 默认从node_modules查找文件
import routesComponent from './routesComponent.js'

//路由配置
export default [

	
	{
		path: '/More',
		name: 'More',
		component: routesComponent.More,
	},
	
	{
		path: '/Rank',
		name: 'Rank',
		component: routesComponent.Rank,
	},
	
	{
		path: '/Detailed',
		mame: 'Detailed',
		component: routesComponent.Detailed,
	},
	
	{
		path: '/Novel',
		name: 'Novel',
		component: routesComponent.Novel,
	},
	
	{
		path: '/',
		name: 'Index',
		component: routesComponent.Index,
		children:[
			{
				path: '/Book',
				name: 'Book',
				component: routesComponent.Book,
			},
			
			{
				path: '/Read',
				name: 'Read',
				component: routesComponent.Read,
			},
			
			{
				path: '/My',
				name: 'My',
				component: routesComponent.My,
			},
			
			{
				path: '/Search',
				name: 'Search',
				component: routesComponent.Search,
			}
		]
	}
	
]