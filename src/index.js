import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  //render: createElement => createElement(App)
  render: function(h) {
    return h(App);
  }
})
