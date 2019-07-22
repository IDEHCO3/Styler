<template>
  <v-app id="app">
    <nav-tab/>
    <v-content class="pt-0">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import NavTab from './components/NavTab'
import { mapActions } from 'vuex'

export default {
  name: 'app',
  components: {
    NavTab
  },
  methods: {
    ...mapActions(['FindStylesCcar', 'FindOsmSvgList'])
  },
  created () {
    this.FindStylesCcar()
    this.FindOsmSvgList()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: white;
}
</style>
