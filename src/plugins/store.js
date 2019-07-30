import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const actions = {
  FindStylesCcar ({ commit }) {
    Vue.axios.get(`ccar/`)
      .then(res => {
        let ParsedResp = transformJsonInArray(res.data) // modo mais simples encontrado para transformar o json unico em algo que a data table aceitasse
        commit('setCcarList', ParsedResp)
      })
  },
  FindOsmSvgList ({ commit }) {
    Vue.axios.get(`osm/svgs/`)
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

const mutations = { 
  setCcarList (state, ccarList) {
    state.ccar_list = ccarList
  },
  setOsmSvgList (state, OsmSvgList) {
    state.osm_svg_list = Object.entries(OsmSvgList)
  }
}

function transformJsonInArray(json){
  var StyleList = []
  let NameArray = Object.keys(json)
  let UrlArray = Object.values(json)

  for (let item = 0; item < NameArray.length; item++){
    let SingleStyleObject = {
      name: NameArray[item], 
      url: UrlArray[item]
    }
    StyleList.push(SingleStyleObject)
  }
  return StyleList
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
