<template>
    <div id="MainExtraDeck">
        <!-- main deck -->
            <!-- head list deck builder -->
            <div class="row mt-2">
                <div class="col-4 mr-auto">
                    <h5>Main Deck</h5>
                </div>
                <div class="col-4 text-center">
                    <template v-if="dataDeckBuilder?.price.total_rarity_UR">
                        <div class=" d-flex price-wrap">
                            <div class="d-flex align-items-center">

                                <img class="image-rarity" src="../../assets/image/cp-ur-rarity.webp" alt="cp-ur-rarity">
                                <span class="ml-2">
                                    {{dataDeckBuilder.price.total_rarity_UR}}
                                </span>
                            </div>
                            <div class="mx-2">
                                +
                            </div>
                            <div class="d-flex align-items-center">
                                <img class="image-rarity" src="../../assets/image/cp-sr-rarity.webp" alt="cp-sr-rarity">
                                <span class="ml-2">
                                    {{dataDeckBuilder.price.total_rarity_SR}}
                                </span>
                            </div>
                        </div>
                    </template>
                    <template v-if="!dataDeckBuilder?.price.total_rarity_UR">
                        <div>
                            
                        </div>
                    </template>
                </div>
                <div class="col-4 text-right">
                    {{ dataDeckBuilder.total_card.total_card_main_deck }} Cards
                </div>
            </div>
            <!-- column list deck builder -->
            <div class="row">
                <div class="col">
                    <div class="background-image">
                        <div class="d-flex flex-wrap"
                            v-if="dataDeckBuilderLength.length"
                        >
                            <div v-for="(mainDeck, index) of mainDeckCards" :key="index">
                                {{mainDeck?.name}}, 
                            </div>
                        </div>

                        <div class="d-flex justify-content-center"
                            v-if="!dataDeckBuilderLength.length"
                        >
                            <span>Tidak ada kartu yang ke record</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- extra deck -->
            <!-- head list deck builder -->
            <div class="row mt-4">
                <div class="col-6 mr-auto">
                    <h5>Extra Deck</h5>
                </div>
                <div class="col-6 text-right">
                    {{ dataDeckBuilder.total_card.total_card_extra_deck }} Cards
                </div>
            </div>
            <div class="row"> 
                <div class="col">
                    <div class="background-image">
                        <div class="d-flex flex-wrap "
                            v-if="dataDeckBuilderLength.length"
                        >
                            <div v-for="(extraDeck, index) of extraDeckCards" :key="index">
                                {{extraDeck?.name}}, 
                            </div>
                        </div>

                        <div class="d-flex justify-content-center"
                            v-if="!dataDeckBuilderLength.length"
                        >
                            <span>Tidak ada kartu yang ke record</span>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>
<script setup>
     import { ref, computed, onMounted, defineProps, defineEmits } from 'vue';
     import { useStore } from 'vuex'
     import {utilize} from '../utilize/utilize';
     const store = useStore();
     const props = defineProps([
        'dataDeckBuilder',
        'dataDeckBuilderLength',
     ])
     
    //  const emit = defineEmits([
    //     'dataModalCard',
    //  ]);

    const mainDeckCards = computed(()=>{
        return store.getters.getterdataDeckBuilderMainDeck;
    })
    const extraDeckCards = computed(()=>{
        return store.getters.getterdataDeckBuilderExtraDeck;
    })

     onMounted(()=>{
        // console.log("mainDeckCards = ");
        // console.log(mainDeckCards);
     })
</script>
<style scoped>
    #MainExtraDeck{
        min-height: 20rem;
    }

    .price-wrap .image-rarity{
        width: 20px;
        height: 20px;
    }
    .background-image{
        background-color: #03182c;
        border-radius: 10px;
        padding: 10px;
    }
    .background-image .image-style{
        max-width: 92px;
        padding-right: 6px;
        cursor: pointer;
    }
    .background-image .hover-card .image-section img{
        width: 160px !important;
        margin-right: 0.75rem;
    }
</style>