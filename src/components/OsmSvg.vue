<template>
    <v-container>
      <v-card>
        <v-card-title>
          Icones OSM
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
          :items="list"
          :search="searchedText"
          :page.sync="page"
          :items-per-page="12"
          hide-default-footer
          @page-count="pageCount = $event"
        >
          <template v-slot:item.action="{ item }">
            <v-btn icon title="Vizualizar" @click="viewImage(item)">
              <v-icon>remove_red_eye</v-icon>
            </v-btn>
            <v-btn icon :href="item.url" target="_blank" title="Nova aba">
              <v-icon>description</v-icon>
            </v-btn>
            <v-btn icon disabled title="Download">            
              <v-icon>get_app</v-icon>
            </v-btn>
          </template>

          <template v-slot:item.url="{ item }">
            <v-avatar>
              <img :src="item.url">
            </v-avatar>
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

      <v-dialog v-model="ViewImageDialog" max-width="600">
        <v-card>
          <img :src="imageUrl" height="500" width="500" class="mt-4"/>
          <v-card-actions>
            <v-flex class='headline'>
              {{ imageName }} 
            </v-flex>

            <v-btn
              color="primary"
              outlined
              @click="ViewImageDialog = false"
            >
              Fechar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'DataTable',
  data () {
    return {
      ViewImageDialog: false,
      imageName: '',
      imageUrl: '',
      searchedText: '',
      page: 1,
      pageCount: 0,
      headers: [
        {
          text: 'Miniatura',
          align: 'center',
          sortable: false,
          value: 'url'
        },
        {
          text: 'Nome',
          align: 'center',
          sortable: false,
          value: 'name'
        },
        {
          text: 'Ações', 
          align: 'center', 
          value: 'action', 
          sortable: false 
        }
      ]
    }
  },
  methods: {
    viewImage (image) {
      this.imageName = image.name
      this.imageUrl = image.url
      this.ViewImageDialog = true
    }
  },
  computed: {
    ...mapGetters({list: `getOsmSvgList`}),
  }
}
</script>

<style>
</style>
