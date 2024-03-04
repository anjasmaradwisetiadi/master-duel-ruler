<template>
    <div id="CreateDeckBuilder" class="mt-4 mb-5">
        <div class="row justify-content-center">
            <div class="col-6 text-center">
                <h3>{{editOrNot ? 'Edit':'Create'}} Deck Builder</h3>
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
                <label for="imageUpload">Engines</label>
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
                <div v-if="!responseGeneral?.status" class="form-text invalid-feedback-custom">{{responseGeneral?.message?.engines ? responseGeneral?.message?.engines[0] : ''}}</div>
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
                <quill-editor id="inputBody" v-model:content="description" content-type="html" placeholder="Write your description...."></quill-editor>
                <small v-if="!responseGeneral?.status" class="form-text invalid-feedback-custom">{{responseGeneral?.message?.description ? responseGeneral?.message?.description[0] : ''}}</small>
            </div>
            <div class="row">
                <div class="col">
                    <label>Deck</label>
                </div>
            </div>
            <div class="row">
                <div class="col-6 pt-1">
                    <SearchCardsSeparate 
                        @selectedCard="selectedCardHas" 
                        :fullCardLoad="fullCardLoad"
                        @emitFullCardLoad="emitFullCardLoad"
                    >
                    </SearchCardsSeparate>
                </div>
                <div class="col-6">
                    <MainExtraDeck 
                        :data-deck-builder-length="dataDeckBuilderLength" 
                        :data-deck-builder="dataDeckBuilder"
                        v-model:mainDeckCards="deckCollectMain"
                        v-model:card-selected="cardSelected"
                        :deck-type="deckTypeMain"
                        v-model:deck-collects="dataDeckTypeMain"
                        @addRemoveCardSelected="addRemoveCardSelectedMain"
                    ></MainExtraDeck>
                    <div class="mt-3"></div>
                    <MainExtraDeck 
                        :data-deck-builder-length="dataDeckBuilderLength" 
                        :data-deck-builder="dataDeckBuilder"
                        v-model:mainDeckCards="deckCollectExtra"
                        v-model:card-selected="cardSelected"
                        :deck-type="deckTypeExtra"
                        :deck-collects="dataDeckTypeExtra"
                        @addRemoveCardSelected="addRemoveCardSelectedMain"
                    ></MainExtraDeck>
                </div>
            </div>
            <div class="mt-4">
                <button type="button" class="btn btn-success" @click="submit()">Submit</button>
                <button type="button" class="btn btn-danger ml-2" @click="createPayload()">Create Payload</button>
            </div>
        </div>
        <LoadingAndAlert :loading="loading" :responseGeneral="responseGeneral" @confirm="confirm"></LoadingAndAlert>
    </div>
</template>
<script setup>
import { ref, reactive, computed, onMounted, onBeforeMount, watch } from 'vue';
import SearchCardsSeparate from '../../components/SearchCardsSeparate.vue';
import {dataDummyDeckBuilder, dataDummyCards} from '../../DummyDataCard';
import LoadingAndAlert from '../../components/LoadingAndAlert.vue';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { QuillEditor } from '@vueup/vue-quill'
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';  
import MainExtraDeck from '../../components/MainExtraDeck.vue';
import { builderDeckService } from '../../store/BuilderDeck/builderDeckService';
import Swal from 'sweetalert2';
import { utilize } from '../../utilize/utilize';

const router = useRouter();
const store = useStore();

const title = ref('');
const description = ref('');
const preview = ref(null);
const conditionImage = ref('neutral');
const image = ref(null);
const urlImage = ref(null);
const inputFile = ref(0);
const oldSlug = ref('');
const editOrNot = ref(null);
const deckTypeMain = ref('main deck');
const deckTypeExtra = ref('extra deck');
const dataDeckTypeMain = ref([]);
const dataDeckTypeExtra = ref([]);
const cardSelectedChoice = ref(null);
const paramsUrlSlugPlayStyle = ref('');
const paramsUrlSlug = ref('');

// const fullCardLoad = defineModel('fullCardLoad');
const fullCardLoad = ref(
    {
        condition: false,
        value: 0
    }
);

const state = reactive({
        preview, 
        image, 
        urlImage,
        conditionImage,
        inputFile, 
        description, 
        title, 
        oldSlug,
        editOrNot,
        cardSelectedChoice,
})

onBeforeMount(()=>{
    const payloadSlug = router.currentRoute.value.params.slug;
    const payloadSlugPlayStyle= router.currentRoute.value.params.slug_play_style;
    paramsUrlSlug.value = payloadSlug;
    paramsUrlSlugPlayStyle.value = payloadSlugPlayStyle;

    decisionEditOrCreateRuler();
})

