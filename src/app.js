import Vue from 'vue'
import VueRouter from 'vue-router'

import MainMenu from './components/menu/main/main-menu.vue'
import Dashboard from './components/dashboard/dashboard.vue'
import Explore from './components/explore/explore.vue'
import Search from './components/search/search.vue'
import History from './components/history/history.vue'
import Settings from './components/settings/settings.vue'

import SimpleSearch from './components/simple-search/simple-search.vue'

Vue.use(VueRouter)

Vue.component(MainMenu.name, MainMenu)
Vue.component(Dashboard.name, Dashboard)
Vue.component(Explore.name, Explore)
Vue.component(Search.name, Search)
Vue.component(History.name, History)
Vue.component(Settings.name, Settings)

Vue.component(SimpleSearch.name, SimpleSearch)

const routes = [
  { path: "", component: Dashboard },
  { path: "/dashboard", component: Dashboard },
  { path: "/explore", component: Explore },
  { path: "/search", component: Search },
  { path: "/history", component: History },
  { path: "/settings", component: Settings },
]

const router = new VueRouter({routes})

export default {
  router,
  name: 'app'
}
