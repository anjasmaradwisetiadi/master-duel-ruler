import {collectionUrl} from '../../urlCollect';
import {dataDummyCards} from '../../DummyDataCard';
import store from '../index';
import axios from 'axios';
import router from '../../routes';
import { utilize } from '../../utilize/utilize';
import Swal from 'sweetalert2';

const urlBuilderStyle = `${collectionUrl.baseUrlApi}deck-builder-api`;

export const builderDeckService = {
    async getDeckBuilderDetail(slug){
        store.state.loading = true;
        const tokenAuth = store.getters.getterResponseAuth.token;
        axios({
            method: 'get',
            url: `${urlBuilderStyle}/${slug}`,
            headers:{
                'Authorization': `Bearer ${tokenAuth}`
              },
        })
        .then(function(response){
            return functionReuse.getDataDeckBuilderAnother(response.data.deck_builder);

        })
        .catch(function(error) {
            store.commit('mutateResponsGeneral', error.message);
            store.state.loading = false;
        })   
    },

    async getDataDeckBuilder(payload){
        let nameCard = '';
        let urlApiYugioh = '';
        let numberModulus = 11;
        let dataOrigin = [];
        let nameConvert = '';
        store.state.loading = true;

        // this.getFunction(payload);
        payload.forEach((data, index) => {
            index = index+1;
            if(index%numberModulus !== 0){
                dataOrigin.push(data); 
                // it will make can return value false on root data  lol...     
                // data.name = this.characterEncodingUrl(data.name);
                nameConvert = utilize.characterEncodingUrl(data.name);
                //********* */ make can use many name card but call one time api
                nameCard += `|${nameConvert}`;
                if(payload.length === index && nameCard.length){
                    urlApiYugioh = `${collectionUrl.baseUrlApiYgoProDeck}name=${nameCard}`;
                    this.getApiYuGioh(urlApiYugioh, dataOrigin);
                }
            } else if(index%numberModulus === 0){
                if(index%numberModulus === 0 && nameCard.length){
                    urlApiYugioh = `${collectionUrl.baseUrlApiYgoProDeck}name=${nameCard}`;
                    this.getApiYuGioh(urlApiYugioh, dataOrigin);
                    nameCard = '';
                    dataOrigin = [];
                } 
            }
        }); 
    },

    getApiYuGioh(urlApiYugioh, dataOriginPayload){
        axios({
            method: 'get',
            url: urlApiYugioh,
        })
        .then(function(response){
            let dataJoin = response.data
            dataJoin.data.forEach((data, index)=>{
                dataOriginPayload.some((origin)=>{
                    if(data.name === origin.name){
                        delete origin.name;
                        return dataJoin.data[index] = {...dataJoin.data[index], ...origin};
                    }
                })
            });
            store.commit('mutateDataDeckBuilder', dataJoin.data);
            store.state.loading = false;
        })
        .catch(function(error) {
            store.commit('mutateResponsGeneral', error.message);
            store.state.loading = false;
        })   
    },

    async getTableDeckBuilder(slug){
        store.state.loading = true;
        const tokenAuth = store.getters.getterResponseAuth.token;
        axios({
            method: 'get',
            url: `${urlBuilderStyle}/find/${slug}`,
            headers:{
                'Authorization': `Bearer ${tokenAuth}`
              },
        })
        .then(function(response){
            store.commit('mutateGetTableDeckBuilder', response.data);
            store.state.loading = false;
        })
        .catch(function(error) {
            store.commit('mutateResponsGeneral', error.message);
            store.state.loading = false;
        })   
    },

    async createDeckBuilder(payload){
        const tokenAuth = store.getters.getterResponseAuth.token;
        store.state.loading = true;
        axios({
            method: 'post',
            url: `${urlBuilderStyle}`,
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
    }
}

const functionReuse = {
    getDataDeckBuilderAnother(payload){
        let nameCard = '';
        let urlApiYugioh = '';
        let numberModulus = 11;
        let dataOrigin = [];
        let nameConvert = '';
        store.state.loading = true;

        // this.getFunction(payload);
        payload.forEach((data, index) => {
            index = index+1;
            if(index%numberModulus !== 0){
                dataOrigin.push(data); 
                // it will make can return value false on root data  lol...     
                // data.name = this.characterEncodingUrl(data.name);
                nameConvert = utilize.characterEncodingUrl(data.name);
                //********* */ make can use many name card but call one time api
                nameCard += `|${nameConvert}`;
                if(payload.length === index && nameCard.length){
                    urlApiYugioh = `${collectionUrl.baseUrlApiYgoProDeck}name=${nameCard}`;
                    this.getApiYuGiohAnother(urlApiYugioh, dataOrigin);
                }
            } else if(index%numberModulus === 0){
                if(index%numberModulus === 0 && nameCard.length){
                    urlApiYugioh = `${collectionUrl.baseUrlApiYgoProDeck}name=${nameCard}`;
                    this.getApiYuGiohAnother(urlApiYugioh, dataOrigin);
                    nameCard = '';
                    dataOrigin = [];
                } 
            }
        }); 
    },

    getApiYuGiohAnother(urlApiYugioh, dataOriginPayload){
        store.state.loading = true;
        axios({
            method: 'get',
            url: urlApiYugioh,
        })
        .then(function(response){
            let dataJoin = response.data
            dataJoin.data.forEach((data, index)=>{
                dataOriginPayload.some((origin)=>{
                    if(data.name === origin.name){
                        delete origin.name;
                        dataJoin.data[index] = {...dataJoin.data[index], ...origin};
                    }
                })
            });
            store.commit('mutateDataDeckBuilder', dataJoin.data);
            store.state.loading = false;
        })
        .catch(function(error) {
            store.commit('mutateResponsGeneral', error.message);
            store.state.loading = false;
        })   
    },
}