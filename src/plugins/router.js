import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import Help from '@/views/Help'
import StylesCcar from '@/components/StylesCcar' // retirar da pasta de componentes e mover pra views futuramente
import OsmSvg from '@/components/OsmSvg'
import Fonts from '@/components/Fonts'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/styler/',
    },
    {
      path: '/styler/',
      name: 'Home',
      component: Home
    },
    {
      path: '/styler/help',
      name: 'Help',
      component: Help
    },
    {
      path: '/styler/fontes',
      name: 'Fonts',
      component: Fonts
    },
    {
      path: '/styler/estilos_ccar',
      name: 'Ccar',
      component: StylesCcar
    },
    {
      path: '/styler/svg_osm',
      name: 'SvgOsm',
      component: OsmSvg
    }
  ]
})

