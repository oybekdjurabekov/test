export default{
		namespaced:true,
		state:{
			items:[
				{
					title:'Заголовок 1',
					data:'23 Apr',
					status:false,
					description:'Chocolate cake biscuit candy canes carrot cake. Bear claw wafer jujubes bear claw candy biscuit. Jelly-o pudding topping. Muffin soufflé cotton candy topping candy muffin biscuit. Lemon drops lemon drops powder gingerbread pastry cake.',
				},
				{
					title:'Текст 2',
					data:'23 Apr',
					status:false,
					description:'Chocolate cake biscuit candy canes carrot cake. Bear claw wafer jujubes bear claw candy biscuit. Jelly-o pudding topping. Muffin soufflé cotton candy topping candy muffin biscuit. Lemon drops lemon drops powder gingerbread pastry cake.',
				},
				{
					title:'заголовок текст 3',
					data:'23 Apr',
					status:false,
					description:'Chocolate cake biscuit candy canes carrot cake. Bear claw wafer jujubes bear claw candy biscuit. Jelly-o pudding topping. Muffin soufflé cotton candy topping candy muffin biscuit. Lemon drops lemon drops powder gingerbread pastry cake.',
				},
				{
					title:'что то что то',
					data:'23 Apr',
					status:false,
					description:'Chocolate cake biscuit candy canes carrot cake. Bear claw wafer jujubes bear claw candy biscuit. Jelly-o pudding topping. Muffin soufflé cotton candy topping candy muffin biscuit. Lemon drops lemon drops powder gingerbread pastry cake.',
				},
			],
			filter:'all',
			sort:false
			
		},
		getters:{
			tasksItems(state){
				if (state.filter === 'all') return state.items;
				return state.items.filter((items)=>{
					return items.status == state.filter
				})
			}
		},
		
		mutations:{
			deleteToDo(state, index){
				state.items.splice(index, 1);
			},
			filterList(state, val){
				state.filter = val
			},
			searchText(state, value){
				
				console.log(state)
				
			},
			addTasks(state, payload){
				var d = new Date(payload.date),
		              month = '' + (d.toLocaleString('default', { month: 'short' })),
		              day = '' + d.getDate(),
		              year = d.getFullYear();
			          if (month.length < 2) 
			              month = '0' + month;
			          if (day.length < 2) 
			              day = '0' + day;
		            payload.date = [day, month].join(' ');
					state.items.push({
						title:payload.title,
						description:payload.description,
						data:payload.date,
						status:false
					})
			}
		},
		actions:{

		}
	}
