import Vue from 'Vue'
import Vuex from 'Vuex'
import actions from './actions'
import mutations from './mutations'
import state from './state'

Vue.use(Vuex)
export default new Vuex.Store({
    actions,
    mutations,
    state
})