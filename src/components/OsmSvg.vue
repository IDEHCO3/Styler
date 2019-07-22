<template>
    <v-container>
      <v-list>
        <v-list-tile v-for="(item, index) in OsmSvgList" :key="index" 
          avatar @click.stop=""> 

          <!-- item[0] é o nome, item[1] o link -->
          <v-list-tile-avatar>
            <img :src="item[1]"/>
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title v-html="item[0]"/>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-flex>
              <v-btn icon @click.stop="viewImage(item)">
                <v-icon>remove_red_eye</v-icon>
              </v-btn>
              <v-btn icon :href="item[1]" target="_blank" >
                <v-icon>get_app</v-icon>
              </v-btn>
            </v-flex>
          </v-list-tile-action>
          
        </v-list-tile>
      </v-list>
      
      <v-pagination color="primary" v-model="pagination.page" :length="pages" :total-visible="10"/>

      <v-dialog v-model="ViewDialog" max-width="600">
        <v-card>
          <img :src="imageUrl" height="500" width="500" class="mt-4"/>
          <v-card-actions>
            <v-flex class='headline'>
              {{ imageName }} 
            </v-flex>

            <v-btn
              color="primary"
              outline
              @click="ViewDialog = false"
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
  data () {
    return {
      ViewDialog: false,
      imageName: '',
      imageUrl: '',
      pagination: {}
    }
  },
  methods: {
    viewImage (imageDataArray) {
      this.imageName = imageDataArray[0]
      this.imageUrl = imageDataArray[1]
      this.ViewDialog = true
    }
  },
  computed: {
    ...mapGetters({OsmSvgList: 'getOsmSvgList'}),
    pages () {
      return this.pagination.rowsPerPage ? Math.ceil(this.OsmSvgList.length / this.pagination.rowsPerPage) : 0
    }
  }
}
</script>

<style>
</style>