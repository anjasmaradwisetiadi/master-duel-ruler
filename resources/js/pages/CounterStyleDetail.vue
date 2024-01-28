<template>
    <div id="CounterStyleDetail" class="mt-4">
        <div class="row justify-content-center mb-5">
            <div class="col-8 text-center">
                <h1>Khastira</h1>
            </div>
        </div>
        <div class="row mb-1">
            <div class="col">
                <button type="button" class="btn btn-warning mr-2">Edit Counter Style</button>
                <button type="button" class="btn btn-danger">Delete Counter Style</button>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <h5>Information: </h5>
                <div class="card">
                    <div class="card-body">
                        1. negate kartu monster "Kashtira Unicorn" ketika dia mengaktifkan effect add kartu ke tangan. <br>
                        2. ketika kita punya kartu monster "Nibiru" tunggu sampai di panggil monster "Kashtira Arise-Heart" 
                    </div>
                </div>
            </div>
        </div>
        <div class="row justify-content-center mt-3">
            <div class="col-9 background-image">
                    <div class="d-flex">
                        <img v-for="(urlImage,index) in urlImages" :key="index" :src="urlImage.image" :alt="urlImage.name" >
                    </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router'
const router = useRouter();

const urlImages = ref([
    {
        image:"https://images.ygoprodeck.com/images/cards/48626373.jpg",
        name: "Khastira Rise Heart",
        update:"1-Jan-2024"
    },
    {
        image:"https://images.ygoprodeck.com/images/cards/6983839.jpg",
        name: "Dragon Tornado",
        update:"1-Jan-2024"
    },
    {
        image:"https://images.ygoprodeck.com/images/cards/48626373.jpg",
        name: "Khastira",
        update:"1-Jan-2024"
    },
])

onMounted(()=>{
    console.log("ini routing = ")
    console.log(router.currentRoute.value.path)
})
</script>
<style>
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
        padding: 10px;
    }
    .background-image img{
        max-width: 95px;
        padding-right: 8px;
    }
</style>