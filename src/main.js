import Vue from 'vue';
import device from 'vue-device-detector';
import App from './App.vue';

import router from './route/router';

import './assets/main.css';

Vue.use(device);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