onMounted(()=>{

})


const dataDeckBuilder = computed(()=>{
    return store.getters.getterDataEditDeckBuilder;
})

const dataDeckBuilderLength = computed(()=>{
    return store.getters.getterDataEditDeckBuilder.deck_builder;
})
  

const deckCollectMain = computed(()=>{
    return store.getters.getterdataDeckBuilderMainDeck;
})

const deckCollectExtra = computed(()=>{
    return store.getters.getterdataDeckBuilderExtraDeck;
})

const getDataEditDeckBuilder = computed(()=>{
        const data = store.getters.getterDataEditDeckBuilder;
        if(data?.title){
            return data
        }
    })

watch(deckCollectMain, (newValue, oldValue)=>{
    dataDeckTypeMain.value = newValue;
})

watch(deckCollectExtra, (newValue, oldValue)=>{
    dataDeckTypeExtra.value = newValue;
})

watch( getDataEditDeckBuilder,async (newValue, oldValue)=>{
    console.log("newValue getDataEditDeckBuilder ")
    console.log(newValue)
    state.title = newValue.title;
    state.slug = newValue.slug;
    state.description = newValue.description;
    state.preview = newValue.engines;
    state.oldSlug = newValue.slug;
})

const responseGeneral = computed(()=>{
    return store?.state?.responseGeneral;
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

function decisionEditOrCreateRuler(){
    const payload = router.currentRoute.value.params.slug;
    state.paramsUrl = payload;
    if(payload){
        state.editOrNot = true;
        builderDeckService.getEditDeckBuilder(payload);
    } 
}

function removeImage(){
    state.preview = null;
    state.image = null;
    state.urlImage = null;
    inputFile.value.value = "";
    state.conditionImage = 'neutral';
}

function calculatePopupAddedCard(condition, value){
    fullCardLoad.value.condition = condition,
    fullCardLoad.value.value= value
}

function addRemoveCardSelectedMain($event){
    if($event.status === 'add' && store.getters.getterTotalMainDeck < 60){
        selectedCardHas($event.value);
    } else {
        selectedCardHasRemove($event.value);
    }
}

function selectedCardHas(event){
    const dataType = utilize.sliceCardToMainOrExtraDeck(event);
    // console.log("dataDeckTypeExtra.value selectedCardHas = ");
    // console.log(dataDeckTypeExtra.value);
    // console.log("dataDeckTypeMain.value selectedCardHas = ");
    // console.log(dataDeckTypeMain.value);
    if(dataType === 'extra deck'){
        const dataSearch = dataDeckTypeExtra.value.some((element, index) => {
            return element.name === event.name
        });
        // ********* when it not have card collect
        if(!dataSearch){
            const dataJoin = {
                value: 1,
                rarity: 'N',
                column_deck: 'extra deck'
            }
            event = {...event, ...dataJoin};
            dataDeckTypeExtra.value.push(event)
            calculatePopupAddedCard(false, 1);
        } else if (dataSearch){
            // ********* when it have card collect
            dataDeckTypeExtra.value.forEach((element, index) => {
                if(element.name === event.name){
                    if(dataDeckTypeExtra.value[index].value === 3){
                        calculatePopupAddedCard(true, 3);
                    } else {
                        dataDeckTypeExtra.value[index].value += 1;
                        calculatePopupAddedCard(false, dataDeckTypeExtra.value[index].value);
                    }
                }
            });
        }
        dataDeckTypeExtra.value = dataDeckTypeExtra.value;


    } else if(dataType === 'main deck'){
        const dataSearch = dataDeckTypeMain.value.some((element, index) => {
            return element.name === event.name
        });
        // ********* when it not have card collect
        if(!dataSearch){
            const dataJoin = {
                value: 1,
                rarity: 'N',
                column_deck: 'main deck'
            }
            event = {...event, ...dataJoin};
            dataDeckTypeMain.value.push(event)
            calculatePopupAddedCard(false, 1);
        } else if (dataSearch){
            // ********* when it have card collect
            dataDeckTypeMain.value.forEach((element, index) => {
                if(element.name === event.name){
                    if(dataDeckTypeMain.value[index].value === 3){
                        calculatePopupAddedCard(true, 3);
                    } else {
                        dataDeckTypeMain.value[index].value += 1;
                        calculatePopupAddedCard(false, dataDeckTypeMain.value[index].value);
                    }
                }
            });
        }
        dataDeckTypeMain.value = dataDeckTypeMain.value;
    }
}



function selectedCardHasRemove(event){
    const dataType = event.column_deck;
    if(dataType === 'extra deck'){
        const dataSearch = dataDeckTypeExtra.value.some((element, index) => {
            return element.name === event.name
        });
        // ********* when it not have card collect
         if (dataSearch){
            // ********* when it have card collect
            dataDeckTypeExtra.value.forEach((element, index) => {
                if(element.name === event.name){
                    if( dataDeckTypeExtra.value[index].value >= 2 && dataDeckTypeExtra.value[index].value <= 3 ){
                        dataDeckTypeExtra.value[index].value -= 1;
                        calculatePopupAddedCard(false, dataDeckTypeExtra.value[index].value);
                    } else if (dataDeckTypeExtra.value[index].value === 1){
                        dataDeckTypeExtra.value.splice(index,1);
                    }
                }
            });
        }
    } else if(dataType === 'main deck'){
        const dataSearch = dataDeckTypeMain.value.some((element, index) => {
            return element.name === event.name
        });
        // ********* when it not have card collect
         if (dataSearch){
            // ********* when it have card collect
            dataDeckTypeMain.value.forEach((element, index) => {
                if(element.name === event.name){
                    if( dataDeckTypeMain.value[index].value >= 2 && dataDeckTypeMain.value[index].value <= 3 ){
                        dataDeckTypeMain.value[index].value -= 1;
                        calculatePopupAddedCard(false, dataDeckTypeMain.value[index].value);
                    } else if (dataDeckTypeMain.value[index].value === 1){
                        dataDeckTypeMain.value.splice(index,1);
                    }
                }
            });
        }
    }
}

function emitFullCardLoad(event){
    fullCardLoad.value.condition = event.condition,
    fullCardLoad.value.value= event.value
}

function backRoute(){
    router.back();
}

function submit(){

    let slugCreated = title.value.toLowerCase().replaceAll(' ', '-');

    let formData = new FormData();
    const priceDeck ={
        total_rarity_SR : 0,
        total_rarity_UR : 0,
    }

    const totalCardDeck = {
        total_card_main_deck: store.getters.getterTotalMainDeck,
        total_card_extra_deck: store.getters.getterTotalExtraDeck
    }

    const dataDeckBuilder = createPayloadDeck(dataDeckTypeMain.value, dataDeckTypeExtra.value);

    const getParamsCreate ={
        title: title.value,
        // slug: slugCreated,
        engines_url: urlImage.value,
        // engines: image.value,
        play_style_slug: paramsUrlSlugPlayStyle.value,
        price: JSON.stringify(priceDeck),
        total_card: JSON.stringify(totalCardDeck),
        description: description.value,
        deck_builder: JSON.stringify(dataDeckBuilder)
    }
    for (const key in getParamsCreate) {
        formData.append(key, getParamsCreate[key])
    }

    if(!editOrNot.value){
        formData.append('engines', image.value);
        formData.append('slug', slugCreated);
        // service for submit create data deck builder
        builderDeckService.createDeckBuilder(formData);
        state.editOrNot = false
    } else {
        if(conditionImage.value === 'neutral'){
            formData.append('engines', preview.value);
        } else {
            formData.append('engines', image.value);
        }
            //
        formData.append('_method', 'PUT');
        formData.append('slug', oldSlug.value);
        formData.append('old-slug', oldSlug.value);
        const data ={
                slug:oldSlug.value,
                form:formData
        } 
        // service for submit edit data deck builder
        // store.dispatch('editCounterStyle', data);
        builderDeckService.editBuilderDeck(data);
        state.editOrNot = false
    }
}

function createPayloadDeck(dataMain, dataExtra){
    let dataCollectMain = [];
    let dataCollectExtra = [];
    dataMain.forEach((element, index)=>{
        if(element){
            const collect = {
                name: element.name,
                value: element.value,
                rarity: element.rarity,
                column_deck: element.column_deck
            }
            dataCollectMain.push(collect)
        }
    })

    dataExtra.forEach((element, index)=>{
        if(element){
            const collect = {
                name: element.name,
                value: element.value,
                rarity: element.rarity,
                column_deck: element.column_deck
            }
            dataCollectExtra.push(collect)
        }
    })

    return dataCollectMain.concat(dataCollectExtra)
}

function confirm($event){
    store.state.responseGeneral = {};
    if($event){
        router.push(`/play-style-deck/${paramsUrlSlugPlayStyle.value}`)
    }
}

function createPayload(){
    title.value = "example deck"
    image.value = "https://images.ygoprodeck.com/images/cards_small/45663742.jpg"; 
    urlImage.value = "https://images.ygoprodeck.com/images/cards_small/45663742.jpg";        
    // state.urlImage = '',
    description.value = "1. testing flow"
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