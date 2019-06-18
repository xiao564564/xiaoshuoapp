import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import { Tabbar, TabbarItem, Swipe, SwipeItem, Search, Row, Col, Button, Lazyload, Icon, NavBar,Toast} from 'vant';
import qs from 'qs'
import VueAxios from 'vue-axios'


Vue.use(VueAxios,axios)
Vue.config.productionTip = false
Vue.use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(Search).use(Row).use(Col).use(Button).use(Lazyload).use(Icon).use(NavBar).use(Toast);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
