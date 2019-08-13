<template>
    <v-container>
      <v-card>
        <v-card-title>
          Fontes
          <v-spacer></v-spacer>

          <v-text-field
            v-model="searchedText"
            append-icon="search"
            label="Buscar"
            single-line
            hide-details
          />

        </v-card-title>

        <v-data-table
          :headers="headers"
          :items="FontList"
          :search="searchedText"
          :page.sync="page"
          :items-per-page="12"
          hide-default-footer
          @page-count="pageCount = $event"
        >
        <template v-slot:item.action="{ item }">
          <v-btn icon disabled title="Vizualizar">
            <v-icon>remove_red_eye</v-icon>
          </v-btn>
          <v-btn icon  title="Download" target="_blank" :href="item.url">            
            <v-icon>get_app</v-icon>
          </v-btn>
        </template>

        <template v-slot:no-data>
          <v-alert :value="true" color="error" icon="warning">
            Error: dados não encontrados.
          </v-alert>
        </template>
        
        </v-data-table>
        <v-pagination 
          v-model="page" 
          :length="pageCount" 
          :total-visible="10"
          :next-icon="'navigate_next'"
          :prev-icon="'navigate_before'"
        />

      </v-card>
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ContentCenter',
  data () {
    return {
      searchedText: '',
      page: 1,
      pageCount: 0,
      headers: [
        {
          text: 'Nome',
          align: 'center',
          sortable: false,
          value: 'name'
        },
        { text: 'Ações', align: 'center', value: 'action', sortable: false }
      ]
    }
  },
  computed: {
    ...mapGetters({FontList: 'getFontList'})
  }
}
</script>

<style>
</style>
