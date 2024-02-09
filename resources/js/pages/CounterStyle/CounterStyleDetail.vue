<template>
    <div id="CounterStyleDetail" class="mt-4">
        <div class="row justify-content-center mb-5">
            <div class="col-8 text-center">
                <h1>{{ getDataCounterStyleDeck.title }}</h1>
            </div>
        </div>
        <div class="row mb-2">
            <div class="col">
                <button type="button" class="btn btn-success mr-2" @click="editCounterStyle(getDataCounterStyleDeck.slug)">Edit Counter Style</button>
                <button type="button" class="btn btn-danger" @click="deleteCounterStyle()">Delete Counter Style</button>
            </div>
            <div class="col d-flex justify-content-end">
                <button type="button" class="btn btn-warning" @click="backRoute()">Back</button>
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
        <div class="row justify-content-center mt-3">
            <div class="col-9 background-image">
                    <div class="d-flex">
                        <div
                            v-for="(urlImage,index) in getDataYgoProDeck" 
                            :key="index" 
                            class="wrap-card" 
                            :style="hoverFunctionCard"
                        >
                            <img 
                                :src="urlImage.card_images[0].image_url" 
                                :alt="urlImage.name"
                                @mouseover=" displayCard(index,true)" 
                                @mouseleave=" displayCard(index,false)"
                                @click="openModalCard(true, index)" 
                                class="image-style"
                            >
                            <div class="hover-card">
                                <template v-if="urlImage.frameType !== 'trap' && urlImage.frameType !== 'spell'">
                                    <div class="d-flex card-monster">
                                        <div class="image-section">
                                            <img :src="urlImage.card_images[0].image_url" :alt="urlImage.name" >
                                        </div>
                                        <div class="information-section">
                                            <div class="row mb-2">
                                                <div class="col-8 mr-auto">
                                                    <span> <b>{{ urlImage.name }}</b></span>
                                                </div>
                                                <div class="col-4 ml-auto ">
                                                    <span class="mr-1"> <b>{{ urlImage.attribute }}</b></span>
                                                    <span class="wrap-star" v-if="urlImage.frameType === 'xyz'">
                                                        <img src="../../../assets/image/rank-icon.webp" alt="rank">
                                                        <span>{{ urlImage.level }}</span>
                                                    </span>
                                                    <span class="wrap-star" v-else-if="urlImage.frameType === 'link'">
                                                        Link - 
                                                        <span>{{ urlImage.linkval }}</span>
                                                    </span>
                                                    <span class="wrap-star" v-else>
                                                        <img src="../../../assets/image/star-icon.webp" alt="star">
                                                        <span>{{ urlImage.level }}</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="mb-2">
                                                <span><b>[ {{ urlImage.race }} / {{ textTypeMonster(urlImage.frameType) }} {{textEffectMonster(urlImage.frameType)}} ]</b></span>
                                            </div>
                                            <div class="mb-2">
                                                {{ decodeHTML(urlImage.desc) }} 
                                            </div>
                                            <div class="mb-2">
                                                <span><b>ATK/</b>{{ urlImage.atk }} <span :innerHTML="textDef(urlImage.frameType, urlImage.def)"></span></span>   
                                            </div>
                                            <div class="released-card">
                                                <span>Released on Card Set  {{urlImage.card_sets[0].set_name}}</span>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                                <template v-if="urlImage.frameType === 'trap' || urlImage.frameType === 'spell'">
                                    <div class="d-flex card-trap-spell">
                                        <div class="image-section">
                                            <img :src="urlImage.card_images[0].image_url" :alt="urlImage.name" >
                                        </div>
                                        <div class="information-section">
                                            <div class="row mb-2">
                                                <div class="col-8 mr-auto">
                                                    <span> <b>{{ urlImage.name }}</b></span>
                                                </div>
                                                <div class="col-4 ml-auto ">
                                                    <span class="mr-1"> <b>{{ textTypeMonster(urlImage.frameType)}} - {{ urlImage.race }}</b></span>
                                                </div>
                                            </div>
                                            <div class="mb-2">
                                                {{ decodeHTML(urlImage.desc) }} 
                                            </div>
                                            <div class="released-card">
                                                <span>Released on Card Set  {{urlImage.card_sets[0].set_name}}</span>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                            </div>
                        </div>
                    </div>
            </div>
        </div>

        <!-- modal image previews -->
        <div :class="listenModalDisplay?'modal-wrapper':'modal-wrapper-none'">
            <template v-if="dataHasSelected">
                <div class="close-section">
                    <a  style="cursor: pointer;"
                        @click="openModalCard(false)"  >
                        <span 
                            class="material-icons" 
                            style="font-size: 36px"
                        >   
                            cancel
                        </span>
                    </a>
                </div>
                <div class="content-section">
                    <template v-if="dataHasSelected.frameType !== 'trap' && dataHasSelected.frameType !== 'spell'">
                        <div class="card-monster-preview wrap-card-currently">
                            <div class="d-flex justify-content-center">
                                <div class="mb-3">
                                        <h3 class=" name-card"> <b>{{ dataHasSelected?.name }}</b></h3>
                                </div>
                            </div>
                            <div class="d-flex">
                                <div class="image-section">
                                    <img :src="dataHasSelected?.card_images[0]?.image_url" :alt="dataHasSelected?.name" >
                                </div>
                                <div class="information-section">
                                    <div class="mb-2 d-flex">
                                        <span class="mr-3"> <b>{{ dataHasSelected?.attribute }}</b></span>
                                        <span class="wrap-star" v-if="dataHasSelected?.frameType === 'xyz'">
                                            <img src="../../../assets/image/rank-icon.webp" alt="rank">
                                            <span>{{ dataHasSelected?.level }}</span>
                                        </span>
                                        <span class="wrap-star" v-else-if="dataHasSelected?.frameType === 'link'">
                                            <span>Link - {{ dataHasSelected?.linkval }}</span>
                                        </span>
                                        <span class="wrap-star" v-else>
                                            <img src="../../../assets/image/star-icon.webp" alt="star">
                                            <span>{{ dataHasSelected?.level }}</span>
                                        </span>
                                    </div>
                                    <div class="mb-2">
                                        <span><b>[ {{ dataHasSelected?.race }} / {{ textTypeMonster(dataHasSelected?.frameType) }} {{textEffectMonster(dataHasSelected?.frameType)}} ]</b></span>
                                    </div>
                                    <div class="mb-2">
                                        {{ decodeHTML(dataHasSelected.desc) }} 
                                    </div>
                                    <div class="mb-1">
                                        <span><b>ATK/</b>{{ dataHasSelected?.atk }} <span :innerHTML="textDef(dataHasSelected?.frameType, dataHasSelected?.def)"></span></span>   
                                    </div>
                                    <div class="released-card mb-2">
                                        <span>Released on Card Set  {{dataHasSelected?.card_sets[0]?.set_name}}</span>
                                    </div>

                                </div>
                            </div>
                        </div>  
                    </template>  
                    <template v-if="dataHasSelected.frameType === 'trap' || dataHasSelected.frameType === 'spell'">
                        <div class="card-trap-spell-preview wrap-card-currently">
                            <div class="d-flex justify-content-center">
                                <div class="mb-3">
                                        <h3 class=" name-card"> <b>{{ dataHasSelected?.name }}</b></h3>
                                </div>
                            </div>
                            <div class="d-flex">
                                <div class="image-section">
                                    <img :src="dataHasSelected?.card_images[0]?.image_url" :alt="dataHasSelected?.name" >
                                </div>
                                <div class="information-section">
                                    <div class="row mb-2">
                                        <div class="col-8 mr-auto">
                                            <span> <b>{{ dataHasSelected.name }}</b></span>
                                        </div>
                                        <div class="col-4 ml-auto ">
                                            <span class="mr-1"> <b>{{ textTypeMonster(dataHasSelected.frameType)}} - {{ dataHasSelected.race }}</b></span>
                                        </div>
                                    </div>
                                    <div class="mb-2">
                                        {{ decodeHTML(dataHasSelected.desc) }} 
                                    </div>
                                    <div class="released-card mb-2">
                                        <span>Released on Card Set  {{dataHasSelected.card_sets[0].set_name}}</span>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </template>  
                </div>
            </template>       
        </div>
        <LoadingAndAlert :loading="loading" :confirmDelete="confirmDelete" @confirm="methodConfirmDelete"></LoadingAndAlert>
    </div>
