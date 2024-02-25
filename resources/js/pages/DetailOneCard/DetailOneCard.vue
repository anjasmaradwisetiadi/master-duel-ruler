<template>
    <div id="DetailOneCardComponent" class="mt-4">
        <template v-if="getDataOneCard.name">
            <div class="row justify-content-center mb-3">
                <div class="col-9 text-center">
                    <h3 class="name-card"> <b>{{ getDataOneCard?.name }}</b></h3>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-9">
                    <template v-if="getDataOneCard.frameType !== 'trap' && getDataOneCard.frameType !== 'spell'">
                    <div class="card-monster-preview wrap-card-currently">
                        <div class="d-flex">
                            <div class="image-section">
                                <img :src="getDataOneCard?.card_images[0]?.image_url_small" :alt="getDataOneCard?.name" >
                            </div>
                            <div class="information-section">
                                <div class="mb-2 d-flex">
                                    <div class="d-flex mr-auto">
                                        <span class="mr-3"> <b>{{ getDataOneCard?.attribute }}</b></span>
                                    </div>
                                    <div class="d-flex ml-auto">
                                        <span class="wrap-star" v-if="getDataOneCard?.frameType === 'xyz'">
                                            <img src="../../../assets/image/rank-icon.webp" alt="rank">
                                        <span>{{ getDataOneCard?.level }}</span>
                                        </span>
                                        <span class="wrap-star" v-else-if="getDataOneCard?.frameType === 'link'">
                                            <span>Link - {{ getDataOneCard?.linkval }}</span>
                                        </span>
                                        <span class="wrap-star" v-else>
                                            <img src="../../../assets/image/star-icon.webp" alt="star">
                                            <span>{{ getDataOneCard?.level }}</span>
                                        </span>
                                    </div>
                                </div>
                                <div class="mb-2">
                                    <span><b>[ {{ getDataOneCard?.race }} / {{ utilize.textTypeMonster(getDataOneCard?.frameType) }} {{utilize.textEffectMonster(getDataOneCard?.frameType)}} ]</b></span>
                                </div>
                                <div class="mb-2 description-card">
                                    {{ utilize.decodeHTML(getDataOneCard.desc) }} 
                                </div>
                                <div class="mb-1 d-flex">
                                    <div class="d-flex mr-auto">
                                        <span><b>ATK/</b>{{ getDataOneCard?.atk }} <span :innerHTML="utilize.textDef(getDataOneCard?.frameType, getDataOneCard?.def)"></span></span> 
                                    </div>  
                                    <div class="d-flex ml-auto">
                                        <span>Released on Card Set  {{getDataOneCard?.card_sets[0]?.set_name}}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  
                </template>  
                <template v-if="getDataOneCard.frameType === 'trap' || getDataOneCard.frameType === 'spell'">
                    <div class="card-trap-spell-preview wrap-card-currently">
                        <div class="d-flex">
                            <div class="image-section">
                                <img :src="getDataOneCard?.card_images[0]?.image_url_small" :alt="getDataOneCard?.name" >
                            </div>
                            <div class="information-section">
                                <div class="row mb-2">
                                    <div class="col-9">
                                        <span class="mr-1"> <b>{{ utilize.textTypeMonster(getDataOneCard.frameType)}} - {{ getDataOneCard.race }}</b></span>
                                    </div>
                                </div>
                                <div class="mb-2 description-card">
                                    {{ utilize.decodeHTML(getDataOneCard.desc) }} 
                                </div>
                                <div class="released-card">
                                    <span>Released on Card Set  {{getDataOneCard.card_sets[0].set_name}}</span>
                                </div>
                            </div>
                        </div>
                    </div>  
                </template> 
                </div>
            </div>
        </template>
        <LoadingAndAlert :loading="loading" :responseGeneral="responseGeneral"></LoadingAndAlert>
    </div>
</template>
<script setup>
     import { reactive, computed, onBeforeMount } from 'vue';
     import LoadingAndAlert from '../../components/LoadingAndAlert.vue';
     import { useStore } from 'vuex';
     import { useRouter } from 'vue-router';
     import {utilize} from '../../utilize/utilize';
     const store = useStore();
     const router = useRouter();
     
     const getDataOneCard = computed(()=>{
        return store?.state?.oneCardSelected?.data ? store?.state?.oneCardSelected?.data[0] : {};
     })

     const loading = computed(()=>{
        return store.getters.getterStateLoading;
     })

     const responseGeneral = computed(()=>{
        return store?.state?.responseGeneral;
    })

     onBeforeMount(()=>{
        let nameCardOne = router.currentRoute.value.params.name;
        nameCardOne = utilize.characterEncodingUrl(nameCardOne);
        const payload = {
            mode: 'one-search',
            name: nameCardOne,
        }
        store.dispatch('getSearchCards', payload)
     })
</script>
<style scoped>
    .wrap-card-currently {
        border: 3px solid #385979;
        background-color: #0D2F4E;
        padding: 14px;
        border-radius: 10px;
    }

    .name-card {
        font-size: 22px;
    }

    .image-section img{
        width: 210px;
        margin-right: 0.75rem;
    }
    .information-section {
        display: flex;
        flex-direction: column;
        min-height: 290px;
    }

    .information-section .description-card{
        min-height: 15.3rem;
        text-align: justify;
    }

    .information-section .wrap-star {
        display: flex;
        align-items: center;
    }

    .information-section .name-card {
        font-size: 22px;
    }
    .information-section .wrap-star img{
        width: 20px;
        height: 20px;
        margin-right: 6px;
    }

    .released-card {
        display: flex;
        justify-content: flex-end;
    }
</style>