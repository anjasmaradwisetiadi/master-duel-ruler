
export const playStyleDeck = {
    state:{
        listPlayStyle: {},
        detailPlayStyle: {},
        getEditPlayStyle: {},
    },
    mutations: {
        mutateListPlayStyle(state, payload){
            state.listPlayStyle = payload;
        },
        mutateDetailPlayStyle(state, payload){
            state.detailPlayStyle = payload;
        },
        mutateGetEditPlayStyle(state,payload){
            state.getEditPlayStyle = payload;
        },

    }, 
    action:{
        // testing vuex
        testingVue({rootState}){
            rootState.loading = true;
        }
    },
    getters:{
        getterListCounterStyle(state){
            return state.listPlayStyle;
        }, 
    }
}