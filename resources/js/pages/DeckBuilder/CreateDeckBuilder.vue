<template>
    <div id="CreateDeckBuilder" class="mt-4 mb-5">
        <div class="row justify-content-center">
            <div class="col-6 text-center">
                <h3>Deck Builder</h3>
            </div>
        </div>
        <div class="row mb-2">
            <div class="col d-flex justify-content-end">
                <button type="button" class="btn btn-warning" @click="backRoute()">Back</button>
            </div>
        </div>
        <div class="form-create">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" 
                    v-model="title" 
                    :class="responseGeneral?.message?.title ? 'is-invalid':''" id="name" aria-describedby="name">
                <small v-if="!responseGeneral?.status" class="form-text invalid-feedback">{{responseGeneral?.message?.title ? responseGeneral?.message?.title[0] : ''}}</small>
            </div>
            <div class="form-group">
                <label for="imageUpload">Upload Image</label>
                <div id="imageUpload" class="form-input-file">   
                    <div class="input-file-style">
                        <input type="file"  class="form-control-file"  @change="previewImage($event)" ref="inputFile" 
                            :disabled="conditionImage === 'input-image' || conditionImage === 'neutral' ? disabled : ''  ">
                    </div>
                    <div class="px-3 d-flex align-items-center">
                        <span>OR</span>
                    </div>
                    <div class="input-file-style">
                        <input type="text" class="form-control" id="name" aria-describedby="name" placeholder="Input url..." 
                            :class="responseGeneral?.message?.image ? 'is-invalid':''"
                            @change="previewImage($event)" 
                            :disabled="conditionImage === 'input-url-image' || conditionImage === 'neutral' ? disabled: '' " >
                    </div>
                </div>
                <div v-if="!responseGeneral?.status" class="form-text invalid-feedback-custom">{{responseGeneral?.message?.image ? responseGeneral?.message?.image[0] : ''}}</div>
                <!-- image preview -->
            </div>
            <div v-if="preview" class="mb-3">
                <div class="image-preview-wrap">
                    <div class="d-flex justify-content-end">
                        <a  
                            class="style-pointer" 
                            @click.prevent="removeImage(false)" 
                        >
                            <span 
                                class="material-icons" 
                                style="font-size: 36px"
                            >   
                                cancel
                            </span>
                        </a>
                    </div>
                    <div>
                        <img :src="preview" class="image-preview" />
                    </div>
                </div>
            </div>

            <div class="form-group mb-2">
                <label for="inputBody">Description</label>
                <quill-editor id="inputBody" v-model:content="information" content-type="html" placeholder="Write your information...."></quill-editor>
                <small v-if="!responseGeneral?.status" class="form-text invalid-feedback-custom">{{responseGeneral?.message?.information ? responseGeneral?.message?.information[0] : ''}}</small>
            </div>
            <div class="row">
                <div class="col">
                    <label>Deck</label>
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <div class="row mb-2">
                        <div class="col">
                        <input
                            type="text"
                            class="form-control"
                            id="Search"
                            aria-describedby="Search"
                            placeholder="Search Cards..."
                            v-model="inputSearch"
                            @keyup="searching($event)"
                        />
                        </div>
                    </div>
                    <div class="container mb-2">
                        <div class="row">
                            <div class="col background-image">
                                <div class="d-flex flex-wrap ml-2 scroller-cards-collect" id="scrollbar1" 
                                    v-if="getDataYgoProDeck.length">
                                    <div
                                        v-for="(urlImage,index) in getDataYgoProDeck" 
                                        :key="index" 
                                        class="wrap-card-search-deck-builder" 
                                    >
                                        <img 
                                            :src="urlImage?.card_images ? urlImage?.card_images[0]?.image_url_small :'' " 
                                            :alt="urlImage.name"
                                            @mouseover=" displayCard($event,index,true)" 
                                            @mouseleave=" displayCard($event,index,false)"
                                            @click="selectedCard(urlImage)"
                                            class="image-style"
                                            ref="imagePosition"
                                        >
                                        <div class="hover-card" ref="hoverCardTemplate">
                                            <template v-if="urlImage.frameType !== 'trap' && urlImage.frameType !== 'spell'">
                                                <div class="d-flex card-monster">
                                                    <div class="image-section">
                                                        <img :src="urlImage?.card_images ? urlImage?.card_images[0]?.image_url_small:''" :alt="urlImage.name" >
                                                    </div>
                                                    <div class="information-section">
                                                        <div class="row mb-2">
                                                            <div class="col-7 mr-auto">
                                                                <span> <b>{{ urlImage.name }}</b></span>
                                                            </div>
                                                            <div class="col-5  d-flex justify-content-end ">
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
                                                            <span><b>[ {{ urlImage.race }} / {{ utilize.textTypeMonster(urlImage.frameType) }} {{utilize.textEffectMonster(urlImage.frameType)}} ]</b></span>
                                                        </div>
                                                        <div class="mb-2 description-card">
                                                            {{ utilize.decodeHTML(urlImage.desc) }} 
                                                        </div>
                                                        <div class="mb-2">
                                                            <span><b>ATK/</b>{{ urlImage.atk }} <span :innerHTML="utilize.textDef(urlImage.frameType, urlImage.def)"></span></span>   
                                                        </div>
                                                        <div class="released-card">
                                                            <span>Released on Card Set  {{urlImage.card_sets ? urlImage?.card_sets[0]?.set_name: ''}}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </template>
                                            <template v-if="urlImage.frameType === 'trap' || urlImage.frameType === 'spell'">
                                                <div class="d-flex card-trap-spell">
                                                    <div class="image-section">
                                                        <img :src="urlImage?.card_images ? urlImage?.card_images[0]?.image_url_small :''" :alt="urlImage.name" >
                                                    </div>
                                                    <div class="information-section">
                                                        <div class="row mb-2">
                                                            <div class="col-7 mr-auto">
                                                                <span> <b>{{ urlImage.name }}</b></span>
                                                            </div>
                                                            <div class="col-5  d-flex justify-content-end ">
                                                                <span class="mr-1"> <b>{{ utilize.textTypeMonster(urlImage.frameType)}} - {{ urlImage.race }}</b></span>
                                                            </div>
                                                        </div>
                                                        <div class="mb-2 description-card">
                                                            {{ utilize.decodeHTML(urlImage.desc) }} 
                                                        </div>
                                                        <div class="released-card">
                                                            <span>Released on Card Set  {{urlImage.card_sets ? urlImage?.card_sets[0]?.set_name: ''}}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </template>
                                        </div>
                                    </div>
                                </div>
                                <div 
                                    class="d-flex justify-content-center"
                                    v-if="!getDataYgoProDeck.length"
                                >
                                    <span>Tidak ada kartu yang ke record</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row" v-if="getDataYgoProDeck.length">
                        <div class="col d-flex justify-content-start align-items-center">
                            <div class="mr-4">
                                <button class="btn btn-warning mr-2" 
                                    @click="nextPage()" 
                                    :disabled="!infoPage?.next_page_offset ? '':disabled"> > </button>
                                <button class="btn btn-warning" 
                                    @click="backPage()" 
                                    :disabled="infoPage?.previous_page_offset === undefined  ? '':disabled"> < </button>
                            </div>
                            <div>
                                <span> {{infoPage?.total_rows - infoPage?.rows_remaining}} of {{infoPage?.total_rows}}</span> 
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                </div>
            </div>
            <div class="mt-4">
                <button type="button" class="btn btn-success" @click="submit()">Submit</button>
                <!-- <button type="button" class="btn btn-danger ml-2" @click="createPayload()">Create Payload</button> -->
            </div>
        </div>
        <LoadingAndAlert :loading="loading" :responseGeneral="responseGeneral" @confirm="confirm"></LoadingAndAlert>
    </div>
