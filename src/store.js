import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const actions = {
  FindStylesCcar ({ commit }) {
    axios.get(`ccar/`)
      .then(res => commit('setCcarList', res.data))
  },
  FindOsmSvgList ({ commit }) {
    axios.get(`osm/svgs/`)
      .then(res => commit('setOsmSvgList', res.data))
  }
}

const getters = {
  getCcar (state) {
    return state.ccar_list
  },
  getOsmSvgList (state) {
    return state.osm_svg_list
  }
}

const mutations = { // modo mais simples encontrado para transformar o json em algo que o vue aceitasse... um array
  setCcarList (state, ccarList) {
    state.ccar_list = Object.entries(ccarList)
  },
  setOsmSvgList (state, OsmSvgList) {
    state.osm_svg_list = Object.entries(OsmSvgList)
  }
}

const state = {
  ccar_list: [],
  osm_svg_list: []
}

export default new Vuex.Store({
  actions,
  getters,
  mutations,
  state
})
