import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon,FontAwesomeLayers,FontAwesomeLayersText } from "@fortawesome/vue-fontawesome";

import 'font-awesome/css/font-awesome.min.css'
import router from './routes'

import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
import $ from "jquery"

Vue.config.productionTip = false


library.add(far, fas, fab);
Vue.component('font-awesome-icon',FontAwesomeIcon);
Vue.component('font-awesome-layers',FontAwesomeLayers);
Vue.component('font-awesome-layers-text',FontAwesomeLayersText)


Vue.use(ElementUI)

Vue.use(Viewer, {
	defaultOptions: {
		zIndex: 9999
	}
})



new Vue({
	router,
	$,
	render: h => h(App)
}).$mount('#app')