</template>
<script setup>
import { ref, reactive, computed, onMounted } from 'vue';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { QuillEditor } from '@vueup/vue-quill'
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';  
import Swal from 'sweetalert2';
import { utilize } from '../../utilize/utilize';
const router = useRouter();
const store = useStore();

const title = ref('');
const information = ref('');
const preview = ref(null);
const conditionImage = ref('neutral');
const image = ref(null);
const urlImage = ref(null);
const inputFile = ref(0);
const oldSlug = ref('');
const editOrNot = ref(null);
const inputSearch = ref('');
const imagePosition = ref(null);
const num = ref(40);
const offset = ref(0);
const valueSearch = ref('');
const hoverCardTemplate = ref(null);
const hoverCondition = ref(false);
const hoverConditionIndex = ref(0);
let searchTimeout = '';


const state = reactive({
        preview, 
        image, 
        urlImage,
        conditionImage,
        inputFile, 
        information, 
        title, 
        oldSlug,
        editOrNot,
        inputSearch,
})


onMounted(()=>{

})

const responseGeneral = computed(()=>{
    return store?.state?.responseGeneral;
})

const getDataYgoProDeck = computed(()=>{
    return store?.state?.dataSearchCard?.data ? store?.state?.dataSearchCard?.data : [];
})

