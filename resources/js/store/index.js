import { createApp } from 'vue'
import { createStore } from 'vuex'
import axios from 'axios';
import {collectionUrl} from '../urlCollect'
import {dataDummyCards} from '../DummyDataCard'
import {playStyleDeck} from './PlayStyleDeck/playStyleDeck'
import router from '../routes'
import Swal from 'sweetalert2';
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
    dataDummyCards: dataDummyCards.data,
    dataSearchCard: {},
    //********** */ login, register, logout need explode file
    responseAuth:{},
    //********** */ counter style
    listCounterStyle: {},
    detailCounterStyle: {},
    getEditCounterStyle: {},
    responseGeneral: {},
    dataListChips:[],
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
    mutateSearchCards(state, payload){
      state.dataSearchCard = payload;
    },

    //********** */ login, register, logout need explode file
    mutateResponsAuth(state, payload){
      state.responseAuth = payload;
    },

    //********** */ counter style need explode file
    mutateListCounterStyle(state,payload){
      state.listCounterStyle = payload;
    },
    mutateDetailCounterStyle(state, payload){
      state.detailCounterStyle = payload;
    },
    mutateGetEditCounterStyle(state,payload){
      state.getEditCounterStyle = payload;
    }, 
    mutateResponsGeneral(state, payload){
      state.responseGeneral = payload;
    },
    mutateGetDataListChips(state, payload){
      state.dataListChips.push(payload) 
    }, 
    mutateRemoveDataListChips(state, payload){
      return state.dataListChips.splice(payload,1); 
    },
  },
  actions: {
    getListTodoList({commit},state){
      axios({
        method: 'get',
        url: `${collectionUrl.baseUrl}list`,
      })
      .then(function (response) {
        commit('mutateTodoList',response.data)
      });
    },

    getSearchCards({commit, rootState}, payload){
      rootState.loading = true;
      const nameCard = payload.name
      const count = payload.num;
      const page = payload.offset;
      axios({
          method: 'get',
          url: `${collectionUrl.baseUrlApiYgoProDeck}fname=${nameCard}&num=${count}&offset=${page}`,
          headers:{
            'Content-Type': "multipart/form-data"
          }
      })
      .then(function(response){
          commit('mutateSearchCards',response.data);
          rootState.loading = false;
      })
      .catch(function(error) {
        commit('mutateResponsGeneral', error.message); 
          rootState.loading = false;
      })
      
    },

    //********** */ login, register, logout need explode file
    register({dispatch}, payload){
      dispatch('auth',{
        data: payload,
        mode: 'register'
      })
    },

    login({dispatch}, payload){
      dispatch('auth',{
        data: payload,
        mode: 'login'
      })
    },
    logout({commit, rootState}){

    },
    auth({commit, rootState}, payload){
      rootState.loading = true;
      let urlAuth = '';
      if (payload.mode === 'login'){
        urlAuth= `${collectionUrl.baseUrlApi}login`;
      } else if(payload.mode === 'register'){
        urlAuth= `${collectionUrl.baseUrlApi}register`;
      }

      axios({
          method: 'post',
          url: urlAuth,
          data: payload.data,
      })
      .then(function(response){
          rootState.loading = false;

          if (payload.mode === 'login'){
            const itemSave = {
              name: response.data.data.name,
              user_name: response.data.data.user_name,
              email:response.data.data.email,
              position: response.data.data.position,
              token: response.data.data.token
            }
            commit('mutateResponsAuth', itemSave);
            localStorage.setItem('user', JSON.stringify(itemSave));
            router.push('/tier-list');
          } else if(payload.mode === 'register'){
            router.push('/login');
          }
      })
      .catch(function(error) {
        commit('mutateResponsAuth', error.message); 
        rootState.loading = false;
      })
    },

    tryAutoLogin({commit}){
      const getUser = localStorage.getItem('user');
      if(getUser){
        const getUserParse = JSON.parse(getUser);
        commit('mutateResponsAuth', getUserParse); 
      }
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
      })
      .catch(function(error) {
        commit('mutateResponsGeneral', error.message); 
          rootState.loading = false;
      })
    },

    createCounterStyle({commit, rootState}, payload){
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
          commit('mutateResponsGeneral', response.data); 
          rootState.loading = false;
      })
      .catch(function(error) {
          commit('mutateResponsGeneral', error.message); 
          rootState.loading = false;
      })
    },

    detailCounterStyle({commit,rootState}, payload){
      rootState.loading = true;
      axios({
          method: 'get',
          url: `${urlCounterStyle}/${payload}`,
      })
      .then(function(response){
          commit('mutateDetailCounterStyle',response.data);
          rootState.loading = false;
      })
      .catch(function(error) {
        commit('mutateResponsGeneral', error.message); 
          rootState.loading = false;
      })
    },

    getEditCounterStyle({commit, rootState},payload){
      rootState.loading =true;
      axios({
          method: 'get',
          url: `${urlCounterStyle}/${payload}/edit`,
      })
      .then(function(response){
          commit('mutateGetEditCounterStyle',response.data);
          rootState.loading = false;
      })
      .catch(function(error) {
        commit('mutateResponsGeneral', error.message); 
          rootState.loading = false;
      })
    },

    editCounterStyle({commit, rootState}, payload){
      const dataForm = payload.form
      rootState.loading =true;
      axios({
          method: 'post',
          url: `${urlCounterStyle}/${payload.slug}`,
          config:{
            headers:{
              'Content-Type': 'multipart/form-data'
            },
          },
          data:dataForm
      })
      .then(function(response){
          commit('mutateResponsGeneral', response.data); 
          rootState.loading = false;
      })
      .catch(function(error) {
          commit('mutateResponsGeneral', error.message); 
          rootState.loading = false;
      })
    },

    deleteCounterStyle({commit,rootState}, payload){
      rootState.loading = true;
      axios({
          method: 'delete',
          url: `${urlCounterStyle}/${payload}`,
      })
      .then(function(response){
          Swal.fire({
            title: "Success Delete ",
            icon: "success"
          })
          .then((success)=>{
              if(success){
                router.push('/counter-style-deck/');
              }
          });
          // commit('mutateResponsGeneral', response.data); 
          rootState.loading = false;
      })
      .catch(function(error) {
          commit('mutateResponsGeneral', error.message); 
          rootState.loading = false;
      })
    },

    getDataListChips({commit,rootState}, payload){
      rootState.loading = true;
      axios({
          method: 'get',
          url: `${collectionUrl.baseUrlApiYgoProDeck}name=${payload}`,
      })
      .then(function(response){
          commit('mutateGetDataListChips', response.data.data[0]); 
          rootState.loading = false;
      })
      .catch(function(error) {
          commit('mutateResponsGeneral', error.message); 
          rootState.loading = false;
      })
    },
    getSearchStyleDeck({commit,rootState}, payload){
      axios({
          method: 'get',
          url: `${urlCounterStyle}/search/${payload}`,
      })
      .then(function(response){
          commit('mutateListCounterStyle', response.data); 
          rootState.loading = false;
      })
      .catch(function(error) {
          commit('mutateResponsGeneral', error.message); 
          rootState.loading = false;
      })
    }
    //********** End */ counter style need explode file
  },
  getters: {
    getterTodoList(state){
      return state.todoList;
    },
    // it need getter for loading because when read action "getListCounterStyle()" always true not false
    getterStateLoading(state){
      return state.loading;
    },
    //********** */ login, register, logout need explode file
    getterResponseAuth(state){
      return state.responseAuth;
    }, 

    //********** */ counter style need explode file
    getterListCounterStyle(state){
      return state.listCounterStyle;
    }, 

    getterDummyData(state){
      return state.dataDummyCards;
    }
  },
})


export default store;