import axios from 'axios';
export default{
		namespaced:true,
		state:{
			items:[],
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
			getItems(state, payload){
				state.items.push(payload);
			},
			clearItems(state){
				state.items = []
			}	
		},
		actions:{
			getItems({commit}){
				return new Promise((resolve, reject) => {
				commit('clearItems');
					axios({url: 'press/',  method: 'GET'})
			        .then(resp => {
			          const data = resp.data[0];
			          commit('getItems', data);
			          resolve(resp);
			        })
			        .catch(err => {
			          reject(err);
			        });
			    });	
			}
		}
	}