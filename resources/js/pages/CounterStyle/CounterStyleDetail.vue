<template>
    <div id="CounterStyleDetail" class="mt-4">
        <div class="row justify-content-center mb-5">
            <div class="col-8 text-center">
                <h3>{{ getDataCounterStyleDeck?.title?.toUpperCase() }}</h3>
            </div>
        </div>
        <div class="row mb-2">
            <div class="col">
                <button type="button" class="button-style-primary mr-2" @click="editCounterStyle(getDataCounterStyleDeck.slug)">Edit Counter Style</button>
                <button type="button" class="button-style-primary" @click="deleteCounterStyle()">Delete Counter Style</button>
            </div>
            <div class="col d-flex justify-content-end">
                <!-- <button type="button" class="button-style-secondary">Add New Counter</button> -->
                <button type="button" class="button-style-secondary" @click="backRoute()">Back</button>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <h5>Information: </h5>
                <div class="card">
                    <div class="card-body" >
                        <div class="information-html" v-html="getDataCounterStyleDeck.information"></div>
                    </div>
                </div>
            </div>
        </div>
        <!-- list image previews -->
        <ListImageHover :getDataYgoProDeck='getDataYgoProDeck' @dataModalCard='dataModalCard' ></ListImageHover>
        <!-- modal image previews -->
        <ImagePreview :openModal="openModal" :dataSelectCards="dataSelectCards" @dataModalCardPreview="dataModalCardPreview"></ImagePreview>
        <LoadingAndAlert :loading="loading" :confirmDelete="confirmDelete" @confirm="methodConfirmDelete" ></LoadingAndAlert>
    </div>
</template>

<script setup>

import { computed, onMounted, ref, reactive, watch } from 'vue';
import LoadingAndAlert from '../../components/LoadingAndAlert.vue';
import ListImageHover from '../../components/ListImageHover.vue';
import ImagePreview from '../../components/ImagePreview.vue';
import {utilize} from '../../utilize/utilize';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import Swal from 'sweetalert2';
const router = useRouter();
const store = useStore();

const openModal = ref(false);
const dataSelectCards = ref(null);
const paramsUrl = ref('');
const confirmDelete = ref(false);

const state = reactive({
    paramsUrl,
    confirmDelete,
}) 

onMounted(()=>{
    const payload = router.currentRoute.value.params.slug
    state.paramsUrl = payload;
    store.dispatch('detailCounterStyle', payload);
})
const getDataCounterStyleDeck= computed(()=>{
    return store.state.detailCounterStyle;
})

const loading = computed(()=>{
    return store.getters.getterStateLoading;
})

const responseGeneral = computed(()=>{
    return store.state.responseGeneral
})

const getDataYgoProDeck = computed(()=>{
    return store.state.dataListChips;
})


watch(getDataCounterStyleDeck, async (newValue, oldValue)=>{
    let collectListChips = '';
    const dataListChips= newValue.list_chips;
    store.state.dataListChips = [];
    for (let dataListChip of dataListChips) {
        dataListChip = utilize.characterEncodingUrl(dataListChip);
        collectListChips += `|${dataListChip}`;
    }
    store.dispatch("getDataListChips",collectListChips);
})

function dataModalCardPreview (value) {
    openModal.value = value;
}

function dataModalCard($event){
    dataSelectCards.value = $event.dataSelectCards;
    openModal.value = $event.openModal;
}

function editCounterStyle(slug){
    router.push(`/counter-style-deck/${slug}/edit`);
}

function deleteCounterStyle(){
    state.confirmDelete = true;
}

function methodConfirmDelete($event){
    if($event){
        store.dispatch('deleteCounterStyle', paramsUrl.value);   
    }
    state.confirmDelete = false;
}

function backRoute(){
    router.push(`/counter-style-deck`);
}

</script>
<style scoped>
    .card{
        color: black;
    }
    .card-style {
        border: 2px solid #03182c;
        max-height: 84px;
    }
    .image-crop-resize{
        max-width: 82px;
        max-height: 80px;
        border: 2px solid black;
    }
    h4{
        font-weight: 600 !important;
        padding: 0px !important;
        margin: 0px !important;
    }
    .date-update{
        font-size: 14px;
    }

</style>

<style>
    .card-body .information-html p{
        padding: 0px !important;
        margin: 0px !important;
    }
</style>