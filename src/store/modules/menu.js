export default{
	namespaced:true,
	state:{
		items:[
			{
				url:'/report',
				title:'Отчеты'
			},
			{
				url:'/release',
				title:'Релиз'
			},
			{
				url:'/profile',
				title:'Профиль',
			},
			{
				url:'/signin',
				title:'Выход'
			},
		]
	},
	getters:{
		listItems(state){
			return state.items
		}
	}
}