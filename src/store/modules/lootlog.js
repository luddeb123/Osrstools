import * as firebase from 'firebase';

const state = {
    loadedRaidsLoot: [],

    summaryOfAllNormalLoot: [
        {
            items: [
                { item: 20851, amount: 0 },  //pet
                { item: 12073, amount: 0 },  //Clue
                { item: 21046, amount: 0 }, //tablet
                { item: 21027, amount: 0 }, //exp
                { item: 21047, amount: 0 }, //torn
                { item: 560  , amount: 0 },   //Death 
                { item: 565  , amount: 0 },   //Blood 
                { item: 566  , amount: 0 },   //Soul 
                { item: 7936 , amount: 0 },  //pure ess
                { item: 13391, amount: 0 }, //fang
                { item: 13421, amount: 0 }, //saltpeter
                { item: 13573, amount: 0 }, //dynamite
            ]
        },
        {
            items: [
                { item: 451  , amount: 0 },   //rune
                { item: 449  , amount: 0 },   //adamant
                { item: 447  , amount: 0 },   //mith
                { item: 444  , amount: 0 },   //gold
                { item: 442  , amount: 0 },   //silver
                { item: 453  , amount: 0 },   //coal
                { item: 1617 , amount: 0 },  //diamond
                { item: 1619 , amount: 0 },  //ruby
                { item: 1621 , amount: 0 },  //emerald
                { item: 1623 , amount: 0 },  //saphire
                { item: 11212, amount: 0 }, //arrow dragon
                { item: 892  , amount: 0 },   //arrow rune
            ]
        },
        {
            items: [
                { item: 219 , amount: 0 },   //torstol
                { item: 217 , amount: 0 },   //dwarf 
                { item: 2485, amount: 0 },  //lantadyme
                { item: 215 , amount: 0 },   //cadantine
                { item: 3051, amount: 0 },  //snapdragon
                { item: 213 , amount: 0 },   //kwuarm
                { item: 211 , amount: 0 },   //avantoe
                { item: 209 , amount: 0 },   //irit 
                { item: 3049, amount: 0 },  //toadflax
                { item: 207 , amount: 0 },   //ranarr 
                { item: 8782, amount: 0 },  //mahog
                { item: 8780, amount: 0 },  //teak
            ]
        }
    ],

    summaryOfAllUniqueLoot: [
        { item: 21079, amount: 0 },
        { item: 21034, amount: 0 },
        { item: 21000, amount: 0 },
        { item: 21012, amount: 0 },
        { item: 21015, amount: 0 },
        { item: 21018, amount: 0 },
        { item: 21021, amount: 0 },
        { item: 21024, amount: 0 },
        { item: 13652, amount: 0 },
        { item: 21003, amount: 0 },
        { item: 21043, amount: 0 },
        { item: 20997, amount: 0 }
    ],
    totalPets: 0,
    totalPoints: null,
    totalRaids: null,
    avragePoints: null,
    raidMaxPoints: null,
    raidMaxPointKC: null,
    highestLoaded: null,
    lowestLoaded: null,
    dataOfRaidBeingEdited: {},
    highestKC: null
};

export const getters = {
    loadedRaidsLoot() {
        return state.loadedRaidsLoot
    },

    dataOfRaidBeingEdited() {
        return state.dataOfRaidBeingEdited
    },

    normalLoot() {
        return state.summaryOfAllNormalLoot
    },

    uniqueLoot() {
        return state.summaryOfAllUniqueLoot
    }
};

