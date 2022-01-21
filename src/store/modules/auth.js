// import firebase from "../../firebase/firebase";
import router from "../../router";
import * as firebase from 'firebase';



const state = {
  user: null
};

export const getters = {
  user: state => {
    return state.user
  },
  admin: state => {
    // let admin = true
    // firebase.firestore().collection('Users').doc('Admins').get()
    //   .then(res => {
    //     console.log(res.data().Admin)
    //     console.log(res.data().Admin.length)
    //     for (let i = 0; i < res.data().Admin.length; i++) {
    //       console.log(res.data().Admin[i], state.user.uid)
    //       if (res.data().Admin[i] == state.user.uid) {
    //         admin = true
    //       }
    //     }
    //     console.log(admin)
    //   })
    if (state.user) {
      if (state.user.uid == "xxxxxxxxxxxxxxxxxxxxxxxxx"){
        return true
      }
    }
  }


};

export const mutations = {
  setUser(state, payload) {
    state.user = payload
  },

  updateAccountAction(state, newValue) {
    state.accountAction = newValue;
  }
};

export const actions = {
  signUserUp({ commit }, payload) {
    commit('setLoading', true)
    commit('clearauthError')
    firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(() => {
        const newUserDiarys = [
          "Ardougne",
          "Desert",
          "Falador",
          "Fremennik",
          "Kandarin",
          "Karamja",
          "Kourend & Kebos",
          "Lumbridge & Draynor",
          "Morytania",
          "Varrock",
          "Western Provinces",
          "Wilderness"
        ]
        const newUserClues = [
          "beginner",
          "easy",
          "medium",
          "hard",
          "elite",
          "master",
        ]
        const newDiaryValue = {
          "level": 0
        }
        const newClueValue = {
          "Completed": 0
        }
        for (let i = 0; i < newUserDiarys.length; i++) {
          firebase.firestore().collection('CollectionlogUserData').doc(firebase.auth().currentUser.uid).collection('Diaries').doc(newUserDiarys[i]).set(newDiaryValue)
        }
        for (let i = 0; i < newUserClues.length; i++) {
          firebase.firestore().collection('CollectionlogUserData').doc(firebase.auth().currentUser.uid).collection('Cluescrolls').doc(newUserClues[i]).set(newClueValue)
        }
        firebase.firestore().collection('CollectionlogUserData').doc(firebase.auth().currentUser.uid).collection('ItemsObtained').doc('Items').set({
          "Items": []
        })
        firebase.firestore().collection('CollectionlogUserData').doc(firebase.auth().currentUser.uid).set({
          Email: payload.email,
        })
        // firebase.firestore().collection('CollectionlogUserData').doc(firebase.auth().currentUser.uid).set({
        //   Items: [],
        //   Cluescrolls: []
        // })
        commit('setLoading', false)
        var user = firebase.auth().currentUser;
        commit('setUser', {
          name: user.displayName,
          email: user.email,
          emailVerified: user.emailVerified,
          uid: user.uid,
        })
      }
      )
      .catch((error) => {
        commit('setLoading', false)
        commit('setauthError', error.message)
      })
  },
  signUserIn({ commit }, payload) {
    commit('setLoading', true)
    commit('clearauthError')
    firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(() => {
        commit('setLoading', false)
        var user = firebase.auth().currentUser;
        commit('setUser', {
          name: user.displayName,
          email: user.email,
          emailVerified: user.emailVerified,
          uid: user.uid,
        })
        router.push('/')
      }
      )
      .catch((error) => {
        commit('setLoading', false)
        commit('setauthError', error.message)
      })
  },

  signUserOut({ commit }) {
    firebase.auth().signOut()
      .then(() => {
        router.push('/')
      })
    commit("updateAccountAction", null)
  },

  updateAccountAction({ commit }, newValue) {
    commit("updateAccountAction", newValue)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
};
