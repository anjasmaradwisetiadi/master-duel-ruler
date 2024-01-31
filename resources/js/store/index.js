import { createApp } from 'vue'
import { createStore } from 'vuex'
import axios from 'axios';
import {collectionUrl} from '../urlCollect'
import {dataDummyCards} from '../DummyDataCard'
import {playStyleDeck} from './PlayStyleDeck/playStyleDeck'
import {counterStyleDeck} from './CounterStyleDeck/counterStyleDeck.js'

const urlCounterStyle = `${collectionUrl.baseUrlApi}counter-style-deck-api`

// Create a new store instance.
export default createStore({
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
      console.log("state.todoList mutate = ")
      console.log(state.todoList);
    },
    //********** */ counter style
    mutateListCounterStyle(state,payload){
      state.listCounterStyle = payload
  }
  },
  actions: {
    getListTodoList({commit},state){
      console.log("collectionUrl = ")
      console.log(`${collectionUrl.baseUrl},list`)
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

    // getListCounterStyleDeck({commit}, state){
    //   axios({
    //     method: 'get',
    //     url: `${collectionUrl.baseUrl}list`,
    //   })
    //   .then(function (response) {
    //     // state.todoList = response.data
    //     commit('mutateTodoList',response.data)
    //     // response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
    //   });
    // }

    //********** */ counter style
    getListCounterStyle({commit, rootState}){
      console.log('`${urlCounterStyle}` = ')
      console.log(`${urlCounterStyle}`)
      rootState.loading = true;
      axios({
          method: 'get',
          url: `${urlCounterStyle}`,
      })
      .then(function(response){
          console.log("getListCounterStyle = ")
          console.log(response.data)

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
  getters: {
    getterTodoList: (state)=>{
      console.log("getters")
      console.log(state.todoList)
      return state.todoList;
    },
    getterDataDummyCard: (state)=>{
      return state.dataDummyCards;
    },

    //********** */ counter style
    getterListCounterStyle(state){
      return state.listCounterStyle;
    } 
  },
  modules: {
    // playStyleDeck,
    // counterStyleDeck
  }
})

