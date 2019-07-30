<template>
    <v-container>
      <v-list>
        <v-list-item v-for="(item, index) in OsmSvgList" :key="index" @click.stop=""> 

          <!-- item[0] é o nome, item[1] o link -->
          <v-list-item-avatar>
            <img :src="item[1]"/>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="item[0]"/>
          </v-list-item-content>

          <v-list-item-action>
            <v-flex>
              <v-btn icon @click.stop="viewImage(item)">
                <v-icon>remove_red_eye</v-icon>
              </v-btn>
              <v-btn icon :href="item[1]" target="_blank" >
                <v-icon>get_app</v-icon>
              </v-btn>
            </v-flex>
          </v-list-item-action>
          
        </v-list-item>
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
              outlined
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