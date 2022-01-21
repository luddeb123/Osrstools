import * as firebase from 'firebase';

const state = {
    LoadedGoals: [],
    myLoadedGoals: [],
    allItemsFromOsrsbox: {}
};

export const getters = {
    publicLoadedGoals() {
        return state.LoadedGoals
    },

    myLoadedGoals() {
        return state.LoadedGoals
    },

    loadedGoal(state) {
        return (goalID) => {
            return state.LoadedGoals.find((goalData) => {
                return goalData.Id === goalID
            })
        }
    }
};

export const mutations = {
    setLoadedGoals(state, payload) {
        state.LoadedGoals = payload
    }
};

export const actions = {
    loadGoalsFromFirebase({ commit }) {
        var goalRef = firebase.firestore().collection('Goals').doc(firebase.auth().currentUser.uid).collection('myGoals');

        goalRef.get()
            .then((data) => {
                const goals = []
                data.forEach(goal => {
                    goals.push({
                        Id: goal.id,
                        Title: goal.data().Title,
                        Description: goal.data().Description,
                        Goals: goal.data().Goals,
                        Dimensions: goal.data().Dimensions,
                    })
                })
                commit('setLoadedGoals', goals)
            })
    },

    addGoalToFirebase(payload) {
        var goalRef = firebase.firestore().collection('Goals').doc(firebase.auth().currentUser.uid).collection('myGoals');
        let goalsData = []
        for (let x = 0; x < payload.data.length; x++) {
            for (let y = 0; y < payload.data[x].length; y++) {
                let object = {
                    item: payload.data[x][y].item,
                    otherType: payload.data[x][y].otherType,
                    goal: payload.data[x][y].goal,
                    xPos: x,
                    yPos: y
                }
                goalsData.push(object)
            }
        }

        let width = payload.width
        let height = payload.height

        var newDocData = {
            Title: payload.title,
            Dimensions: {
                Width: width,
                Height: height
            },
            Description: "test description",
            Goals: goalsData
        }

        // console.log(newDocData)
        goalRef.doc().set(newDocData)
            .then(() => {
                // console.log("yay it worked")
            })
            .catch(function (error) {
                return error
                // console.error("Error writing document: ", error);
            });
    },
};

export default {
    state,
    getters,
    mutations,
    actions
};
