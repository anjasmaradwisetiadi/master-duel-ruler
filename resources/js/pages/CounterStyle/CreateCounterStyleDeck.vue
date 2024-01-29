<template>
    <div id="CreateCounterStyleDeck" class="mt-4">
        <div class="row justify-content-center">
            <div class="col-6 text-center">
                <h3>Create Counter Style Deck</h3>
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
                <input id="inputBody" type="hidden" name="body" value="{{old('body')}}" required>
                <trix-editor input="inputBody" class="" style="border: 1 solid red !important;" v-model="information"></trix-editor>
            </div>
            <div class="form-group">
                <label for="chips">Chips File</label>
                <div id="chips" aria-describedby="chips">
                    <div class="mb-1">
                        <button type="button" class="btn btn-secondary"><a :href="urlCreateDeck" class="add-new-counter-link">Generate Chips File</a></button>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="chip mr-2 mt-2" v-for="(chip, index) in dummyListChips" :key="index">
                                {{ chip }}
                                <span class="closebtn" onclick="removeChips(index)">&times;</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, reactive, defineModel } from 'vue'

    const count = ref(0);
    const title = defineModel('title');
    const information = defineModel('information');
    const preview = ref(null);
    const image = ref(null);
    const inputFile = ref(0);
    const dummyListChips = ref(['Budi', 'Johny', 'Starlink','Merkurie','Budi', 'Johny', 'Starlink','Merkurie','Budi', 'Johny', 'Starlink','Merkurie','Budi', 'Johny', 'Starlink','Merkurie','Budi', 'Johny', 'Starlink','Merkurie'])

    const state = reactive({
        preview, image, inputFile
    })

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

    function removeChips(index){

    }

</script>

<style>
button {
  font-weight: bold;
}

trix-toolbar [data-trix-button-group ="text-tools"]{
    background-color: white !important;
}
trix-toolbar [data-trix-button-group ="block-tools"]{
    background-color: white;
}
trix-toolbar [data-trix-button-group ="file-tools"]{
    display: none;
}
trix-toolbar [data-trix-button-group ="history-tools"]{
    background-color: white;
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