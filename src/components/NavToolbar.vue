<template>
  <v-container id="keep">
    <v-app-bar
      app
      dark
      clipped-left
      color="primary"
    >
      <v-icon large @click="drawer = !drawer">menu</v-icon>
      <span class="title ml-3 mr-5">
        Styler 
        <small> v{{ apiVersion }} </small>
      </span>
      <!--<v-text-field
        solo-inverted
        flat
        hide-details
        label="Buscar"
        prepend-inner-icon="search"
      ></v-text-field> -->
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      color="grey lighten-4"
    >
      <v-list
        dense
        class="grey lighten-4"
      >
        <template v-for="(item, i) in items">
          <v-layout
            v-if="item.heading"
            :key="i"
            align-center
          >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>

          </v-layout>
          <v-divider
            v-else-if="item.divider"
            :key="i"
            dark
            class="my-4"
          ></v-divider>
          <v-list-item
            v-else
            :key="i"
            :to="item.route"
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="grey--text">
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
import {version} from '@/../package.json'

export default {
  name: 'NavToolbar',
  props: {
    source: String,
  },
  data: () => ({
    apiVersion: '',
    drawer: null,
    items: [
      { heading: 'Estilos' },
      { icon: 'archive', text: 'Ccar', route: '/styler/estilos_ccar' },
      // { icon: 'delete', text: 'Trash' },
      { divider: true },
      { heading: 'Icones' },
      { icon: 'location_on', text: 'OSM', route: '/styler/svg_osm' },
      { divider: true },
      { icon: 'settings', text: 'Configurações' },
      { icon: 'help', text: 'Ajuda', route: '/styler/help' }
    ],
  }),
  created () {
    this.apiVersion = version
  }
}
</script>

<style>
#keep .v-navigation-drawer__border {
  display: none
}
</style>