</template>

<script setup>

import { computed, onMounted, ref, reactive, watch } from 'vue';
import LoadingAndAlert from '../../components/LoadingAndAlert.vue'
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import Swal from 'sweetalert2';
const router = useRouter();
const store = useStore();

const urlDataImages = ref(store.state.dataListChips)
const dataSelectCards = ref()

const openModal = ref(false);
const hoverCondition = ref(false)
const hoverConditionIndex = ref(0)
const paramsUrl = ref('');
const confirmDelete = ref(false);
const statusDelete = ref(false);

const state = reactive({
    paramsUrl,
    confirmDelete,
    statusDelete
}) 

onMounted(()=>{
    const payload = router.currentRoute.value.params.slug
    state.paramsUrl = payload;
    store.dispatch('detailCounterStyle', payload);
})
const getDataCounterStyleDeck= computed(()=>{
    return store.state.detailCounterStyle;
})

const hoverFunctionCard = computed(()=>{
    return hoverConditionIndex;
})

const dataHasSelected = computed(()=>{
    return dataSelectCards.value;
})
const listenModalDisplay = computed(()=>{
    return openModal.value;
})
const loading = computed(()=>{
    return store.getters.getterStateLoading;
})

const responseGeneral = computed(()=>{
    return store.state.responseGeneral
})

