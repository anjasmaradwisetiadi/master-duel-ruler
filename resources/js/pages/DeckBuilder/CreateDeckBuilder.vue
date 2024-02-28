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
                <div class="col-6 pt-1">
                    <SearchCardsSeparate @selectedCard="selectedCardHas"></SearchCardsSeparate>
                </div>
                <div class="col-6">
                    <MainExtraDeck 
                        :data-deck-builder-length="dataDeckBuilderLength" 
                        :data-deck-builder="dataDeckBuilder"
                        v-model:mainDeckCards="mainDeckCards"
                        v-model:card-selected="cardSelected"
                        :deck-type="deckTypeMain"
                    ></MainExtraDeck>
                    <MainExtraDeck 
                        :data-deck-builder-length="dataDeckBuilderLength" 
                        :data-deck-builder="dataDeckBuilder"
                        v-model:mainDeckCards="extraDeckCards"
                        v-model:card-selected="cardSelected"
                        :deck-type="deckTypeExtra"
                    ></MainExtraDeck>
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
import { ref, reactive, computed, onMounted, onBeforeMount } from 'vue';
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

const dataDeckBuilderLength = ref(dataDummyDeckBuilder.data);
const dataDeckBuilder = ref(dataDummyDeckBuilder.data[1]);

const mainDeckCards = computed(()=>{
    // return store.state.dataDummyCards;
    return store.getters.getterdataDeckBuilderMainDeck;
})
const extraDeckCards = computed(()=>{
    // return store.state.dataDummyCards;
    return store.getters.getterdataDeckBuilderExtraDeck;
})

const title = ref('');
const information = ref('');
const preview = ref(null);
const conditionImage = ref('neutral');
const image = ref(null);
const urlImage = ref(null);
const inputFile = ref(0);
const oldSlug = ref('');
const editOrNot = ref(null);
const deckTypeMain = ref('main-deck');
const deckTypeExtra = ref('extra-deck')

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
})

onBeforeMount(()=>{
    builderDeckService.getDataDeckBuilder(dataDeckBuilder.value.deck_builder);
})

onMounted(()=>{

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

function removeImage(){
    state.preview = null;
    state.image = null;
    state.urlImage = null;
    inputFile.value.value = "";
    state.conditionImage = 'neutral';
}

function selectedCardHas(event){
    console.log("data selected card = ")
    console.log(event)
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