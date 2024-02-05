<template>
    <div id="CreateCounterStyleDeck" class="mt-4 mb-5">
        <div class="row justify-content-center">
            <div class="col-6 text-center">
                <h3>{{editOrNot ? 'Edit':'Create'}} Counter Style Deck</h3>
            </div>
        </div>
        <div class="form-create">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" aria-describedby="name" v-model="title">
                <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
            </div>
            <div class="form-group">
                <label for="imageUpload">Upload Image</label>
                <input type="file"  class="form-control-file" id="imageUpload" @change="previewImage($event)" ref="inputFile">
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
                <quill-editor v-model:content="information" contentType="text" placeholder="Write your information...."></quill-editor>
            </div>
            <div class="form-group">
                <label for="chips">Chips File</label>
                <div id="chips" aria-describedby="chips">
                    <div class="mb-1">
                        <button type="button" class="btn btn-secondary" @click="generateChips()"><a :href="urlCreateDeck" class="add-new-counter-link">Generate Chips File</a></button>
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
            <div>
                <button type="button" class="btn btn-success" @click="submit()">Submit</button>
                <button type="button" class="btn btn-danger ml-2" @click="createPayload()">Create Payload</button>
            </div>
        </div>
        <LoadingAndAlert text="dataFormer" :loading="loading" :responseGeneral="responseGeneral" ></LoadingAndAlert>
    </div>
</template>

<script setup>
    import { ref, reactive,computed, watch, onBeforeMount, onMounted, onBeforeUpdate, } from 'vue';
    import '@vueup/vue-quill/dist/vue-quill.snow.css';
    import { QuillEditor } from '@vueup/vue-quill'
    import { useRouter } from 'vue-router';
    import { useStore } from 'vuex';
    import LoadingAndAlert from '../../components/LoadingAndAlert.vue'
    const router = useRouter();
    const store = useStore();

    const title = ref('');
    const information = ref('');
    const preview = ref(null);
    const image = ref(null);
    const inputFile = ref(0);
    const listChips = ref([])
    const textInformation = ref('')
    const paramsUrl = ref('');
    const oldSlug = ref('');
    const editOrNot = ref(null);

    const state = reactive({
        preview, 
        image, 
        inputFile, 
        information, 
        title, 
        listChips, 
        textInformation, 
        paramsUrl,
        oldSlug,
        editOrNot
    })

    const getDataEditCounterStyle = computed(()=>{
        const data = store.state.getEditCounterStyle
        if(data?.title){
            return data
        }
    })

    const loading = computed(()=>{
        return store.state.loading
    })

    const responseGeneral = computed(()=>{
        return store.state.responseGeneral
    })

    watch( getDataEditCounterStyle,async (newValue, oldValue)=>{
        state.title = newValue.title;
        state.slug = newValue.slug;
        state.listChips = newValue.list_chips;
        state.information = newValue.information;
        state.preview = newValue.image;
        state.oldSlug = newValue.slug
    })

    onMounted(()=>{
        decisionEditOrCreateRuler();
    })

    function decisionEditOrCreateRuler(){
        const payload = router.currentRoute.value.params.slug
        state.paramsUrl = payload;
        if(payload){
            state.editOrNot = true;
            store.dispatch('getEditCounterStyle',payload)
        } 
    }

    function previewImage(event){
        var input = event.target;
        if (input.files) {
            var reader = new FileReader();
            reader.onload = (e) => {
                state.preview = e.target.result;
            }
            state.image=input.files[0];
            reader.readAsDataURL(input.files[0]);
        }
    }

    function removeImage(){
        state.preview = null;
        inputFile.value.value = ""
    }

    function generateChips(){
        state.listChips=[];
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
    }

    function removeChip(index){
        listChips.value.splice(index,1)
    }

    function submit(){
        let slugCreated = ''
        slugCreated = title.value.toLowerCase().replaceAll(' ', '-');

        // *********** i use formData() because  i want send 2 type data (json and file image) 
        let formData = new FormData();
        const getParamsCreate = {
            'title': title.value,
            'slug': slugCreated,
            'information': information.value,
            'list_chips': listChips.value,
        }
        // *********** i use formData() because  i want send 2 type data (json and file image) 
        for (const key in getParamsCreate) {
            formData.append(key, getParamsCreate[key])
        }


        if(!editOrNot.value){
            formData.append('image', image.value);
            store.dispatch('createCounterStyle', formData)
            state.editOrNot = false
        } else {
            formData.append('image', preview.value);
            // add function spoofing because laravel not know about method Put, Patch, Delete
            formData.append('_method', 'PUT');
            formData.append('old-slug', oldSlug.value)
            const data ={
                slug:slugCreated,
                form:formData
            } 
            store.dispatch('editCounterStyle', data)
            state.editOrNot = false
        }
    }

    // for make dummy datapayload
    function createPayload(){
        // payload dummy created
        state.title = "example deck"
        state.slug = "example-deck"
        state.image = "still development"
        // const inputBody =  document.querySelector("#inputBody");
        // inputBody.innerHTML = "1. testing flow"
        state.information = "1. testing flow"
        state.listChips = ["testing-flow", "testing creeation"]

        // sweet alert funcionalty
        // Swal.fire({
        //     title: "Good job!",
        //     text: "You clicked the button!",
        //     icon: "success"
        // });
    }
</script>

<style>
button {
  font-weight: bold;
}

.ql-toolbar{
    background-color: #e2e5e7;
}

.image-preview-wrap {
    width: 200px;
}
.image-preview-wrap .image-preview{
    width: 200px;
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
</style>