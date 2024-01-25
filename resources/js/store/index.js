import { createApp } from 'vue'
import { createStore } from 'vuex'
import axios from 'axios';
import {collectionUrl} from '../urlCollect'

// Create a new store instance.
export default createStore({
  state: {
    counter: 1,
    todoList:[]
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
    }
  },
  getters: {
    getterTodoList: (state)=>{
      console.log("getters")
      console.log(state.todoList)
      return state.todoList;
    }
  },
  modules: {

  }
})

