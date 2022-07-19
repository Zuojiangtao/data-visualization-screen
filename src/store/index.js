import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app'
// import classify from './modules/classify'
// import dictionary from './modules/dictionary'
import permission from './modules/permission'
import user from './modules/user'
import multiTabs from './modules/multi-tabs'

import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    // classify,
    // dictionary,
    permission,
    user,
    multiTabs,
  },
  getters,
})
