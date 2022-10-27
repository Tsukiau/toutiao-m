import Vue from 'vue'
import Vuex from 'vuex'
import { getItem,setItem } from './storage'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
        user: getItem('ttUser')
  },
  getters: {
  },
  mutations: {
       setUser(state,user){
        state.user = user
          setItem('ttUser',user)
       }
  },
  actions: {
  },
  modules: {
  }
})
