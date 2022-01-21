import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import itemsStore from "./modules/items";
import lootlog from "./modules/lootlog";
import goalmaker from "./modules/goalmaker";
import shared from "./modules/shared";
// import guides from "./modules/guides";
// import firebase from "../firebase/firebase";

Vue.use(Vuex);
// Vue.use(firebase);

// const debug = process.env.NODE_ENV !== 'production'
const debug = true;

export default new Vuex.Store({
  modules: {
    auth,
    shared,
    itemsStore,
    goalmaker,
    // guides,
    lootlog
  },
  strict: debug,
});
