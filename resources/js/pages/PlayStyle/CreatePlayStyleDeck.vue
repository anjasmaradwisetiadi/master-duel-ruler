<template>
    <div id="CreatePlayStyleDeck" class="mt-4 mb-5">
        <div class="row justify-content-center">
            <div class="col-6 text-center">
                <h3>{{editOrNot ? 'Edit':'Create'}} Play Style Deck</h3>
            </div>
        </div>
        <div class="row mb-2">
            <div class="col d-flex justify-content-end">
                <button type="button" class="button-style-secondary" @click="backRoute()">Kembali</button>
            </div>
        </div>
        <div class="form-create">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" 
                    v-model="title" 
                    :class="responseGeneral?.message?.title ? 'is-invalid':''" id="name" aria-describedby="name" 
                    >
                <small v-if="!responseGeneral?.status" class="form-text invalid-feedback">{{responseGeneral?.message?.title ? responseGeneral?.message?.title[0] : ''}}</small>
            </div>
            <div class="form-group">
                <label for="imageUpload">Upload Image</label>
                <div id="imageUpload" class="form-input-file">   
                    <div class="input-file-style">
                        <input type="file"  class="form-control-file"  @change="previewImage($event)" ref="inputFile" accept="image/*" 
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

            <div class="form-group">
                <label for="inputBody">Information</label>
                <quill-editor id="inputBody" v-model:content="information" content-type="html" placeholder="Write your information...."></quill-editor>
                <small v-if="!responseGeneral?.status" class="form-text invalid-feedback-custom">{{responseGeneral?.message?.information ? responseGeneral?.message?.information[0] : ''}}</small>
            </div>
            <div class="form-group">
                <label for="chips">Chips File</label>
                <div id="chips" aria-describedby="chips">
                    <div class="mb-1">
                        <button type="button" class="btn btn-secondary" @click="generateChips()">Generate Chips File</button>
                    </div>
                    <div v-if="listChips.length" class="row">
                        <div class="col">
                            <div class="chip mr-2 mt-2" v-for="(chip, index) in listChips" :key="index">
                                {{ chip }}
                                <span class="closebtn" @click="removeChip(index)">&times;</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-group mb-2" v-if="listChips?.length">
                <!-- list image previews -->
                <ListImageHover :getDataYgoProDeck='getDataYgoProDeck' @dataModalCard='dataModalCard' ></ListImageHover>
            </div> 
            <div>
                <button type="button" class="btn btn-success" @click="submit()">Submit</button>
                <!-- <button type="button" class="btn btn-danger ml-2" @click="createPayload()">Create Payload</button> -->
            </div>
        </div>
        <!-- modal image previews -->
        <ImagePreview :openModal="openModal" :dataSelectCards="dataSelectCards" @dataModalCardPreview="dataModalCardPreview"></ImagePreview>
        <LoadingAndAlert :loading="loading" :responseGeneral="responseGeneral" @confirm="confirm"></LoadingAndAlert>
    </div>
</template>
<script setup>
import { ref, reactive,computed, watch, onBeforeMount, onMounted, onBeforeUpdate, } from 'vue';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { QuillEditor } from '@vueup/vue-quill'
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import {playStyleDeckService} from '../../store/PlayStyleDeck/playStyleDeckService';
import LoadingAndAlert from '../../components/LoadingAndAlert.vue';
import ListImageHover from '../../components/ListImageHover.vue';
import ImagePreview from '../../components/ImagePreview.vue';
import { utilize } from '../../utilize/utilize';
import Swal from 'sweetalert2';
const router = useRouter();
const store = useStore();

const title = ref('');
const information = ref('');
const preview = ref(null);
const conditionImage = ref('neutral');
const image = ref(null);
const urlImage = ref(null);
const inputFile = ref(0);
const listChips = ref([])
const textInformation = ref('')
const paramsUrl = ref('');
const oldSlug = ref('');
const editOrNot = ref(null);
const openModal = ref(false);
const dataSelectCards = ref(null);

const state = reactive({
    preview, 
    image, 
    urlImage,
    conditionImage,
    inputFile, 
    information, 
    title, 
    listChips, 
    textInformation, 
    paramsUrl,
    oldSlug,
    editOrNot
})

onMounted(()=>{
    decisionEditOrCreateRuler();
})

const loading = computed(()=>{
    return store?.getters?.loading;
})

const responseGeneral = computed(()=>{
    return store?.state?.responseGeneral;
})

const getDataYgoProDeck = computed(()=>{
    return store?.state?.dataListChips;
})

const getDataEditPlayStyle = computed(()=>{
    const data = store.getters.getterEditPlayStyle;
    if(data?.title){
        return data
    }
})

