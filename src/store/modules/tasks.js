export default{
		namespaced:true,
		state:{
			filterButton:[
                {
                    title:'Все',
                    icon:'mail_outline',
                    active:true,
                    value:'all'
                },{
                    title:'Активные',
                    icon:'date_range',
                    active:false,
                    value:false
                },{
                    title:'Заверщенные',
                    icon:'check',
                    active:false,
                    value:true
                },
            ],
			items:[
				{
					id:1,
					title:'Заголовок 1',
					data:'23 Apr',
					status:false,
					description:'Chocolate cake biscuit candy canes carrot cake. Bear claw wafer jujubes bear claw candy biscuit. Jelly-o pudding topping. Muffin soufflé cotton candy topping candy muffin biscuit. Lemon drops lemon drops powder gingerbread pastry cake.',
				},
				{
					id:2,
					title:'Текст 2',
					data:'23 Apr',
					status:false,
					description:'Chocolate cake biscuit candy canes carrot cake. Bear claw wafer jujubes bear claw candy biscuit. Jelly-o pudding topping. Muffin soufflé cotton candy topping candy muffin biscuit. Lemon drops lemon drops powder gingerbread pastry cake.',
				},
				{
					id:3,
					title:'заголовок текст 3',
					data:'23 Apr',
					status:false,
					description:'Chocolate cake biscuit candy canes carrot cake. Bear claw wafer jujubes bear claw candy biscuit. Jelly-o pudding topping. Muffin soufflé cotton candy topping candy muffin biscuit. Lemon drops lemon drops powder gingerbread pastry cake.',
				},
				{
					id:4,
					title:'что то что то',
					data:'23 Apr',
					status:false,
					description:'Chocolate cake biscuit candy canes carrot cake. Bear claw wafer jujubes bear claw candy biscuit. Jelly-o pudding topping. Muffin soufflé cotton candy topping candy muffin biscuit. Lemon drops lemon drops powder gingerbread pastry cake.',
				},
			],
			filter:'all',
			sort:false,
			counter:4,
			
		},
		getters:{
			tasksItems(state){
				if (state.filter === 'all') return state.items;
				return state.items.filter((items)=>{
					return items.status == state.filter
				})
			},
			filterButton(state){
				return state.filterButton;
			}
		},
		
		mutations:{
			deleteToDo(state, index){
				state.items.splice(index, 1);
			},
			filterList(state, val){
				for(let i =0; i < state.filterButton.length; i++){
	              state.filterButton[i].active = false
	            }
	            val.active = true
				state.filter = val.value
			},
			searchText(state, value){
				let obj = [];
				
			},
			checkedItem(state, index){
				state.items[index].status = !state.items[index].status
			},
			addTasks(state, payload){
				state.counter++
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
						id:state.counter,
						title:payload.title,
						description:payload.description,
						data:payload.date,
						status:false
					})
					state.items.sort((a,b) => {return b.id - a.id;});
			}
		},
		actions:{

		}
	}
