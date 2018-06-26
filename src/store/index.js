import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import counter from './modules/counter'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    counter
  },
  getters
})

export default store
