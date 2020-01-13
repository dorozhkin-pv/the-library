import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapVue from 'bootstrap-vue'

import BaseRadio from '@/components/BaseRadio';
import BaseSelect from '@/components/BaseSelect';
import Btable from '@/components/Btable';

Vue.component('BaseRadio', BaseRadio);
Vue.component('BaseSelect', BaseSelect);
Vue.component('Btable', Btable);

Vue.use(BootstrapVue);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')