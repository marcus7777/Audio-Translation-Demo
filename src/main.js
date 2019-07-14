import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'

Vue.config.productionTip = false
import AudioRecorder from 'vue-audio-recorder'
import { firestorePlugin } from 'vuefire'

Vue.use(firestorePlugin)
Vue.use(AudioRecorder)

new Vue({
  render: h => h(App),
}).$mount('#app')
