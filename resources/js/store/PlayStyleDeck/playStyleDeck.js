
export const playStyleDeck = {
    state:{
        getCard:{}
    },
    mutations: {
        mutateGetCards(state, payload){
            console.log("get mutate card = ")
            console.log(payload)
            state.getCard = payload;
        }
    }, 
    action:{
        // testing vuex
        testingVue({rootState}){
            rootState.loading = true;
        }
    },
    getters:{
        getterGetCard(state){
            return state.getCard
        }
    }
}