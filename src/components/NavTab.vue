<template>
  <v-app>
		<v-navigation-drawer 
      fixed
      clipped
      class="grey lighten-4"
      app
      v-model="drawer"
    >
      <v-list
        dense
        class="grey lighten-4"
      >
        <template v-for="(item, i) in items">
          <v-layout
            row
            v-if="item.heading"
            align-center
            :key="i"
          >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
          </v-layout>
          <v-divider
            dark
            v-else-if="item.divider"
            class="my-3"
            :key="i"
          ></v-divider>
          <v-list-tile
            :key="i"
            v-else
            disabled 
            v-on:click="console.log(s)"
          ><!-- DESABILITADO -->
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="grey--text">
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark color="primary" app absolute clipped-left>
      <v-toolbar-side-icon @click.native="drawer = !drawer"></v-toolbar-side-icon>
      <span class="title ml-3 mr-5">Styler</span>
      <v-spacer/>
      <v-flex xs12 sm6>
        <v-text-field
          solo-inverted
          flat
          outline
          hide-details
          append-icon="search"
        ></v-text-field>
        
      </v-flex>
    </v-toolbar>
    <v-content>      
      <ContentCenter/> <!-- conteudo da table-->
    </v-content>
  </v-app>
</template>

<script>
import ContentCenter from './ContentCenter.vue'

export default {
  name: 'NavTab',
  components: {
    ContentCenter
  },
  data () {
    return {
      drawer: null,
      items: [
        { heading: 'Estilos' },
        { icon: 'add', text: 'Novo estilo' },
        { divider: true },
        { heading: 'Repositorios' },
        { icon: 'archive', text: 'Ccar' },
        { icon: 'delete', text: 'Trash' },
        { divider: true },
        { icon: 'settings', text: 'Configurações' },
        { icon: 'help', text: 'Ajuda' }
      ]
    }
  }
}
</script>

<style scoped>

</style>
