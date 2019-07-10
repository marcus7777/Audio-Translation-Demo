import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'

Vue.config.productionTip = false
import AudioRecorder from 'vue-audio-recorder'

Vue.use(AudioRecorder)

new Vue({
  render: h => h(App),
}).$mount('#app')
