import axios from 'axios'
export default {
  namespaced:true,
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user : {}
  },
  mutations: {
    auth_request(state){
      state.status = 'loading'
    },
    auth_success(state, payload){
      state.status = 'success'
      state.showMenu = true
      state.token = payload.token
      state.user = payload.user
    },
    auth_error(state){
      state.status = 'error'
    },
    logout(state){
      state.status = ''
      state.token = ''
    },
  },
  actions: {
    register({commit}, user){
      return new Promise((resolve, reject) => {
        commit('auth_request')
        let form = new FormData();
        form.append('username', user.data.username)
        form.append('phone', user.data.phone)
        form.append('password', user.data.password)
        form.append('first_name', user.data.first_name)
        form.append('last_name', user.data.last_name)
        form.append('email', user.data.email)
        form.append('birthdate', user.data.birthdate)
        form.append('birthplace', user.data.birthplace)
        form.append('work_address', user.data.work_address)
        form.append('position', user.data.position)
        form.append('position_date', user.data.position_date)  
        form.append('emergency_phone', user.data.emergency_phone)  
        form.append('editorial_office_phone', user.data.editorial_office_phone)  
        form.append('photo',  user.data.photo)  
        form.append('identity_photo',  user.data.identity_photo)  
        form.append('editorial_office_address', user.data.editorial_office_address)  
        
        axios({url: 'ru/users/signup/', data: form, method: 'POST', headers:{'Content-type':'multipart/form-data'}})
        .then(resp => {
          const token = resp.data.token
          const user = resp.data.user
          localStorage.setItem('token', token)
          axios.defaults.headers.common['Authorization'] = token
          resolve(resp)
        })
        .catch(err => {
          commit('auth_error', err)
          localStorage.removeItem('token')
          reject(err)
        })
      })
     },
    login({commit}, payload){
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({url: 'ru/users/signin/', data: payload, method: 'POST' })
        .then(resp => {
          const token = resp.data.token
          const user = resp.data.user
          localStorage.setItem('token', token)
          axios.defaults.headers.common['Authorization'] = token
          commit('auth_success', {token, user})
          resolve(resp)
        })
        .catch(err => {
          commit('auth_error')
          localStorage.removeItem('token')
          reject(err)
        })
      })
    },
     logout({commit}){
      return new Promise((resolve, reject) => {
        commit('logout')
        localStorage.removeItem('token')
        delete axios.defaults.headers.common['Authorization']
        resolve()
      })
     }
  },
  getters : {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
  }
}