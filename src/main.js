import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import Routes from "./routes"
import Fragment from 'vue-fragment';


Vue.use(VueRouter);
Vue.use(Fragment.Plugin);


const router = new VueRouter({
  routes: Routes
})
Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
