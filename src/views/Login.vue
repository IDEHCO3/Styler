<template>
  <v-layout column>
    <v-flex xs12 sm10 offset-sm1 md8 offset-md2 lg6 offset-lg3>
      <div class="white elevation-10">
        <v-toolbar flat dense class="primary mt-5 pa-2" dark>
          <v-toolbar-title style="margin:auto;">LOGIN</v-toolbar-title>
        </v-toolbar>
		
        <div class="pl-5 pr-4 pt-2 pb-2">
          <v-text-field label="Login" v-model="login" class="input-group--focused" prepend-icon="account_circle"></v-text-field>
          <v-text-field label="Senha" type="password" class="input-group--focused" v-model="senha" prepend-icon="vpn_key"></v-text-field>
			    <div class="text-xs-center">
            <v-btn outline color="success" dark @click="login"> Logar </v-btn>
            <v-btn outline color="error" dark @click="$router.go(-1)"> Voltar </v-btn>
          </div>
        </div>

      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      login: '',
      senha: ''
    }
  }
}
</script>

<style scoped>

</style>