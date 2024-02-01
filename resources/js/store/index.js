import { createApp } from 'vue'
import { createStore } from 'vuex'
import axios from 'axios';
import {collectionUrl} from '../urlCollect'
import {dataDummyCards} from '../DummyDataCard'
import {playStyleDeck} from './PlayStyleDeck/playStyleDeck'
// import {counterStyleDeck} from './CounterStyleDeck/counterStyleDeck'

const urlCounterStyle = `${collectionUrl.baseUrlApi}counter-style-deck-api`

// Create a new store instance.
const store = createStore({

  modules: {
    // ******** still not working , because action another file (playStyleDeck) cannot read action
    // playStyleDeck,
    // counterStyleDeck
  },

  state: {
    counter: 1,
    todoList:[],
    loading: false,
    error: '',
    dataDummyCards: dataDummyCards,
    //********** */ counter style
    listCounterStyle: {}
  },
  mutations: {
    decrementCounter(state,payload){
      state.counter = state.counter-payload;
    },
    incrementCounter(state, payload){
      state.counter = state.counter+payload;
    },
    mutateTodoList: (state, payload)=>{
      state.todoList = payload;
    },
    //********** */ counter style need explode file
    mutateListCounterStyle(state,payload){
      state.listCounterStyle = payload
    }
  },
  actions: {
    getListTodoList({commit},state){
      axios({
        method: 'get',
        url: `${collectionUrl.baseUrl}list`,
      })
      .then(function (response) {
        // state.todoList = response.data
        commit('mutateTodoList',response.data)
        // response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
      });
    },

    //********** */ counter style need explode file
    getListCounterStyle({commit, rootState}){
      rootState.loading = true;
      axios({
          method: 'get',
          url: `${urlCounterStyle}`,
          headers:{
            'Content-Type': "multipart/form-data"
          }
      })
      .then(function(response){
          commit('mutateListCounterStyle',response.data);
          rootState.loading = false;
          // console.log(response.data)
      })
      .catch(function(error) {
          rootState.error = error.message; 
          rootState.loading = false;
      })
    },

    createCounterStyle({commit,rootState}, payload){
      console.log("payload = ")
      console.log(payload)
      rootState.loading = true;
      axios({
          method: 'post',
          url: `${urlCounterStyle}`,
          config:{
            headers:{
              'Content-Type': 'multipart/form-data'
            },
          },
          data:payload
      })
      .then(function(response){
          console.log(response.data)
          // commit('mutateListCounterStyle',response.data);
          rootState.loading = false;
      })
      .catch(function(error) {
          rootState.error = error.message; 
          rootState.loading = false;
      })
    },
  },
  getters: {
    getterTodoList(state){
      return state.todoList;
    },
    getterDataDummyCard (state){
      return state.dataDummyCards;
    },

    //********** */ counter style need explode file
    getterListCounterStyle(state){
      return state.listCounterStyle;
    } 
  },
})


export default store;