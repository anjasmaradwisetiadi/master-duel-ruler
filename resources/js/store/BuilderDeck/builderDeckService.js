import {collectionUrl} from '../../urlCollect';
import {dataDummyCards} from '../../DummyDataCard';
import store from '../index';
import axios from 'axios';
import router from '../../routes';
import { utilize } from '../../utilize/utilize';
import Swal from 'sweetalert2';

const urlBuilderStyle = `${collectionUrl.baseUrlApi}builder-deck-api`;

export const builderDeckService ={

    async getDataDeckBuilder(payload){
        let nameCard = '';
        let urlApiYugioh = '';
        let numberModulus = 4;
        let dataOrigin = []
        store.state.loading = true;

        payload.forEach((data, index) => {
            index = index+1;
            if(index%numberModulus !== 0){               
                data.name = utilize.characterEncodingUrl(data.name);
                nameCard += `|${data.name}`;
                dataOrigin.push(data);
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
        store.state.loading = false;
    },

    getApiYuGioh(urlApiYugioh, dataOriginPayload){
        axios({
            method: 'get',
            url: urlApiYugioh,
        })
        .then(function(response){
            let dataJoin = response.data
            dataJoin.data.forEach((data, index)=>{
                // console.log("dataOriginPayload[index].name");
                // console.log(dataOriginPayload[index]);
                // console.log("data.name ");
                // console.log(data);
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
}