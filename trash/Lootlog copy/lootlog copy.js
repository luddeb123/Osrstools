import * as firebase from 'firebase';

const state = {
    testArrayPush: [],
    lastRaidsLoots: [],
    firstVisible: null,
    lastVisible: null,
    dataFromStateFirebase: []
};

export const getters = {
    testArrayPush() {
        return state.testArrayPush
    },

    dataFromFirebase() {
        return state.dataFromStateFirebase
    }

};

export const mutations = {
    addThislootToStore(state, payload) {
        console.log(payload)
        console.log(state.dataFromStateFirebase)
        state.dataFromStateFirebase.push(payload)
        console.log(state.dataFromStateFirebase)
    },

    previousVisible(state, payload) {
        state.firstVisible = payload.first;
        state.lastVisible = payload.last;
    },

    updateRaidsLootlog(state, payload) {
        console.log("payload in mutations", payload)

        // state.lastRaidsLoots = payload
    },


    clearLastRaidsLoot(state) {
        state.lastRaidsLoots = []
    },
    addKCtoLog(state, Data) {
        var CoX = firebase.firestore().collection('AdminLootlog').doc(firebase.auth().currentUser.uid).collection('ChambersOfXeric')
        let loot = []
        CoX.doc(Data.KC).collection('Loot').get()
            .then(function (thisRaidLootID) {
                // console.log("thisRaidsLootID: ", thisRaidLootID.docs.id)
                thisRaidLootID.docs.forEach(function (thisLoot) {
                    if (!Data.Unique) {
                        // console.log("uniqeloot: no")
                        // console.log("Item: ", thisLoot.data().Item)
                        // console.log("Amount: ", thisLoot.data().Amount)
                        loot.push({
                            "Item": thisLoot.data().Item,
                            "Amount": thisLoot.data().Amount
                        })
                    } else {
                        // console.log("uniqeloot: yes")
                        // console.log("Item: ", thisLoot.data().Item)
                        // console.log("Pet: ", thisLoot.data().Pet)
                        loot.push({
                            "Item": thisLoot.data().Item,
                            "Pet": thisLoot.data().Pet
                        })
                    }
                })
            })
        state.dataFromStateFirebase.push({
            "killcount": Data.KC,
            "points": Data.Points,
            "Clue": Data.Clue,
            "unique": Data.Unique,
            "items": loot
        })


    }
};

