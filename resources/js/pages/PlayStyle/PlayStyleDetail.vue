<template>
    <div id="PlayStyleDetail" class="mt-4">
        <div class="row justify-content-center mb-5">
            <div class="col-8 text-center">
                <h3>{{ getDataPlayStyleDeck?.title?.toUpperCase() }}</h3>
            </div>
        </div>
        <div class="row mb-2">
            <div class="col">
                <button type="button" class="button-style-primary mr-2" @click="editPlayStyle(getDataPlayStyleDeck?.slug)">Edit Play Style</button>
                <button type="button" class="button-style-primary" @click="deletePlayStyle()">Delete Play Style</button>
            </div>
            <div class="col d-flex justify-content-end">
                <button type="button" class="button-style-secondary" @click="backRoute()">Kembali</button>
            </div>
        </div>
        <div class="row mb-2 mt-4">
            <div class="col">
                <h5>Information </h5>
                <div class="card">
                    <div class="card-body" >
                        <div class="information-html" v-html="getDataPlayStyleDeck?.information"></div>
                    </div>
                </div>
            </div>
        </div>
        <!-- list image previews -->
        <ListImageHover :getDataYgoProDeck='getDataYgoProDeck' @dataModalCard='dataModalCard' ></ListImageHover>
        <!-- modal image previews -->
        <ImagePreview :openModal="openModal" :dataSelectCards="dataSelectCards" @dataModalCardPreview="dataModalCardPreview"></ImagePreview>
        <!-- Table list Deck Builder -->
        <button type="button" class="button-style-primary mt-4" @click="createDeckBuilder()">
            Add New Deck Builder
        </button>
        <div class="row mt-2">
            <div class="col">
                <h5>Deck Builder </h5>
                <TableListDeckBuilder></TableListDeckBuilder>
            </div>
        </div>
        <LoadingAndAlert :loading="loading" :confirmDelete="confirmDelete" @confirm="methodConfirmDelete" ></LoadingAndAlert>
    </div>
</template>
<script setup>
import { ref, reactive, watch, computed, onMounted, onBeforeMount } from 'vue';
import LoadingAndAlert from '../../components/LoadingAndAlert.vue';
import ListImageHover from '../../components/ListImageHover.vue';
import ImagePreview from '../../components/ImagePreview.vue';
import TableListDeckBuilder from '../DeckBuilder/TableListDeckBuilder.vue';
import {playStyleDeckService} from '../../store/PlayStyleDeck/playStyleDeckService';
import {utilize} from '../../utilize/utilize';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
const store = useStore();
const router = useRouter();

const openModal = ref(false);
const dataSelectCards = ref(null);
const confirmDelete = ref(false);
const paramsUrl = ref('');

const state = reactive({
    paramsUrl,
    confirmDelete
}) 

onBeforeMount(()=>{
    const payload = router.currentRoute.value.params.slug
    state.paramsUrl = payload;
    
    // store.dispatch('detailCounterStyle', payload);
    playStyleDeckService.detailPlayStyle(paramsUrl.value);
})

const getDataPlayStyleDeck = computed(()=>{
    return store.getters.getterDetailPlayStyle;
})


watch(getDataPlayStyleDeck, async (newValue, oldValue)=>{
    let collectListChips = '';
    const dataListChips= newValue.list_chips;
    store.state.dataListChips = [];
    for (let dataListChip of dataListChips) {
        dataListChip = utilize.characterEncodingUrl(dataListChip);
        collectListChips += `|${dataListChip}`;
    }
    store.dispatch("getDataListChips",collectListChips);
})

const loading = computed(()=>{
    return store.getters.getterStateLoading;
})

function editPlayStyle(slug){
    router.push(`/play-style-deck/${slug}/edit`);
}

function methodConfirmDelete($event){
    if($event){
        playStyleDeckService.deletePlayStyle(paramsUrl.value) 
    }
    state.confirmDelete = false;
}

function deletePlayStyle(){
    state.confirmDelete = true;
}

function backRoute(){
    router.push(`/play-style-deck`);
}

const getDataYgoProDeck = computed(()=>{
    return store.state.dataListChips;
})

function dataModalCardPreview (value) {
    openModal.value = value;
}

function dataModalCard($event){
    dataSelectCards.value = $event.dataSelectCards;
    openModal.value = $event.openModal;
}

function createDeckBuilder(){
    router.push(`/builder-deck/${paramsUrl.value}/create`);
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