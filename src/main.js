import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.config.productionTip = false


// Vue.directive('pin', {
//   bind: function (el, binding) {
//     el.style.position = 'fixed'
//     el.style.top = binding.value + 'px'
//     el.style.color = "red"

//   }
// })

Vue.directive('changeColorDir', {
  bind: function (el, binding) {

    el.style.fontSize = "20px";
    if (!binding.value)  {
      el.style.color = 'yellow';
    } else {
      el.style.color = binding.value;
    }
   
  }
});




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')