const infoPage = computed(()=>{
    return store?.state?.dataSearchCard?.meta
})

const loading = computed(()=>{
    return store.getters.getterStateLoading;
})


function previewImage(event){
    let input = event.target;
    if (input.files) {
        let reader = new FileReader();
        reader.onload = (e) => {
            state.preview = e.target.result;
        }
        state.image=input.files[0];
        reader.readAsDataURL(input.files[0]);
        if(image.value){
            state.conditionImage = 'input-image';
        } else if(!image.value) {
            state.conditionImage = 'neutral';
        }
    } 
    else if(!input.files){
        state.urlImage = event.target.value;
        state.preview = event.target.value;
        if(urlImage.value){
            state.conditionImage = 'input-url-image';
        } else if(!urlImage.value) {
            state.conditionImage = 'neutral';
        }
    }
}

function removeImage(){
    state.preview = null;
    state.image = null;
    state.urlImage = null;
    inputFile.value.value = "";
    state.conditionImage = 'neutral';
}

function searching(event){
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(()=>{  
        const input = event.target.value;
        state.inputSearch = input;
        offset.value = 0;

        if(input){
            store.state.dataSearchCard = {}
            valueSearch.value = utilize.characterEncodingUrl(input);
            triggerSearchGlobal();
        }
        event.preventDefault();
    }, 800)
}

function displayCard($event, index, condition ){
    hoverCondition.value = condition;
    hoverConditionIndex.value  = index;
    createdStyleCardHover($event, index, condition)
};

