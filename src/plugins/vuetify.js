import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'material-design-icons-iconfont/dist/material-design-icons.css' // icones vuetify

Vue.use(Vuetify);

export default new Vuetify({
  iconfont: 'md',
  theme: {
    primary: '#4caf50',
    secondary: '#03DAC6',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
    textPrimary: '#ffffff'
  }
});
