<template>
  <v-card>
    <v-card-title class="primary">
      <v-flex center>
        <div class="headline">Excluir</div>
      </v-flex>
    </v-card-title>
    <v-card-text>Tem certeza que quer excluir ?<br>{{ name }}</v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn outline color="success" @click.native="deleteItem">
        Sim
        <v-icon class="ml-1">check</v-icon>
      </v-btn>
      <v-btn outline color="error" @click.native="$emit('close')">
        Não
        <v-icon class="ml-1">cancel</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>

<script>
import { delete as axiosDelete } from 'axios'
export default {
  data () {
    return {
      name: '',
      url: ''
    }
  },
  methods: {
    async deleteItem () {
      try {
        await axiosDelete(this.url)
        this.name = ''
        this.url = ''
        this.$emit('close')
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
