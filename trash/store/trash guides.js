import * as firebase from 'firebase';

const state = {
    Guides: []

};

export const getters = {
    loadedGuides() {
        return state.Guides
    }

};

export const mutations = {
    addGuideToState(state, newGuide) {
        // let tempGuide = {
        //     id: newGuide.id,
        //     name: newGuide.name,
        //     description: newGuide.description,
        // }
        state.Guides.push(newGuide)
    },
    clearGuideToState(state) {
        state.Guides = []
    }


};

export const actions = {
    GetAllGuides({ commit }) {
        commit('clearGuideToState')
        firebase.firestore().collection('Guides').get()
            .then(snapshot => {
                snapshot.forEach((doc) => {
                    // newGuide = {
                    //     id: doc.id,
                    //     name: doc.data().GuideName,
                    //     guide: doc.data().Guide
                    // }
                    commit('addGuideToState', {
                        id: doc.id,
                        Title: doc.data().Title,
                        Description: doc.data().Description,
                        GuideContent: doc.data().GuideContent,
                        Requirements: doc.data().Requirements,
                        GuideCategory: doc.data().GuideCategory,
                    })
                    // console.log(doc.id, '=>', doc.data())
                })
            })
            .catch(() => {
                // console.log(error)
            })
    },
    publiciseNewGuide({ commit }, guideData) {
        const Guide = {
            Title: guideData.Title,
            GuideContent: guideData.GuideContent,
            Description: guideData.Description,
            Requirements: guideData.Requirements,
            GuideCategory: guideData.GuideCategory,

        }
        firebase.firestore().collection('Guides').add(Guide)
            .then((response) => {
                console.log("you got a response")
                console.log(response)
                console.log(response.id)
            })
            .catch((error) => {
                console.log("you got an error")
                console.log(error)
            })
        console.log(Guide)
        console.log("korv")
        console.log(guideData)
    },

};

export default {
    state,
    getters,
    mutations,
    actions,
};
