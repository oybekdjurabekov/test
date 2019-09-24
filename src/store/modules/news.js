export default{
		namespaced:true,
		state:{
			items:[
					{
						id:'1',
						title:'You can learn how to make money with your blog and videos',
						img:'/assets/img/img1.jpg',
						description:'Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enimcerat elicerat eli nibh, maximus ac felis nec, maximus tempor odio.',
						category:'Make Money',
						author:'by Said',
						date:'24 July, 2017',
						see:'2291'
					},
					{
						id:'2',
						title:'You can learn how to make money with your blog and videos',
						img:'/assets/img/img2.jpg',
						description:'Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enimcerat elicerat eli nibh, maximus ac felis nec, maximus tempor odio.',
						category:'Make Money',
						author:'by Alisher',
						date:'24 July, 2018',
						see:'2291'
					},
					{
						id:'3',
						title:'You can learn how to make money with your blog and videos',
						img:'/assets/img/img3.jpg',
						description:'Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enimcerat elicerat eli nibh, maximus ac felis nec, maximus tempor odio.',
						category:'Make Money',
						author:'by Oybek',
						date:'24 July, 2019',
						see:'2291'
					},
				]

		},
		getters:{
			newsItems(state){
				return state.items
			},
			itemNews(state){
				let itemNews = {}
				for(let i =0; i < state.items.length; i++){
					let news = state.items[i]
					itemNews[news.id] = news
				}
				return itemNews
			},
			item:(state, getters)=>(id)=>{
				return getters.itemNews[id]
			}

		},
		mutations:{

		},
		actions:{

		}
	}
