import Vue from 'vue'
import Vuex from 'vuex'
import 
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
        user: JSON.parse(localStorage.getItem('ttUser'))
  },
  getters: {
  },
  mutations: {
       setUser(state,user){
        state.user = user
           localStorage.setItem('ttUser',JSON.stringify(user))
       }
  },
  actions: {
  },
  modules: {
  }
})
