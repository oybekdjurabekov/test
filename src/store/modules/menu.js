export default{
	namespaced:true,
	state:{
		items:[
			{
				url:'/',
				title:'Home'
			},
			{
				url:'/Marketing',
				title:'Marketing'
			},
			{
				url:'/Blog',
				title:'Blog'
			},
			{
				url:'/Contact',
				title:'Contact Us'
			}
		]
	},
	getters:{
		listItems(state){
			return state.items
		}
	}
}