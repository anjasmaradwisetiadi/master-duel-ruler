<template>
    <div id="CounterStyleDeck" class="mt-4">
        <div class="row justify-content-center mb-5">
            <div class="col-8 ">
                <input type="text" class="form-control" id="Search" aria-describedby="Search" placeholder="Search..."
                    @change="searching($event)"
                >
            </div>
        </div>
        <div class="row mb-2">
            <div class="col">
                <button type="button" class="btn btn-secondary"><a :href="urlCreateDeck" class="add-new-counter-link">Add New Counter</a></button>
            </div>
        </div>
        <div class="row">
            <template v-if="cardListCounterStyle.length">
                <div v-for="(card,index) in cardListCounterStyle" :key="index" class="col-lg-3 col-md-4">
                    <div class="card mb-3 card-style">
                        <a :href="collectionUrl.baseUrlHead+'counter-style-deck/'+card.slug" class="target-style text-black">
                            <div class="row no-gutters">
                            <div class="col-md-4 no-gutters">
                                <img class="image-crop-resize" :src="card.image" :alt="card.name">
                            </div>
                            <div class="col-md-8">
                                <div class="ml-3 text-left">
                                    <h6 class="target-style title-card">{{ card.title }}</h6>
                                    <div>
                                        <span class="date-update text-muted target-style">Update: {{ dayjs(card.updated_at).format('D-MMM-YYYY')  }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </a>
                    </div>
                </div>
            </template>
            <template v-else>
                <div class="col-12 justify-content-center">
                    <h4>Data tidak ditemukan...</h4>
                </div>
            </template>
        </div>
        <LoadingAndAlert :loading="loading" :responseGeneral="responseGeneral"></LoadingAndAlert>
    </div>
</template>

<script setup>

import { computed, ref, onMounted, onBeforeMount, onBeforeUpdate } from 'vue';
import { useRouter } from 'vue-router';
import {collectionUrl} from '../urlCollect';
import LoadingAndAlert from '../components/LoadingAndAlert.vue';
import { useStore } from 'vuex';
const dayjs = require('dayjs');

const store = useStore();
const router = useRouter();

const cardListCounterStyle = computed(()=>{
    return store.getters.getterListCounterStyle
})

let urlCreateDeck = ref(collectionUrl.baseUrlHead+'counter-style-deck/create');

onBeforeMount(()=>{
    store.dispatch('getListCounterStyle')
})

onMounted(()=>{
    // console.log("ini routing testing = ")
    // console.log(router.currentRoute)
})

const loading = computed(()=>{
    return store.getters.getterStateLoading
})

function searching(event){
    const input = event.target.value;
    if(input){
        setTimeout(()=>{
            store.dispatch('getSearchStyleDeck', input)
        }, 800)        
    } else {
        store.dispatch('getListCounterStyle')
    }

}



</script>
<style>
    .card{
        color: black;
    }
    .card-style {
        border: 2px solid #385979;
        max-height: 90px;
        min-height: 90px;
        cursor: pointer;
        
    }
    .image-crop-resize{
        max-width: 90px;
        max-height: 88px;
        min-height: 88px;
        border-right: 2px solid #385979;
    }
    h4{
        font-weight: 600 !important;
        padding: 0px !important;
        margin: 0px !important;
    }
    .date-update{
        font-size: 12px;
    }
    .target-style{
        text-decoration: none !important;
        color: black;
    }
    .target-style:hover{
        text-decoration: none !important;
    }

    .add-new-counter-link{
        text-decoration: none !important;
        color: white;
    }
    .add-new-counter-link:hover{
        text-decoration: none !important;
        color: white;
    }
    .title-card{
        font-weight: bold;
        text-transform: uppercase;
        height: 54px;
    }

</style>