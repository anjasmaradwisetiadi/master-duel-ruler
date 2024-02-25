
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
            console.log("mutate getEditPlayStyle = ");
            console.log(payload);
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
        getterListPlayStyle(state){
            return state.listPlayStyle;
        }, 

        getterDetailPlayStyle(state){
            return state.detailPlayStyle;
        }, 

        getterEditPlayStyle(state){
            return state.getEditPlayStyle;
        }
    }
}