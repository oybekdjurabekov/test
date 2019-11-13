import axios from 'axios';
export default{
	namespaced:true,
	state:{
		events: [],
	},
	getters:{
		getEvents(state){
			return state.events
		}
	},
	mutations:{
		getItems(state, data){
			state.events.push(data)
		},
		clearItems(state){
			state.events = []
		}
	},
	actions:{
		getItems({commit}){
			return new Promise((resolve, reject) => {
				commit('clearItems');
					axios({url: 'ru/events/events/',  method: 'GET'})
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