export default{
		namespaced:true,
		state:{
			items:[
				{
					id:1,
					file:'/assets/img/img1.jpg',
					title:'Заголовок 1',
					data:'23 Apr 15:00',
					admin:'admin admin',
					description:'Fashion is a popular style, especially in clothing, footwear, lifestyle, accessories, makeup, hairstyle and body.',
				},
				{
					id:2,
					file:'/assets/img/img1.jpg',
					title:'Заголовок 2',
					data:'23 Apr 15:00',
					admin:'admin admin',
					description:'Fashion is a popular style, especially in clothing, footwear, lifestyle, accessories, makeup, hairstyle and body.',
				},
				{
					id:3,
					file:'/assets/img/img1.jpg',
					title:'Заголовок 3',
					data:'23 Apr 15:00',
					admin:'admin admin',
					description:'Fashion is a popular style, especially in clothing, footwear, lifestyle, accessories, makeup, hairstyle and body.',
				},
				{
					id:4,
					file:'/assets/img/img3.jpg',
					title:'Заголовок 4',
					data:'23 Apr 15:00',
					admin:'admin admin',
					description:'Fashion is a popular style, especially in clothing, footwear, lifestyle, accessories, makeup, hairstyle and body.',
				},
			],
		},
		getters:{
			releaseItems(state){
				return state.items;
			},
			releaseItem(state){
				let releaseItem = {}
				for(let i =0; i < state.items.length; i++){
					let news = state.items[i]
					releaseItem[news.id] = news
				}
				return releaseItem
			},
			item:(state, getters)=>(id)=>{ 
				return getters.releaseItem[id]
			}
		},
		mutations:{
			
		},
		actions:{

		}
	}