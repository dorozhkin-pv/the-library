import Vue from 'vue'
import Vuex from 'vuex'
import library from './library'


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    library
  }
});



