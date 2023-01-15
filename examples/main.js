import Vue from 'vue'
// import vueConfig from '../vue.config'
import App from './App.vue'
import NyjButton from '../packages/button.vue'
import '../packages/fonts/font.scss'

Vue.config.productionTip = false

Vue.component(NyjButton.name, NyjButton)

new Vue({
  render: h => h(App)
}).$mount('#app')