export const mutations = {

    addToLoadedRaids(state, payload) {
        let newLoadedRaids = []
        state.highestLoaded = payload[0].data().KC
        state.lowestLoaded = payload[payload.length - 1].data().KC
        for (let i = 0; i < payload.length; i++) {
            let thisRaid = {
                KC: 0,
                Points: 0,
                Clue: false,
                Pet: false,
                Unique: false,
                Loot: []
            }
            if (payload[i].data().Unique) {
                thisRaid.Loot.push({
                    Item: payload[i].data().Loot[0].Item
                })
            } else {
                for (let index = 0; index < payload[i].data().Loot.length; index++) {
                    thisRaid.Loot.push({
                        Item: payload[i].data().Loot[index].Item,
                        Amount: payload[i].data().Loot[index].Amount
                    })
                }
            }
            thisRaid.KC = payload[i].data().KC
            thisRaid.Points = payload[i].data().Points
            thisRaid.Clue = payload[i].data().Clue
            thisRaid.Pet = payload[i].data().Pet
            thisRaid.Unique = payload[i].data().Unique

            newLoadedRaids.push(thisRaid)
        }
        state.loadedRaidsLoot = newLoadedRaids
    },

    updatePets(state, payload) {
        state.amountPets = payload;
        for (let i = 0; i < state.summaryOfAllNormalLoot.length; i++) {
            for (let item = 0; item < state.summaryOfAllNormalLoot[i]['items'].length; item++) {
                if (state.summaryOfAllNormalLoot[i]['items'][item]['item'] == 20851) {
                    state.summaryOfAllNormalLoot[i]['items'][item].amount = payload
                }
            }
        }
    },

    nextKcWillBe(state, payload) {
        state.highestKC = payload;
    },

    dataOfRaidBeingEdited(state, payload) {
        state.dataOfRaidBeingEdited = payload;
    },

    updateNormalSummary(state, payload) {
        for (let i = 0; i < state.summaryOfAllNormalLoot.length; i++) {
            for (let item = 0; item < state.summaryOfAllNormalLoot[i]['items'].length; item++) {
                if (state.summaryOfAllNormalLoot[i]['items'][item]['item'] == payload.item) {
                    state.summaryOfAllNormalLoot[i]['items'][item].amount = payload.amount
                }
            }
        }
    },
    
    updateUniqueSummary(state, payload) {
        for (let i = 0; i < state.summaryOfAllUniqueLoot.length; i++) {
            if (state.summaryOfAllUniqueLoot[i].item == payload.item) {
                state.summaryOfAllUniqueLoot[i].amount = payload.amount
            }
        }
    },
    
    sumOfPoints(state, payload) {
        let avrage = payload.sumPoints / payload.numberOfRaids
        state.totalPoints = payload.sumPoints;
        state.totalRaids = payload.numberOfRaids;
        state.avragePoints = parseInt(avrage)
        state.raidMaxPoints = payload.maxPoints;
        state.highestKC = payload.highestKC;
        state.clueAmount = payload.clueAmount;
        for (let i = 0; i < state.summaryOfAllNormalLoot.length; i++) {
            for (let item = 0; item < state.summaryOfAllNormalLoot[i]['items'].length; item++) {
                if (state.summaryOfAllNormalLoot[i]['items'][item]['item'] == 12073) {
                    state.summaryOfAllNormalLoot[i]['items'][item].amount = payload.clueAmount
                }
            }
        }
    },
    
    updateThisRaid(state, payload) {
        var batch = firebase.firestore().batch();
        var CoX = firebase.firestore().collection('AdminLootlog').doc(firebase.auth().currentUser.uid).collection('ChambersOfXeric')
        CoX.doc(String(payload.kc)).collection('Loot').get()
            .then(responseFromFB => {
                batch.update(CoX.doc(String(payload.kc)), {
                    Clue: payload.clue,
                    Points: Number(payload.points),
                    Unique: payload.unique,
                    Loot: []
                })
                responseFromFB.forEach(eachResponseFromFB => {
                    batch.delete(CoX.doc(String(payload.kc)).collection('Loot').doc(eachResponseFromFB.id))
                })
                if (!payload.unique) {
                    for (let i = 0; i < payload.items.length; i++) {
                        batch.set(CoX.doc(String(payload.kc)).collection('Loot').doc(), { Item: payload.items[i].item, Amount: payload.items[i].amount })
                    }
                } else {
                    batch.set(CoX.doc(String(payload.kc)).collection('Loot').doc(), { Item: payload.item, Pet: payload.pet })
                }
            })
            .finally(() => {
                batch.commit()
                    .then(function () {
                        if (!payload.unique) {
                            for (let i = 0; i < payload.items.length; i++) {
                                CoX.doc(String(payload.kc)).update({
                                    Loot: firebase.firestore.FieldValue.arrayUnion({
                                        'Item': Number(payload.items[i].item),
                                        'Amount': Number(payload.items[i].amount)
                                    })
                                })
                            }
                        } else {
                            CoX.doc(String(payload.kc)).update({
                                Loot: firebase.firestore.FieldValue.arrayUnion({
                                    'Item': Number(payload.item)
                                }),
                                Pet: payload.pet
                            })
                        }
                    })
            })


    },

    addToCoxLog(state, payload) {
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
            .then(function () {
                if (!payload.unique) {
                    for (let i = 0; i < payload.items.length; i++) {
                        CoX.doc(String(payload.kc)).update({
                            Loot: firebase.firestore.FieldValue.arrayUnion({
                                'Item': Number(payload.items[i].item),
                                'Amount': Number(payload.items[i].amount)
                            })
                        })
                    }
                } else {
                    CoX.doc(String(payload.kc)).update({
                        Loot: firebase.firestore.FieldValue.arrayUnion({
                            'Item': Number(payload.item)
                        }),
                        Pet: payload.pet
                    })
                }
            })
    },

    RemoveThisFromLootlog(state, payload) {
        var batch = firebase.firestore().batch();
        var CoX = firebase.firestore().collection('AdminLootlog').doc(firebase.auth().currentUser.uid).collection('ChambersOfXeric')
        CoX.doc(String(payload)).collection('Loot').get()
            .then(Response => {
                Response.forEach(doc => {
                    batch.delete(CoX.doc(String(payload)).collection('Loot').doc(doc.id))
                })
                batch.delete(CoX.doc(String(payload)))
            })
            .then(() => {
                batch.commit()
            })
    },

    findHighestKC(state, payload) {
        state.highestKC = payload[0].id
    }
};

