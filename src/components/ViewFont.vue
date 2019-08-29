<template>
    <v-dialog v-model="dialog" max-width="1000">
        <v-card>
                
            <v-row >
                <v-col
                    v-for="char in caractersList"
                    :key="char"
                    cols="10"
                    sm="6"
                    md="4"
                    lg="1"
                >
                    <v-card class="caracterBox">

                        <h1 style="
                            color:red;"
                        class="fontTest"> {{char}} </h1>
                        <v-card-title>
                            {{char}}
                        </v-card-title>
                    </v-card>
                </v-col>
            </v-row>
                
            <v-card-actions>
                <v-btn
                color="error"
                outlined
                
                >
                Fechar
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>

export default {
    name: 'ViewFont',
    data (){
        return {
            dialog: true,
            fontName: '',
            hexa: '&#x41;',
            caractersList: ['A', 'a', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'Ý'],
            url: 'http://ggt-des.ibge.gov.br/styles/fontes/Animais-IBGE-1.ttf'
        }
    },
    computed: () => {
        /*test(){
            var link = document.createElement('link');
            link.setAttribute('rel', 'stylesheet');
            link.setAttribute('type', 'text/css');
            link.setAttribute('href', 'https://fonts.googleapis.com/css?family=Open+Sans:400italic,400,300,700');
            document.head.appendChild(link);
        }*/
    }
}
</script>

<style>
@font-face {
    font-family: 'Afont';
    src:  url('http://ggt-des.ibge.gov.br/styles/fontes/Animais-IBGE-1.ttf');
    font-weight: normal;
    font-style: normal;
};

.caracterBox{
    width: 100px;
    background-color: red;
}
.fontTest{
  font-family: 'Afont' !important;
  font-size: 50px;
}
</style>