<template>
    <v-container>
      <v-card>
        <v-card-title>
          Estilos Ccar
          <v-spacer></v-spacer>

          <v-text-field
            v-model="searchedText"
            append-icon="search"
            label="Buscar"
            single-line
            hide-details
          ></v-text-field>

        </v-card-title>

        <v-data-table
          :headers="headers"
          :items="ccarList"
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
          <v-btn icon disabled title="Editar">
              <v-icon>edit</v-icon>
          </v-btn>
          <v-btn icon :href="item.url" target="_blank" title="Abrir codigo">
            <v-icon>description</v-icon>
          </v-btn>
          <v-btn icon disabled title="Download">            
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
    ...mapGetters({ccarList: 'getCcar'})
  }
}
</script>

<style>

</style>
