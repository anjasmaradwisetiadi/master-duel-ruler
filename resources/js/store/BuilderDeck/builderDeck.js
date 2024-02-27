import {collectionUrl} from '../../urlCollect'

const urlCounterStyle = `${collectionUrl.baseUrlApi},counter-style-deck-api`

export const builderDeck = {
    state:{
        dataDeckBuilder: [], 
    },
    mutations: {
        mutateDataDeckBuilder(state, payload){
            payload.forEach((element, index) => {
                return state.dataDeckBuilder.push(element);
            });
        }, 
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
        }
    },
}