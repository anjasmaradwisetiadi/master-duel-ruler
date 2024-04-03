<template>
    <div id="TierList" class="mt-4">
        <div class="row mb-4">
            <div class="col">
                <div class="tier-list-note">
                    <div class="head">
                        Tier List notes:
                    </div>
                    <div class="note">
                        This Tier List will be updated according to tournament topping decks from all community tournaments
                    </div>
                </div>
            </div>
        </div>
        <template v-for="(data, index) in dataDummyTierList.data" :key="index">
            <div v-if="data.tier_list === 1"  class="border-bottom">
                <div class="row mt-4">
                    <div class="col">
                        <h2 class="tier-list-head">
                            <span class="orange">Tier List</span> <span class="bold yellow">{{data.tier_list}}</span>
                        </h2>
                    </div>
                </div>
                <div class="row mt-2"
                >   
                    <div v-for="(tierData, index) in data.data" :key="index"
                        class="col-3">
                        <div class="card mb-3 card-style">
                            <div class="row no-gutters">
                                <div class="col-md-4 no-gutters">
                                    <img class="image-crop-resize" :src="tierData.image" :alt="tierData.name">
                                </div>
                                <div class="col-md-8">
                                    <div class="ml-3 text-left">
                                        <h6 class="target-style title-card text-center"> {{tierData.name}} </h6>
                                        <div>
                                            <span class="date-update text-muted target-style">Power : </span> <span class="font-power">{{ tierData.power }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="data.tier_list === 2" class="border-bottom">
                <div class="row mt-4">
                    <div class="col">
                        <h2 class="tier-list-head">
                            <span class="orange">Tier List</span> <span class="bold yellow">{{data.tier_list}}</span>
                        </h2>
                    </div>
                </div>
                <div class="row mt-2">
                    <div v-for="(tierData, index) in data.data" :key="index"
                        class="col-3">
                        <div class="card mb-3 card-style">
                            <div class="row no-gutters">
                                <div class="col-md-4 no-gutters">
                                    <img class="image-crop-resize" :src="tierData.image" :alt="tierData.name">
                                </div>
                                <div class="col-md-8">
                                    <div class="ml-3 text-left">
                                        <h6 class="target-style title-card text-center"> {{tierData.name}} </h6>
                                        <div>
                                            <span class="date-update text-muted target-style">Power : </span> <span class="font-power">{{ tierData.power }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="data.tier_list === 3" class="border-bottom">
                <div class="row mt-4">
                    <div class="col">
                        <h2 class="tier-list-head">
                            <span class="orange">Tier List</span> <span class="bold yellow">{{data.tier_list}}</span>
                        </h2>
                    </div>
                </div>
                <div
                    class="row mt-2"
                >
                    <div v-for="(tierData, index) in data.data" :key="index"
                        class="col-3">
                        <div class="card mb-3 card-style">
                            <div class="row no-gutters">
                                <div class="col-md-4 no-gutters">
                                    <img class="image-crop-resize" :src="tierData.image" :alt="tierData.name">
                                </div>
                                <div class="col-md-8">
                                    <div class="ml-3 text-left">
                                        <h6 class="target-style title-card text-center"> {{tierData.name}} </h6>
                                        <div>
                                            <span class="date-update text-muted target-style">Power :</span> <span class="font-power">{{ tierData.power }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>
<script setup>
     import { reactive, computed, onMounted } from 'vue';
     import { useStore } from 'vuex';
     import {dataDummyTierList} from '../DummyDataCard';
     const store = useStore();

     onMounted(()=>{
        
     })
</script>
<style scoped>
.tier-list-note .head{
    font-size: 20px;
}
.orange{
    -webkit-text-stroke: 0.1px #FFE53A;
    color: #F38619;
}
.yellow{
    color: #FFE53A;
    -webkit-text-stroke: 0.1px #FFE53A;
}
.bold-orange{
    font-weight: bold;
}

.border-bottom{
    padding-bottom: 16px !important;
    border-bottom: 2.5px solid #6cc1cd !important;
}

.tier-list-note .note{
    font-size: 16px;
    padding-left: 32px;
}
.tier-list-head {
    font-family: Bebas Neue, sans-serif;
}

.resize-col{
    padding-right: 15px !important;
    padding-left: 0px !important;
}

.card-style {
    border: 3px solid #385979;
    max-height: 90px;
    min-height: 90px;
    background-color: #eff0f1;
    
}

.image-crop-resize{
    max-width: 90px;
    max-height: 86px;
    min-height: 86px;
    border-right: 3px solid #385979;
}

.target-style{
    text-decoration: none !important;
    color: black;
}

.title-card{
    font-weight: bold;
    text-transform: uppercase;
    height: 54px;
}

.date-update{
    font-size: 14px;
}

.border-bottom:last-child{
    border-bottom: none !important;
}

.font-power{
    font-size: 14px;
    font-weight: bold;
    color: #484646;
}
</style>