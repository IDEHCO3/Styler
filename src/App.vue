<template>
  <v-app id="app">
    <nav-toolbar/>
    <v-content class="pt-10">
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import NavToolbar from './components/NavToolbar'
import { mapActions } from 'vuex'

export default {
  name: 'app',
  components: {
    NavToolbar
  },
  methods: {
    ...mapActions(['FindStylesCcar', 'FindOsmSvgList', 'FindFontList'])
  },
  created () {
    this.FindStylesCcar()
    this.FindOsmSvgList()
    this.FindFontList()
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
