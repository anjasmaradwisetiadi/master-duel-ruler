import {collectionUrl} from '../../urlCollect'

const urlCounterStyle = `${collectionUrl.baseUrlApi},counter-style-deck-api`

export const builderDeck = {
    state:{
        dataDeckBuilder: [], 
        totalMainDeck : 0,
        totalExtraDeck : 0,
    },
    mutations: {
        mutateDataDeckBuilder(state, payload){
            payload.forEach((element, index) => {
                state.dataDeckBuilder.push(element);
            });
        }, 

        mutateTotalMainDeck(state, payload){
            console.log("mutateTotalMainDeck = ");
            console.log(payload)
            state.totalMainDeck = payload;
        },

        mutateTotalExtraDeck(state, payload){
            state.totalExtraDeck = payload;
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
        }
    },
}