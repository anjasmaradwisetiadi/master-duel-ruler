import {collectionUrl} from '../../urlCollect'
import {dataDummyCards} from '../../DummyDataCard'
// import { useStore } from 'vuex';
// import * as dataVuex from 'vuex';
import store from '../index'
import axios from 'axios';
import router from '../../routes'
import Swal from 'sweetalert2';

const urlPlayStyle = `${collectionUrl.baseUrlApi}play-style-deck-api`

export const playStyleDeckService = {
    async getListPlayStyle(){
        const tokenAuth = store.getters.getterResponseAuth.token;
        store.state.loading = true;
        axios({
            method: 'get',
            url: `${urlPlayStyle}`,
            headers:{
              'Content-Type': "multipart/form-data",
              'Authorization': `Bearer ${tokenAuth}`
            },
        })
        .then(function(response){
            store.commit('mutateListPlayStyle',response.data);
            store.state.loading = false;
        })
        .catch(function(error) {
            store.commit('mutateResponsGeneral', error.message); 
            store.state.loading = false;
        })
    },

    async createPlayStyle(payload){
        const tokenAuth = store.getters.getterResponseAuth.token;
        store.state.loading = true;
        axios({
            method: 'post',
            url: `${urlPlayStyle}`,
            headers:{
              'Authorization': `Bearer ${tokenAuth}`,
              'Content-Type': 'multipart/form-data',
            },
            data:payload
        })
        .then(function(response){
            store.commit('mutateResponsGeneral', response.data); 
            store.state.loading = false;
        })
        .catch(function(error) {
            store.commit('mutateResponsGeneral', error.message); 
            store.state.loading = false;
        })
    },

    async detailPlayStyle(payload){
        console.log("payload detailPlayStyle =");
        console.log(payload);
        const tokenAuth = store.getters.getterResponseAuth.token;
        store.state.loading = true;
        axios({
            method: 'get',
            url: `${urlPlayStyle}/${payload}`,
            headers:{
              'Authorization': `Bearer ${tokenAuth}`
            }
        })
        .then(function(response){
            store.commit('mutateDetailPlayStyle',response.data);
            store.state.loading = false;
        })
        .catch(function(error) {
            store.commit('mutateResponsGeneral', error.message); 
            store.state.loading = false;
        })
    },

    async getEditPlayStyle(payload){
        const tokenAuth = store.getters.getterResponseAuth.token;
        store.state.loading =true;
        axios({
            method: 'get',
            url: `${urlPlayStyle}/${payload}/edit`,
            headers:{
              'Authorization': `Bearer ${tokenAuth}`
            }
        })
        .then(function(response){
            store.commit('mutateGetEditPlayStyle',response.data);
            store.state.loading = false;
        })
        .catch(function(error) {
            store.commit('mutateResponsGeneral', error.message); 
            store.state.loading = false;
        })
    },

    async editPlayStyle(payload){
        const tokenAuth = store.getters.getterResponseAuth.token;
        const dataForm = payload.form
        store.state.loading =true;
        axios({
            method: 'post',
            url: `${urlPlayStyle}/${payload.slug}`,
            headers:{
              'Authorization': `Bearer ${tokenAuth}`,
              'Content-Type': 'multipart/form-data',
            },
            data:dataForm
        })
        .then(function(response){
            store.commit('mutateResponsGeneral', response.data); 
            store.state.loading = false;
        })
        .catch(function(error) {
            store.commit('mutateResponsGeneral', error.message); 
            store.state.loading = false;
        })
    },

    async deletePlayStyle( payload){
        const tokenAuth = store.getters.getterResponseAuth.token;
        store.state.loading = true;
        axios({
            method: 'delete',
            url: `${urlPlayStyle}/${payload}`,
            headers:{
              'Authorization': `Bearer ${tokenAuth}`
            }
        })
        .then(function(){
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
            store.state.loading = false;
        })
        .catch(function(error) {
            store.commit('mutateResponsGeneral', error.message); 
            store.state.loading = false;
        })
    },
    getSearchPlayStyleDeck(payload){
        const tokenAuth = store.getters.getterResponseAuth.token;
        axios({
            method: 'get',
            url: `${urlPlayStyle}/search/${payload}`,
            headers:{
              'Authorization': `Bearer ${tokenAuth}`
            }
        })
        .then(function(response){
            store.commit('mutateListPlayStyle', response.data); 
            store.state.loading = false;
        })
        .catch(function(error) {
            store.commit('mutateResponsGeneral', error.message); 
            store.state.loading = false;
        })
      }
}