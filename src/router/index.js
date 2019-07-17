import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'
import StylesCcar from '@/components/StylesCcar'
import OsmSvg from '@/components/OsmSvg'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/estilos_ccar',
      name: 'Ccar',
      component: StylesCcar
    },
    {
      path: '/svg_osm',
      name: 'SvgOsm',
      component: OsmSvg
    }
  ]
})
