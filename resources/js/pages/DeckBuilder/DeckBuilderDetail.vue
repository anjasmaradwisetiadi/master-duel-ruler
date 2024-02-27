<template>
    <div id="DeckBuilderDetail" class="mt-4">
        <div class="row justify-content-center mb-5">
            <div class="col-8 text-center">
                <h1>Khastira</h1>
            </div>
        </div>
        <div class="row mb-2">
            <div class="col">
                <button type="button" class="btn btn-success mr-2" @click="editPlayStyle(getDataPlayStyleDeck?.slug)">Edit Counter Style</button>
                <button type="button" class="btn btn-danger" @click="deletePlayStyle()">Delete Counter Style</button>
            </div>
            <div class="col d-flex justify-content-end">
                <button type="button" class="btn btn-warning" @click="backRoute()">Kembali</button>
            </div>
        </div>
        <div class="row mb-2 mt-4">
            <div class="col">
                <div class="d-flex">
                    <div class="d-flex mr-auto">
                        <h5>Description </h5>
                    </div>
                    <div class="d-flex ml-auto">
                        <small>Updated: {{ dayjs(dataDeckBuilder?.updated_at).format('D-MMM-YYYY')  }}</small>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body" >
                        <div class="information-html" v-html="dataDeckBuilder?.description"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <MainExtraDeck 
                    :data-deck-builder-length="dataDeckBuilderLength" 
                    :data-deck-builder="dataDeckBuilder"
                ></MainExtraDeck>
            </div>
            <div class="col-6">
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, reactive, watch, computed, onMounted, onBeforeMount } from 'vue';
import { builderDeckService } from '../../store/BuilderDeck/builderDeckService';
import {dataDummyDeckBuilder} from '../../DummyDataCard';
import MainExtraDeck from '../../components/MainExtraDeck.vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { utilize } from '../../utilize/utilize';
import { collectionUrl } from '../../urlCollect';
const dayjs = require('dayjs');

const store = useStore();
const router = useRouter();

const dataDeckBuilderLength = dataDummyDeckBuilder.data;
const dataDeckBuilder = dataDummyDeckBuilder.data[1];


onBeforeMount(()=>{
    builderDeckService.getDataDeckBuilder(dataDeckBuilder.deck_builder);
})

function editPlayStyle(slug){
    // router.push(`/play-style-deck/${slug}/edit`);
}

function deletePlayStyle(){
    // state.confirmDelete = true;
}

function createDeckBuilder(){
    console.log("create deckBuilder = ")
}

function backRoute(){
    // router.back();
}


</script>
<style scoped>
    .card{
        color: black;
    }
</style>

<style>
    .card-body .information-html p{
        padding: 0px !important;
        margin: 0px !important;
    }
</style>