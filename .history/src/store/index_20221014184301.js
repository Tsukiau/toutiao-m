import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  getters: {
  },
  mutations: {
       setUser(state,user){
           localStorage.setItem('T')
       }
  },
  actions: {
  },
  modules: {
  }
})
