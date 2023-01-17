import Vue from 'vue'
// import vueConfig from '../vue.config'
import App from './App.vue'
// import NyjButton from '../packages/button.vue'
// import '../packages/fonts/font.scss'

import NyjUI from '../packages'

Vue.config.productionTip = false

// Vue.component(NyjButton.name, NyjButton)
Vue.use(NyjUI)

new Vue({
  render: h => h(App)
}).$mount('#app')
