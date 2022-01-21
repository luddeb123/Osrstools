import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import database from './firebase/firebase';


Vue.config.productionTip = false

let app

const initialize = () => {
  if (!app) {
    app = new Vue({
      router,
      store,
      vuetify,
      render: h => h(App),
    }).$mount('#app')
  }
}

database.auth().onAuthStateChanged(user => {
  if (user) {
    store.commit('setUser', {
      name: user.displayName,
      email: user.email,
      emailVerified: user.emailVerified,
      uid: user.uid,
    })
  } else {
    store.commit('setUser', null)
  }
  initialize()
})