function createdStyleCardHover($event, index, condition){
        // ********** get data position image 
        const { top, right, bottom, left } = imagePosition.value[index].getBoundingClientRect();
        const detectWidthMonitor = window.innerWidth;
        let positionLeft = 0;
        let positionTop =  0;
        const data = index+1;
        let listCardSelector = document.querySelector(`.wrap-card-search-deck-builder:nth-child(${data}) .hover-card`);
        // trial add before
        // let listCardSelectorBefore = document.querySelector(`.wrap-card:nth-child(${data}) .hover-card::before`);
        if (condition){
            if(detectWidthMonitor >= 1910){            
                positionLeft = left-606;
                positionTop =  top-206;
            } else if (detectWidthMonitor >= 1200 && detectWidthMonitor<1910){
                positionLeft = left-413;
                positionTop =  top-196;
            }

            //********* */ try to fixing when i scroll on botom scroll can display hover on top 
            // if(detectHeightMonitor < 752 &&  $event.clientY > 530){
            //     const getHeightElementCardHover = hoverCardTemplate.value[index].offsetHeight;
            //     console.log("getHeightElementCardHover = ");
            //     console.log(getHeightElementCardHover);
            //     positionTop = positionTop - 234;
            //     listCardSelector.style.top = `${positionTop}px`;

            // } else {
            //     listCardSelector.style.left = `${positionLeft}px`;
            //     listCardSelector.style.top = `${positionTop}px`;
            // }

            listCardSelector.style.maxWidth= '500px';
            listCardSelector.style.minWidth= '500px';
            listCardSelector.style.padding= '8px';
            listCardSelector.style.borderRadius= '8px';
            listCardSelector.style.backgroundColor= 'rgba(0, 0, 0, 0.85)';
            listCardSelector.style.zIndex='99';
            listCardSelector.style.left = `${positionLeft}px`;
            listCardSelector.style.top = `${positionTop}px`;
            listCardSelector.style.position='absolute';
            listCardSelector.style.marginRight = '12px';
            listCardSelector.style.display = 'block';
            listCardSelector.style.color = 'white';
            listCardSelector.style.fontSize = '13px';

            //********* */ trial add before
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


function selectedCard(data){
    // const urlParameters= utilize.characterEncodingUrl(data.name);
    // window.open(`${collectionUrl.baseUrlHead}detail-one-card/${urlParameters}`);
}

function nextPage(){
    // state.inputSearch = inputSearch.value;
    offset.value = offset.value+40;
    triggerSearchGlobal();
}

function backPage(){
    // state.inputSearch = inputSearch.value;
    offset.value = offset.value-40;
    triggerSearchGlobal();
}

function triggerSearchGlobal(){
    const payload = {
        mode: 'all-search',
        name: valueSearch.value,
        num: num.value,
        offset: offset.value
    }
    store.dispatch('getSearchCards', payload);
}


function backRoute(){
    router.back();
}

function submit(){
    console.log("data submit = ");
}

</script>
<style scoped>
    .image-preview-wrap {
        width: 140px;
    }
    .image-preview-wrap .image-preview{
        width: 140px;
    }

    .image-preview-wrap .style-pointer{
        text-decoration: none !important;
        color: white;
        cursor: pointer;
    }
    .image-preview-wrap .style-pointer:hover{
        color: none;
        text-decoration: none !important;
        cursor: pointer;
    }
    .form-input-file{
        display: flex;
    }
    .form-input-file .input-file-style{
        width: 230px;
    }

    .invalid-feedback-custom {
        width: 100%;
        margin-top: 0.25rem;
        font-size: .875em;
        color: #dc3545;
    }

    /* stryle seacrh global image */
    #scrollbar1::-webkit-scrollbar {
        width: 6px;
    }

    #scrollbar1::-webkit-scrollbar-track {
            border-radius: 4px;
            background-color: #0C345A;
            border: 2px solid #0C345A;
    }

    #scrollbar1::-webkit-scrollbar-thumb {
        border-radius: 4px;
        border: 2px solid transparent;
        background-clip: content-box;
        background-color: #194773;
    }
    .background-image{
        background-color: #03182c;
        border-radius: 10px;
        padding: 10px;
    }
    .background-image .image-style{
        max-width: 95px;
        padding-right: 8px;
        cursor: pointer;
        padding-top:4px;
        cursor: pointer;
    }

    .wrap-card-search-deck-builder .non-hover-card{
        display: none;
    }

    .wrap-card-search-deck-builder .hover-card{
        display: none;
        position: relative;
    }

    .hover-card .image-section img{
        width: 150px !important;
        height: 210px;
        margin-right: 0.75rem;
    }

    .information-section{
        max-width: 320px;
    }

    .hover-card .information-section .wrap-star img{
        width: 16px;
        height: 16px;
        margin-right: 4px;
        margin-top:-4px;
    }

    .hover-card .information-section .wrap-star img{
        width: 16px;
        height: 16px;
        margin-right: 4px;
        margin-top:-4px;
    }

    .description-card{
        min-height: 9.4rem;
        text-align: justify;
    }

    .scroller-cards-collect{
        max-height: 32rem;
        overflow: auto;
    }

</style>

<style>
button {
  font-weight: bold;
}

.ql-toolbar{
    background-color: #e2e5e7;
}

.ql-editor.ql-blank::before{
    color: rgba(226,229,231, 0.8);
    content: attr(data-placeholder);
    font-style: italic;
    left: 15px;
    pointer-events: none;
    position: absolute;
    right: 15px;
}

.ql-container {
    min-height: 120px;
}
</style>