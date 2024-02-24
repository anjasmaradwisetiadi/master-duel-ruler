import {collectionUrl} from '../../urlCollect'
import {dataDummyCards} from '../../DummyDataCard'
// import { useStore } from 'vuex';
// import * as dataVuex from 'vuex';
import store from '../index'
import axios from 'axios';

// const store = useStore();

export const playStyleDeckService = {
    helloWorld() {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve('Hello World!');
          }, 2000);
        });
    },

    async card(){
        // const msg = await helloWorld();
        console.log("store = ");
        console.log(store);
        store.state.loading = true;
        axios({
            method: 'get',
            url: `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Tornado%20Dragon`,
        })
        .then(function(response){
            console.log("response.data.data[0] = ");
            console.log(response.data.data[0])
            store.commit('mutateGetCards', response.data.data[0]); 
            store.state.loading = false;
        })
        .catch(function(error) {
            store.commit('mutateGetCards', error.message); 
            store.state.loading = false;
        })
    }
}