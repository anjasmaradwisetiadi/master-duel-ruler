import {collectionUrl} from '../../urlCollect'

const urlCounterStyle = `${collectionUrl.baseUrlApi},counter-style-deck-api`

export const counterStyleDeck = {
    state:{
        listCounterStyle: {}
    },
    mutations: {
        mutateListCounterStyle(state,payload){
            state.listCounterStyle = payload
        }
    }, 
    action:{
        getListCounterStyle({commit, rootState}){
            axios({
                method: 'get',
                url: `${urlCounterStyle}`,
            })
            .then(function(response){
                console.log(getListCounterStyle)
                console.log(response.data)
                rootState.loading = true;
                commit('mutateListCounterStyle',response.data);
                rootState.loading = false;
                // console.log(response.data)
            })
            .catch(function(error) {
                rootState.error = error.message; 
                rootState.loading = false;
            })
        }
    },
    getters:{
        getterListCounterStyle(state){
            return state.listCounterStyle;
        }
    }
}