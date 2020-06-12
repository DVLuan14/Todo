import Vue from 'vue';
import router from './router';
import store from './store';
import Main from './views/Main.vue';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  Main,
  render: (h) => h(Main),
}).$mount('#app');
