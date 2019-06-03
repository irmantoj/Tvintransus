import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueI18n from 'vue-i18n'
import translations from './lang/translations.js'

Vue.use(VueI18n)
Vue.use(VueRouter)
Vue.use(BootstrapVue)

import About from "./views/About.vue"
import Service from "./views/Service.vue"
import Contacts from "./views/Contacts.vue"
import ForCustomers from "./views/Loads-transportation-for-customers.vue"
import ForCompanies from "./views/Loads-transportation-for-companies.vue"

import ImportantInfo from "./views/Important-info.vue"
import Partload from "./views/Part-load.vue"
import ImportantLoadsInfo from "./views/Important-loads-info.vue"
import Tickets from "./views/Tickets.vue"


const routes = [
  {path:'/about', component: About},
  {path:'/', component: Service},
  {path:'/contacts', component: Contacts},
  {path:'/loads-transportation-for-customers', component: ForCustomers},
  {path:'/loads-transportation-for-companies', component: ForCompanies},

  {path:'/important-info', component: ImportantInfo},
  {path:'/important-loads-info', component: ImportantLoadsInfo},
  {path:'/tickets', component: Tickets},

]

const router = new VueRouter({
  routes,
  mode : "history"
})

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'lt', // set locale
  messages : translations // set locale messages
})

new Vue({
  el: '#app',
  router,
  i18n,
  render: h => h(App)
})