export const actions = {
    getSummaryOfEverything({ dispatch }) {
        dispatch('getAllNormalLootSummary')
        dispatch('getAllUniqueLootSummary')
        dispatch('getSumOfPoints')
    },

    AddToCoxLog({ commit, dispatch }, payload) {
        commit('addToCoxLog', payload)
        dispatch('updateWhenAdded')

    },

    updateThisRaid({ commit, dispatch }, payload) {
        commit('updateThisRaid', payload)
        dispatch('reloadWhenUpdated')
    },

    RemoveThisFromLootlog({ commit, dispatch }, payload) {
        commit('RemoveThisFromLootlog', payload)
        dispatch('reloadWhenRemoved', payload)
    },

    reloadWhenUpdated({ commit, dispatch, state }) {
        var CoX = firebase.firestore().collection('AdminLootlog').doc(firebase.auth().currentUser.uid).collection('ChambersOfXeric')
        CoX.doc(String(state.loadedRaidsLoot[0].KC)).get()
            .then(returningData => {
                var myQuery = CoX.orderBy('KC', 'desc').startAt(returningData).limit(5)
                myQuery.get()
                    .then(dataFromQuery => {
                        if (dataFromQuery.metadata.hasPendingWrites == true) {
                            dispatch('reloadWhenUpdated')
                        } else {
                            commit('addToLoadedRaids', dataFromQuery['docs'])
                        }
                    })
            })
    },

    reloadWhenRemoved({ commit, dispatch, state }, payload) {
        var CoX = firebase.firestore().collection('AdminLootlog').doc(firebase.auth().currentUser.uid).collection('ChambersOfXeric')
        if (state.loadedRaidsLoot[0].KC == payload) {
            CoX.doc(String(state.loadedRaidsLoot[1].KC)).get()
                .then(returningData => {
                    var myQuery = CoX.orderBy('KC', 'desc').startAt(returningData).limit(5)
                    myQuery.get()
                        .then(dataFromQuery => {
                            if (dataFromQuery.metadata.hasPendingWrites == true) {
                                dispatch('reloadWhenUpdated')
                            } else {
                                commit('addToLoadedRaids', dataFromQuery['docs'])
                                dispatch('findHighestKC')
                            }
                        })
                })
        } else {
            CoX.doc(String(state.loadedRaidsLoot[0].KC)).get()
                .then(returningData => {
                    var myQuery = CoX.orderBy('KC', 'desc').startAt(returningData).limit(5)
                    myQuery.get()
                        .then(dataFromQuery => {
                            if (dataFromQuery.metadata.hasPendingWrites == true) {
                                dispatch('reloadWhenUpdated')
                            } else {
                                commit('addToLoadedRaids', dataFromQuery['docs'])
                                dispatch('findHighestKC')
                            }
                        })
                })
        }
    },

    updateWhenAdded({ commit, dispatch }) {
        var CoX = firebase.firestore().collection('AdminLootlog').doc(firebase.auth().currentUser.uid).collection('ChambersOfXeric')
        var myQuery = CoX.orderBy('KC', 'desc').limit(5)
        myQuery.get()
            .then(dataFromQuery => {
                if (dataFromQuery.metadata.hasPendingWrites == true) {
                    dispatch('updateWhenAdded')
                } else {
                    commit('addToLoadedRaids', dataFromQuery['docs'])
                    dispatch('findHighestKC')
                }
            })
    },

    findHighestKC({ commit }) {
        var CoX = firebase.firestore().collection('AdminLootlog').doc(firebase.auth().currentUser.uid).collection('ChambersOfXeric')
        var myQuery = CoX.orderBy('KC', 'desc').limit(1)
        myQuery.get()
            .then(highestKCData => {
                commit('findHighestKC', highestKCData.docs)
            })
    },

    getSumOfPoints({ commit }) {
        firebase.firestore().collection('AdminLootlog').doc(firebase.auth().currentUser.uid).collection('ChambersOfXeric').get()
            .then(Response => {
                let points = 0;
                let raids = 0;
                let clues = 0;
                let maxRaidPoints = 0;
                let latestKC = 0;
                Response.forEach((doc) => {
                    raids += 1
                    points += doc.data().Points
                    if (doc.data().Clue) {
                        clues += 1
                    }
                    if (doc.data().Points > maxRaidPoints) {
                        maxRaidPoints = doc.data().Points
                    }
                    if (doc.data().KC > latestKC) {
                        latestKC = doc.data().KC
                    }
                })
                commit('sumOfPoints', {
                    sumPoints: points,
                    numberOfRaids: raids,
                    maxPoints: maxRaidPoints,
                    highestKC: latestKC,
                    clueAmount: clues
                })
            })
    },

    getAllNormalLootSummary({ commit }) {
        const items = [
            21027,
            21046,
            3051,
            3049,
            219,
            217,
            215,
            213,
            211,
            209,
            207,
            566,
            565,
            560,
            892,
            1623,
            1621,
            1619,
            1617,
            13421,
            11212,
            8782,
            8780,
            13573,
            453,
            451,
            449,
            447,
            444,
            442,
            7936,
            2485,
            13391,
            21047
        ];
        items.forEach(item => {
            firebase.firestore().collectionGroup('Loot').where("Item", "==", item).get()
                .then(Response => {
                    let amount = 0
                    Response.forEach((doc) => {
                        amount += doc.data().Amount
                    })
                    commit('updateNormalSummary', {
                        "item": item,
                        "amount": amount
                    })
                })
        })
    },

    getAllUniqueLootSummary({ commit }) {
        const items = [
            21079,
            21034,
            21000,
            21012,
            21015,
            21018,
            21021,
            21024,
            13652,
            21003,
            21043,
            20997
        ]
        let numberOfPets = 0

        for (let i = 0; i < items.length; i++) {
            firebase.firestore().collectionGroup('Loot').where("Item", "==", items[i]).get()
                .then(Response => {
                    let amount = 0
                    Response.forEach((doc) => {
                        amount += 1
                        if (doc.data().Pet) {
                            numberOfPets += 1
                        }
                        commit('updatePets', numberOfPets)

                    })
                    commit('updateUniqueSummary', {
                        "item": items[i],
                        "amount": amount
                    })
                })
        }
    },

    initLastFiveRaids({ commit }) {
        var CoX = firebase.firestore().collection('AdminLootlog').doc(firebase.auth().currentUser.uid).collection('ChambersOfXeric')
        var myQuery = CoX.orderBy('KC', 'desc').limit(5)
        myQuery.get()
            .then(dataFromQuery => {
                commit('addToLoadedRaids', dataFromQuery['docs'])
                commit('nextKcWillBe', dataFromQuery['docs'][0].id)
            })
    },

    loadFirstFive({ dispatch }) {
        dispatch('updateWhenAdded')
    },

    loadPrevFive({ commit, state }) {
        var CoX = firebase.firestore().collection('AdminLootlog').doc(firebase.auth().currentUser.uid).collection('ChambersOfXeric')
        CoX.doc(String(state.highestLoaded)).get()
            .then(returningData => {
                var myQuery = CoX.orderBy('KC', 'asc').startAfter(returningData).limit(5)
                myQuery.get()
                    .then(dataFromQuery => {
                        commit('addToLoadedRaids', dataFromQuery['docs'].reverse())
                    })
            })

    },

    loadNextFive({ commit, state }) {
        var CoX = firebase.firestore().collection('AdminLootlog').doc(firebase.auth().currentUser.uid).collection('ChambersOfXeric')
        CoX.doc(String(state.lowestLoaded)).get()
            .then(returningData => {
                var myQuery = CoX.orderBy('KC', 'desc').startAfter(returningData).limit(5)
                myQuery.get()
                    .then(dataFromQuery => {
                        commit('addToLoadedRaids', dataFromQuery['docs'])
                    })
            })
    },

    loadLastFive({ commit }) {
        var CoX = firebase.firestore().collection('AdminLootlog').doc(firebase.auth().currentUser.uid).collection('ChambersOfXeric')
        let LastOne = CoX.orderBy('KC', 'asc').limit(1)
        let fromThisDoc = null
        LastOne.get()
            .then(lastDoc => {
                fromThisDoc = lastDoc.docs[0].id
            }).then(() => {
                CoX.doc(fromThisDoc).get()
                    .then(returningData => {
                        var myQuery = CoX.orderBy('KC', 'asc').startAt(returningData).limit(5)
                        myQuery.get()
                            .then(dataFromQuery => {
                                let docReverse = dataFromQuery.docs.reverse()
                                commit('addToLoadedRaids', docReverse)
                            })
                    })
            })
    },

    FindThisRaidData({ commit }, payload) {
        var CoX = firebase.firestore().collection('AdminLootlog').doc(firebase.auth().currentUser.uid).collection('ChambersOfXeric')
        CoX.doc(String(payload)).get()
            .then(Response => {
                commit('dataOfRaidBeingEdited', Response.data())
            })
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};