const getDataYgoProDeck = computed(()=>{
    console.log()
    return store.state.dataListChips;
})

watch(getDataCounterStyleDeck, async (newValue, oldValue)=>{
    const dataListChips= newValue.list_chips;
    store.state.dataListChips = [];
    for (let dataListChip of dataListChips) {
        if(dataListChip.includes('&')){
            dataListChip = dataListChip.replaceAll('&','%26')
        }
        store.dispatch("getDataListChips",dataListChip);
    }
    
})



// it cannot use watch whe we want get data ready
// const watchResponseGeneral = store.watch( (state, getters) => state.responseGeneral, (newValue, oldValue)=>{
//         state.statusDelete = newValue.status;
// })

function displayCard(index, condition ){
    hoverCondition.value = condition;
    hoverConditionIndex.value  = index;
    createdStyleCardHover(index, condition)
}

function decodeHTML(htmlText){
      let txt = document.createElement("textarea");
      txt.innerHTML = htmlText;
      return txt.value;
}

function openModalCard (value, index=0) {
    dataSelectCards.value = store.state.dataListChips[index]
    openModal.value = value;
}

function createdStyleCardHover(index, condition){
    const data = index+1;
    let listCardSelector = document.querySelector(`.wrap-card:nth-child(${data}) .hover-card`);
    // trial add before
    // let listCardSelectorBefore = document.querySelector(`.wrap-card:nth-child(${data}) .hover-card::before`);
    if (condition){
        listCardSelector.style.maxWidth= '550px';
        listCardSelector.style.minWidth= '550px';
        listCardSelector.style.padding= '8px';
        listCardSelector.style.borderRadius= '8px';
        listCardSelector.style.backgroundColor= 'rgba(0, 0, 0, 0.85)';
        listCardSelector.style.zIndex='99';
        listCardSelector.style.position='absolute';
        listCardSelector.style.marginRight = '12px';
        listCardSelector.style.top = '-53px';
        listCardSelector.style.display = 'inline';
        listCardSelector.style.color = 'white';
        listCardSelector.style.fontSize = '13px';

        // trial add before
        // listCardSelectorBefore.style.left = 'auto';
        // listCardSelectorBefore.style.right = '0';
        // listCardSelectorBefore.style.borderRight = 'none'
        // listCardSelectorBefore.style.borderLeft = '50px solid transparent'
        // listCardSelectorBefore.style.borderTop = '40px solid #257287'
        // listCardSelectorBefore.style.bottom = '-40px'
        // listCardSelectorBefore.style.position='absolute';
    } else{
        listCardSelector.style.position='relative';
        listCardSelector.style.display = 'none';
    }
}
function textTypeMonster(data){
    if( data === 'link' || data === 'xyz' ){
        return data.toUpperCase();
    } else {
        return data[0].toUpperCase()+data.substr(1).toLowerCase();
    }
}

