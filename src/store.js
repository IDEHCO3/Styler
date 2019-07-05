import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const actions = {
  FindStylesCcar ({ commit }) {
    axios.get(`ccar/`)
      .then(res => commit('setCcarList', res.data))
  }
}

const getters = {
  getCcar (state) {
    return state.ccar_list
  }
}

const mutations = {
  setCcarList (state, ccarList) {
    const list = Object.entries(ccarList)
    /*
    for (let item in ccarList) {
      list.push(ccarList[item])
    }
    */
    // const arrayOfObj = Object.entries(ccarList).map((estilo) => ({ [estilo[0]]: estilo[1] }))
    state.ccar_list = list
  }
}

const state = {
  ccar_list: []
}

export default new Vuex.Store({
  actions,
  getters,
  mutations,
  state
})