watch( responseGeneral,async (newValue, oldValue)=>{
    if(!responseGeneral?.status){
        const information =  newValue?.message?.information ? newValue?.message?.information[0] : '';
        if(information){
            let container = document.querySelector('.ql-container.ql-snow ');
            // const toolbar = document.getElementsByClassName('ql-toolbar');
            container.style.border= '1px solid #dc3545 !important';
        }
    }
})

watch( getDataEditPlayStyle,async (newValue, oldValue)=>{
    state.title = newValue.title;
    state.slug = newValue.slug;
    state.listChips = newValue.list_chips;
    state.information = newValue.information;
    state.preview = newValue.image;
    state.oldSlug = newValue.slug;
    storeListCrad(newValue.list_chips); 
})

function decisionEditOrCreateRuler(){
    const payload = router.currentRoute.value.params.slug
    state.paramsUrl = payload;
    if(payload){
        state.editOrNot = true;
        state.listChips=[];
        store.state.dataListChips = [];
        playStyleDeckService.getEditPlayStyle(payload);
    } 
}

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

function generateChips(){
    state.listChips=[];
    store.state.dataListChips = [];
    const createStringInformation = information.value;
    let arrayIndexInformation = [];
    for(let index=0; index<createStringInformation.length; index++){
        if(createStringInformation[index] === `"`){
            arrayIndexInformation.push(index);
        }
    }

    const oddArrayIndexInformation = arrayIndexInformation.filter((item, index)=>{
        let newIndex= index+1
        if((newIndex % 2)){
            return item;
        }  
    })

    const evenArrayIndexInformation = arrayIndexInformation.filter((item, index)=>{
        let newIndex= index+1
        if(!(newIndex % 2)){
            return item
        }  
    })

    for (let index = 0; index < oddArrayIndexInformation.length; index++) {
        const indexOdd = oddArrayIndexInformation[index];
        const indexEven = evenArrayIndexInformation[index];
        const dataText = createStringInformation.substring((indexOdd+1), (indexEven));
        state.listChips.push(dataText);
    }

    storeListCrad(listChips.value); 
}

function removeChip(index){
    listChips.value.splice(index,1);
    store.commit('mutateRemoveDataListChips',index);
}

function storeListCrad(listChips){
    let collectListChips = '';
        for (let dataListChip of listChips) {
            dataListChip = utilize.characterEncodingUrl(dataListChip);
            collectListChips += `|${dataListChip}`;
        }
    store.dispatch("getDataListChips",collectListChips);
}

function dataModalCard($event){
    dataSelectCards.value = $event.dataSelectCards;
    openModal.value = $event.openModal;
}

function dataModalCardPreview (value) {
    openModal.value = value;
}

function confirm($event){
    store.state.responseGeneral = {};
    if($event){
        router.push('/play-style-deck/');
    }
}

function submit(){
    let slugCreated = ''
    slugCreated = title.value.toLowerCase().replaceAll(' ', '-');

    // *********** i use formData() because  i want send 2 type data (json and file image) 
    let formData = new FormData();
    const getParamsCreate = {
        'title': title.value,
        'information': information.value,
        'list_chips': listChips.value,
        'url_image': urlImage.value
    }
    // *********** i use formData() because  i want send 2 type data (json and file image) 
    for (const key in getParamsCreate) {
        formData.append(key, getParamsCreate[key])
    }


    if(!editOrNot.value){
        formData.append('image', image.value);
        formData.append('slug', slugCreated);
        playStyleDeckService.createPlayStyle(formData);
        // store.dispatch('createCounterStyle', formData)
        state.editOrNot = false
    } else {
        if(conditionImage.value === 'neutral'){
            formData.append('image', preview.value);
        } else {
            formData.append('image', image.value);
        }
        // add function spoofing because laravel not know about method Put, Patch, Delete
        formData.append('_method', 'PUT');
        formData.append('slug', oldSlug.value);
        formData.append('old-slug', oldSlug.value);
        const data ={
            slug:oldSlug.value,
            form:formData
        } 
        playStyleDeckService.editPlayStyle(data);
        state.editOrNot = false
    }
}

function backRoute(){
    router.back();
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

/* ********** style chips */
.chip {
  display: inline-block;
  padding: 0 20px;
  height: 40px;
  font-size: 18px;
  line-height: 40px;
  border-radius: 20px;
  background-color: #f1f1f1;
  color: #0b365e;
}

.chip img {
  float: left;
  margin: 0 10px 0 -25px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
}

.closebtn {
  padding-left: 10px;
  color: #0b365e;
  font-weight: bold;
  float: right;
  font-size: 20px;
  cursor: pointer;
}

.closebtn:hover {
  color: #0b365e;
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