function textEffectMonster(data){
    return data !== 'effect' ? '/ Effect' : ''
}

function textDef(type,def=0){
    let txt = document.createElement("textarea");
    let htmlText = type === 'link' ? '' : `<b>DEF/</b>${def}`
    txt.innerHTML = htmlText;
    return txt.value;
}

function editCounterStyle(slug){
    router.push(`/counter-style-deck/${slug}/edit`);
}

function deleteCounterStyle(){
    state.confirmDelete = true;
}

function methodConfirmDelete($event){
    if($event){
        Swal.fire({
            title: "Success Delete ",
            icon: "success"
        })
        .then((success)=>{
            if(success){
                store.dispatch('deleteCounterStyle', paramsUrl.value);
                router.push('/counter-style-deck/');
            }
        });
        
        // it still not working
        // dataDelete.then((result)=>{
        //     console.log("result = ")
        //     console.log(result)
        //     if(result.status){
        //         Swal.fire({
        //             title: "Success Delete ",
        //             icon: "success"
        //         })
        //         .then((success)=>{
        //             if(success){
        //                 router.push('/counter-style-deck/');
        //             }
        //     });
        //     }
        // })
        // router.push('/counter-style-deck/');
        // console.log("statusDelete.value = ");
        // console.log(statusDelete.value);
        // still blocking for implement this code

    }
}

function backRoute(){
    router.back();
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
    .background-image{
        background-color: #03182c;
        border-radius: 10px;
        padding: 10px;
    }
    .background-image .image-style{
        max-width: 95px;
        padding-right: 8px;
    }
    /* .wrap-card{
        position: relative;
    } */
    .image-style{
        cursor: pointer;
    }

    /* *********** style .wrap-card */
    .wrap-card .hover-card{
        display: none;
        position: relative;
    }

    /* .wrap-card .hover-card::before{
        left: auto;
        right: 0;
        border-right: none;
        border-left: 5px solid transparent;
        border-top: 4px solid #257287;
        bottom: -4px;
    } */

    .wrap-card .non-hover-card{
        display: none;
    }

    .background-image .hover-card .image-section img{
        width: 160px !important;
        margin-right: 0.75rem;
    }

    .hover-card .information-section .wrap-star img{
        width: 16px;
        height: 16px;
        margin-right: 4px;
        margin-top:-4px;
    }

    /* *********** style .modal-wrapper */
    .modal-wrapper-none{
        display: none;
    }
    .modal-wrapper {
        position: fixed;
        left: 0;
        top: 0;
        z-index: 999;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.4);
        display: grid;
        /* place-items: center; */
    }

    .wrap-card-currently {
        background-color: #0D2F4E;
        padding: 14px;
        border-radius: 10px;
    }

    .modal-wrapper .close-section{
        display: grid;
        justify-items: end;
        margin-top: 1.5rem;
        margin-right: 2rem;
        grid-template-rows: 0.1fr 0.1fr;
    }

    .modal-wrapper .content-section{
        display: grid;
        place-items: center;
        grid-template-rows: 0fr 0fr;
    }

    .modal-wrapper .image-section img{
        width: 210px;
        margin-right: 0.75rem;
    }

    .modal-wrapper .information-section {
        width: 30rem;
        padding: 8px;
        background-color: #175188;
        border-radius: 10px;
    }

    .released-card {
        display: flex;
        justify-content: end;
    }
    
    .modal-wrapper .information-section .wrap-star {
        display: flex;
        align-items: center;
    }

    .modal-wrapper .information-section .name-card {
        font-size: 22px;
    }
    .modal-wrapper .information-section .wrap-star img{
        width: 20px;
        height: 20px;
        margin-right: 6px;
    }
</style>

<style>
    .card-body .information-html p{
        padding: 0px !important;
        margin: 0px !important;
    }
</style>