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

                        <h1 class="fontTest"> {{char}} </h1>
                        <v-card-title> {{char}} </v-card-title>
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
            colorTest: 'green',
            fontName: '',
            hexa: '&#x41;',
            caractersList: ['A', 'a', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'Ý'],
            url: 'http://ggt-des.ibge.gov.br/styles/fontes/Animais-IBGE-1.ttf'
        }
    },
    methods: {
        testFontAdd(){
            var junction_font = new FontFace('Junction Regular', 'url(fonts/junction-regular.woff)');
            junction_font.load().then(function(loaded_face) {
                document.fonts.add(loaded_face);
                document.body.style.fontFamily = '"Junction Regular", Arial';
            }).catch(function(error) {
                console.log(error)
            });
        }
    }
}
</script>

<style scoped>
@font-face {
    font-family: 'Afont';
    src:  url('http://ggt-des.ibge.gov.br/styles/fontes/Animais-IBGE-1.ttf');
    font-weight: normal;
    font-style: normal;
};

.caracterBox{
    width: 100px;
}
.fontTest{
  font-family: 'Afont' !important;
  font-size: 50px;
}
</style>