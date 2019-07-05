<template>
    <v-card height="100%">
      <!--
      <v-flex ma-0 xs12 sm6 md3>
        <v-text-field append-icon="search" label="Procurar" 
          solo-inverted
          flat
          outline
          hide-details
          v-model="searchedText"/>
          <v-btn icon @click="test" title="Download">            
            <v-icon>get_app</v-icon>
          </v-btn>
      </v-flex> -->
      <v-data-table
      :headers="headers"  :items="ccarList"
      class="elevation-1" hide-actions
      :pagination.sync="pagination" :rows-per-page-items="rows">
        
        <template slot="items" slot-scope="props">
          <td class="text-xs-center">{{ props.item[0] }}</td>
          <td class="justify-center layout px-0">
            <v-btn icon disabled title="Vizualizar">
              <v-icon>remove_red_eye</v-icon>
            </v-btn>
            <v-btn icon disabled title="Editar">
              <v-icon>edit</v-icon>
            </v-btn>
            <v-btn icon :href="props.item[1]" target="_blank" title="Abrir codigo">
              <v-icon>description</v-icon>
            </v-btn>
            <v-btn icon disabled title="Download">            
              <v-icon>get_app</v-icon>
            </v-btn>
          </td>
        </template>
        
        <template v-slot:no-data>
          <v-alert :value="true" color="error" icon="warning">
            Error: dados não encontrados.
          </v-alert>
        </template>

      </v-data-table>
      
      <div class="text-xs-center pt-2">
        <v-pagination color="primary" v-model="pagination.page" :length="pages" :total-visible="15"/>
      </div>
    </v-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ContentCenter',
  data () {
    return {
      searchedText: '',
      pagination: {},
      rows: [15],
      styleList: [],
      NameReposit: 'Ccar',
      url: ' ',
      dialog: false,
      headers: [
        {
          text: 'Nome do estilo',
          align: 'center',
          sortable: false,
          value: 'name'
        },
        { text: 'Ações', value: 'name', align: 'center', sortable: false }
      ]
    }
  },
  methods: {
    test () {
      console.log(this.ccarList)
      console.log(this.list)
    }
  },
  computed: {
    ...mapGetters({ccarList: 'getCcar'}),
    searchedList (searchedText) {
      const style = this.ccarList
      this.list = style.filter(style => style.item.match(new RegExp(this.searchedText, 'i')))
      console.log('aaa' + list)
      return this.list
    },
    pages () {
      return this.pagination.rowsPerPage ? Math.ceil(this.ccarList.length / this.pagination.rowsPerPage) : 0
    }
  }
}
</script>

<style>

</style>
