// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import storeTodo from './store/store'
//import router from './router'


Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		storeTodo
	}
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    // router,
    components: { App },
    template: '<App/>'
})
