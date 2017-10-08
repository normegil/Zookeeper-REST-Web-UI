import Vue from 'vue'
import App from './app.vue'
import ElementUI from 'element-ui'
import '../node_modules/element-ui/lib/theme-default/index.css'
import '../vendor/font-awesome/font-awesome-4.7.0.css'

Vue.use(ElementUI)

new Vue({
  router: App.router,
  el: '#app',
  render: function(h) {
    return h(App);
  }
})
