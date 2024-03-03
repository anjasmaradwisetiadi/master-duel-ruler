import {collectionUrl} from '../../urlCollect'

const urlCounterStyle = `${collectionUrl.baseUrlApi},counter-style-deck-api`

export const builderDeck = {
    state:{
        dataDeckBuilder: [], 
        detailDeckBuilder: {},
        totalMainDeck : 0,
        totalExtraDeck : 0,
        listDeckBuilder: [],
        dataEditDeckBuilder: {}
    },
    mutations: {
        mutateDataDeckBuilder(state, payload){
            payload.forEach((element, index) => {
                state.dataDeckBuilder.push(element);
            });
        }, 

        mutateDetailDeckBuilder(state, payload){
            state.detailDeckBuilder = payload
        },

        mutateTotalMainDeck(state, payload){
            state.totalMainDeck = payload;
        },

        mutateTotalExtraDeck(state, payload){
            state.totalExtraDeck = payload;
        },

        mutateGetTableDeckBuilder(state, payload){
            state.listDeckBuilder = payload;
        },

        mutateEditDeckBuilder(state, payload){
            state.dataEditDeckBuilder = payload;
        }
    }, 
    action:{

    },
    getters:{
        getterdataDeckBuilderMainDeck(state){
            let mainDeckCollect = state.dataDeckBuilder.filter((element) => {
                if(element.column_deck === 'main deck'){
                    return element;
                }
            });
            return mainDeckCollect;
        },
        getterdataDeckBuilderExtraDeck(state){
            let extraDeckCollect = state.dataDeckBuilder.filter((element) => {
                if(element.column_deck === 'extra deck'){
                    return element;
                }
            });
            return extraDeckCollect;
        },
        getterTotalMainDeck(state){
            return state.totalMainDeck;
        },
        getterTotalExtraDeck(state){
            return state.totalExtraDeck;
        },
        getterListDeckBuilder(state){
            return state.listDeckBuilder;
        },
        getterDetailDeckBuilder(state){
            return state.detailDeckBuilder;
        },
        getterDataEditDeckBuilder(state){
            return state.dataEditDeckBuilder;
        }
    }
}