export const actions = {
    getTenFromFirebase({ commit }) {
        var CoX = firebase.firestore().collection('AdminLootlog').doc(firebase.auth().currentUser.uid).collection('ChambersOfXeric')
        commit('clearLastRaidsLoot')
        let newRaidsData = []
        CoX.orderBy('KC', 'desc').limit(10).get()
            .then(function (CoXQuery) {
                let firstDoc = CoXQuery.docs[0].id
                let lastDoc = CoXQuery.docs[CoXQuery.docs.length - 1].id
                // console.log("firstDoc: ", firstDoc)
                // console.log("lastDoc: ", lastDoc)
                CoXQuery.forEach(function (raid) {
                    // let lootData = []
                    // console.log("raiddata id: ", raid.data().KC)
                    let KC = String(raid.data().KC)
                    let Points = raid.data().Points
                    let Clue = raid.data().Clue
                    let Unique = raid.data().Unique

                    commit('addKCtoLog', {
                        "KC": KC,
                        "Points": Points,
                        "Clue": Clue,
                        "Unique": Unique,
                    })
                    // CoX.doc(KC).collection('Loot').get()
                    //     .then(function (thisRaidLootID) {
                    //         // console.log("thisRaidsLootID: ", thisRaidLootID.docs.id)
                    //         thisRaidLootID.docs.forEach(function (thisLoot) {
                    //             if (!raid.data().Unique) {
                    //                 // console.log("uniqeloot: no")
                    //                 // console.log("Item: ", thisLoot.data().Item)
                    //                 // console.log("Amount: ", thisLoot.data().Amount)
                    //                 lootData.push({
                    //                     "Item": thisLoot.data().Item,
                    //                     "Amount": thisLoot.data().Amount
                    //                 })
                    //             } else {
                    //                 // console.log("uniqeloot: yes")
                    //                 // console.log("Item: ", thisLoot.data().Item)
                    //                 // console.log("Pet: ", thisLoot.data().Pet)
                    //                 lootData.push({
                    //                     "Item": thisLoot.data().Item,
                    //                     "Pet": thisLoot.data().Pet
                    //                 })
                    //             }
                    //         })
                    //     })
                    // let thisRaidData = {
                    //     "killcount": raid.data().KC,
                    //     "points": raid.data().Points,
                    //     "Clue": raid.data().Clue,
                    //     "unique": raid.data().Unique,
                    //     "items": lootData
                    // }
                    // console.log("thisRaidData: ", thisRaidData)
                    // newRaidsData.push({
                    //     "killcount": raid.data().KC,
                    //     "points": raid.data().Points,
                    //     "Clue": raid.data().Clue,
                    //     "unique": raid.data().Unique,
                    //     "items": lootData
                    // })
                })
                // commit('addThislootToStore', newRaidsData)
            })
    },

    AddToCoxLog({ commit }, payload) {
        var CoX = firebase.firestore().collection('AdminLootlog').doc(firebase.auth().currentUser.uid).collection('ChambersOfXeric')
        var batch = firebase.firestore().batch();

        batch.set(CoX.doc(payload.kc), { KC: Number(payload.kc), Points: Number(payload.points), Clue: payload.clue, Unique: payload.unique })

        if (!payload.unique) {
            for (let i = 0; i < payload.items.length; i++) {
                batch.set(CoX.doc(payload.kc).collection('Loot').doc(), { Item: payload.items[i].item, Amount: payload.items[i].amount })
            }
        } else {
            batch.set(CoX.doc(payload.kc).collection('Loot').doc(), { Item: payload.item, Pet: payload.pet })
        }
        batch.commit()
            .then(function (Response) {
                console.log(Response)
            })
            .catch(function (err) {
                console.error(err)
            })
    },

    matchItemsInCoxLoot({ commit }) {
        firebase.firestore().collectionGroup('Loot').where("Item", "==", 219).get()
            .then(Response => {

                Response.docChanges().forEach((doc) => {
                    console.log(doc.doc.data())
                })
            })

    },

    getCoxNextTen({ commit, state }) {
        console.log(state.lastVisible)
        var CoX = firebase.firestore().collection('AdminLootlog').doc(firebase.auth().currentUser.uid).collection('ChambersOfXeric')
        CoX.doc(state.lastVisible).get()
            .then(function (Response) {
                let startAfterDoc = Response
                console.log("startAfterDoc: ", startAfterDoc)
                CoX.orderBy('KC', 'desc').startAfter(startAfterDoc).limit(10).get()
                    .then(function (newResponse) {
                        console.log(newResponse.docs)
                    })
            })
    },

    getCoxPreviousTen({ commit, state }) {
        console.log(state.lastVisible)
        var CoX = firebase.firestore().collection('AdminLootlog').doc(firebase.auth().currentUser.uid).collection('ChambersOfXeric')
        CoX.doc(state.firstVisible).get()
            .then(function (Response) {
                let endBeforeDoc = Response
                console.log("startAfterDoc: ", endBeforeDoc)
                CoX.orderBy('KC', 'desc').endBefore(endBeforeDoc).limit(10).get()
                    .then(function (newResponse) {
                        console.log(newResponse.docs)
                    })
            })
    },


    actionAddToTestArrayPush({ commit }, payload) {
        console.log(payload)
        let arrayMedData = [
            {
                "id": 11,
                "Other": 33
            },
            {
                "id": 44,
                "Other": 313
            }
        ]
        console.log(arrayMedData)

        let dataToSent = {
            id: payload + 1,
            data: arrayMedData

        }
        console.log(dataToSent)
        commit('addToTestArrayPush', dataToSent)
    },

    getLastTenRaids({ commit }) {
        commit('getFirstTenRaidsTest')

        //does not work
        //does not work
        //does not work
        //does not work
        //does not work
        // var CoX = firebase.firestore().collection('AdminLootlog').doc(firebase.auth().currentUser.uid).collection('ChambersOfXeric')
        // CoX.orderBy('KC', 'desc').limit(10).get()
        //     .then(function (CoXQuery) {
        //         commit('clearLastRaidsLoot')
        //         let lastFewRaidsData = [];
        //         let firstDoc = CoXQuery.docs[0].id
        //         let lastDoc = CoXQuery.docs[CoXQuery.docs.length - 1].id
        //         commit('previousVisible', {
        //             first: firstDoc,
        //             last: lastDoc
        //         })
        //         CoXQuery.forEach(function (raid) {
        //             let thisRaidLoot = []
        //             CoX.doc(raid.id).collection('Loot').get()
        //                 .then(function (docNamesInLoot) {
        //                     if (raid.data().Unique) {
        //                         console.log("it has a unique")
        //                         docNamesInLoot.forEach(function (lootDoc) {
        //                             let loot = {
        //                                 Item: lootDoc.data().Item,
        //                                 Pet: lootDoc.data().Pet
        //                             }
        //                             thisRaidLoot.push(loot)
        //                         })
        //                     } else {
        //                         console.log("it does not have a unique")
        //                         docNamesInLoot.forEach(function (lootDoc) {
        //                             let loot = {
        //                                 Item: lootDoc.data().Item,
        //                                 Amount: lootDoc.data().Amount
        //                             }
        //                             thisRaidLoot.push(loot)
        //                         })
        //                     }
        //                 })
        //             // console.log("this is rakid loot: ", thisRaidLoot)
        //             let thisRaidData = {
        //                 "killcount": raid.data().KC,
        //                 "points": raid.data().Points,
        //                 "unique": raid.data().Unique,
        //                 "items": thisRaidLoot,
        //                 "clue": raid.data().Clue
        //             }
        //             console.log(lastFewRaidsData)
        //             lastFewRaidsData.push({
        //                 "killcount": raid.data().KC,
        //                 "points": raid.data().Points,
        //                 "unique": raid.data().Unique,
        //                 "items": thisRaidLoot,
        //                 "clue": raid.data().Clue
        //             })
        //             console.log("data of the raid: ", thisRaidData)
        //             // commit('addToLastRaidsLoot', thisRaidData)
        //         })
        //         commit('addToLastRaidsLoot', lastFewRaidsData)
        //         // console.log("This is data from last few raids:", lastFewRaidsData)
        //         // commit('updateRaidsLootlog', lastFewRaidsData)
        //     })




        //does not work
        //does not work
        //does not work
        //does not work
        //does not work
        // docNamesInLoot.forEach(function (lootDoc) {
        //         thisRaidLoot.push({
        //             id: lootDoc.data().Item,
        //             pet: lootDoc.data().Pet
        //         })
        //         thisRaidLoot.push({
        //             id: lootDoc.data().Item,
        //             amount: lootDoc.data().Amount
        //         })
        // })
        // thisRaidData = {
        //     killcount: raid.data().KC,
        //     points: raid.data().Points,
        //     unique: raid.data().Unique,
        //     items: thisRaidLoot,
        //     clue: raid.data().Clue
        // }
        // console.log(thisRaidData)
        // lastFewRaidsData.push(thisRaidData)
        // })
        // .catch(() => {
        //     commit('lastRaidsLootsUpdate', lastFewRaidsData)
        //     console.log("error in get loot")
        // })
        // })


    },

    getLastTenRaidsFucked({ commit }) {
        var CoX = firebase.firestore().collection('AdminLootlog').doc(firebase.auth().currentUser.uid).collection('ChambersOfXeric')
        var firstTen = CoX.orderBy('KC', 'desc').limit(10)
        return firstTen.get().then(function (documentSnapshots) {
            var lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1];
            console.log("last", lastVisible);
            documentSnapshots.forEach(doc => {
                CoX.doc(doc.id).collection('Loot').get()
                    .then(newDoc => {
                        newDoc.forEach(thing => {
                            console.log(thing.data())
                        })
                    })
            })
            var next = CoX.orderBy('KC', 'desc').startAfter(lastVisible).limit(10)
            return next.get().then(function (newDocSnapshot) {
                newDocSnapshot.forEach(newDocTwo => {
                    CoX.doc(newDocTwo.id).collection('Loot').get()
                        .then(newDocTwo => {
                            newDocTwo.forEach(newThing => {
                                console.log(newThing.data())
                            })
                        })
                })
            })
        })
    }

};

export default {
    state,
    getters,
    mutations,
    actions
};
