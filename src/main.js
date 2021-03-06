import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueSimplemde from 'vue-simplemde'
import 'simplemde/dist/simplemde.min.css'
import 'font-awesome/css/font-awesome.min.css'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import browserDetect from 'vue-browser-detect-plugin'
import CKEditor from '@ckeditor/ckeditor5-vue';

Vue.use( CKEditor );
Vue.config.productionTip = false

Vue.use(Vuetify, {
	iconfont: 'fa',
	theme: {
		primary: '#3f51b5',
		secondary: '#b0bec5',
		accent: '#8c9eff',
		error: '#b71c1c'
	}
})

Vue.use(VueSimplemde)
Vue.use(browserDetect)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
