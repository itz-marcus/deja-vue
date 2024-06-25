import { createStore } from 'vuex'

export default createStore({
  state: {
    cars:null,
    gamingConsoles:null,
    friends:null
  },
  getters: {
  },
  mutations: {
    setCars(state,payload){
      state.cars = payload 
     },
     setGamingConsoles(state,payload){
      state.gamingConsoles = payload 
     },
     setFriends(state,payload){
      state.friends = payload
     }
  },
  actions: {
    async getData({commit}){
      let fetchInfo = await fetch('https://itz-marcus.github.io/First_API/Data%20for%20deja-vue/data.json')
      let data = await fetchInfo.json()
      let {cars,gamingConsoles,friends} = data
      commit('setCars',cars)
      commit('setGamingConsoles',gamingConsoles)
      commit('setFriends',friends)
    }
  },
  modules: {
  }
})
