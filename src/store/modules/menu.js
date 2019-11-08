export default{
	namespaced:true,
	state:{
		items:[
			{
				url:'/release',
				title:'Релиз'
			},
			{
				url:'/profile',
				title:'Профиль',
			}
		]
	},
	getters:{
		listItems(state){
			return state.items
		}
	}
}