import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//Filtes
Vue.filter('to-serch', function(items){
  return items.filter(function(item){
    return item['User Name'].toLowerCase().includes()
  })
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
