<template>
    <div id="CounterStyleDeck" class="mt-4">
        <div class="row justify-content-center mb-5">
            <div class="col-8 ">
                <input type="text" class="form-control" id="Search" aria-describedby="Search" placeholder="Search...">
            </div>
        </div>
        <div class="row mb-1">
            <div class="col">
                <button type="button" class="btn btn-secondary">Add New Counter</button>
            </div>
        </div>
        <div class="row">
            <div v-for="(card,index) in Cards" :key="index" class="col-lg-3 col-md-4">
                <div class="card mb-3 card-style">
                    <a :href="urlActive" class="target-style">
                        <div class="row no-gutters">
                        <div class="col-md-4 no-gutters">
                            <img src="../../assets/image/Khastira-Unicorn.png" :alt="card.name">
                        </div>
                        <div class="col-md-8">
                            <!-- <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                            </div> -->
                            <div class="ml-2 text-left">
                                <h4 class="target-style">{{ card.name }}</h4>
                                <span class="date-update text-muted target-style">Update: {{ card.update }}</span>
                            </div>
                        </div>
                    </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router'
import {collectionUrl} from '../urlCollect'
const router = useRouter();

const Cards = ref([
    {
        image:"http://laravel-vue.test/images/Khastira-Unicorn.png?b552a94bb37edf55d611ddae7bae200e",
        name: "Khastira",
        update:"1-Jan-2024"
    },
    {
        image:"http://laravel-vue.test/images/Khastira-Unicorn.png?b552a94bb37edf55d611ddae7bae200e",
        name: "Khastira",
        update:"1-Jan-2024"
    },
    {
        image:"http://laravel-vue.test/images/Khastira-Unicorn.png?b552a94bb37edf55d611ddae7bae200e",
        name: "Khastira",
        update:"1-Jan-2024"
    },
    {
        image:"http://laravel-vue.test/images/Khastira-Unicorn.png?b552a94bb37edf55d611ddae7bae200e",
        name: "Khastira",
        update:"1-Jan-2024"
    }
])

let urlActive = ref(collectionUrl.baseUrlHead+'counter-style-deck/detail');
onMounted(()=>{
    console.log("ini routing testing = ")
    console.log(router.currentRoute)
})
</script>
<style>
    .card{
        color: black;
    }
    .card-style {
        border: 2px solid #03182c;
        max-height: 84px;
        cursor: pointer;
        
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
        font-size: 12px;
    }
    .target-style{
        text-decoration: none !important;
        color: black;
    }
    .target-style:hover{
        text-decoration: none !important;
    }
</style>