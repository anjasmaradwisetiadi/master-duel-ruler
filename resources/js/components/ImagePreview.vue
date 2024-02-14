<template>
    <div :class="props.openModal?'modal-wrapper':'modal-wrapper-none'" id="ImagePreview">
        <template v-if="dataHasSelected">
            <div class="close-section">
                <a  style="cursor: pointer;"
                    @click="openModalCard(false)"  >
                    <span 
                        class="material-icons" 
                        style="font-size: 36px"
                    >   
                        cancel
                    </span>
                </a>
            </div>
            <div class="content-section">
                <template v-if="dataHasSelected.frameType !== 'trap' && dataHasSelected.frameType !== 'spell'">
                    <div class="card-monster-preview wrap-card-currently">
                        <div class="d-flex justify-content-center">
                            <div class="mb-3">
                                    <h3 class=" name-card"> <b>{{ dataHasSelected?.name }}</b></h3>
                            </div>
                        </div>
                        <div class="d-flex">
                            <div class="image-section">
                                <img :src="dataHasSelected?.card_images[0]?.image_url" :alt="dataHasSelected?.name" >
                            </div>
                            <div class="information-section">
                                <div class="mb-2 d-flex">
                                    <span class="mr-3"> <b>{{ dataHasSelected?.attribute }}</b></span>
                                    <span class="wrap-star" v-if="dataHasSelected?.frameType === 'xyz'">
                                        <img src="../../assets/image/rank-icon.webp" alt="rank">
                                        <span>{{ dataHasSelected?.level }}</span>
                                    </span>
                                    <span class="wrap-star" v-else-if="dataHasSelected?.frameType === 'link'">
                                        <span>Link - {{ dataHasSelected?.linkval }}</span>
                                    </span>
                                    <span class="wrap-star" v-else>
                                        <img src="../../assets/image/star-icon.webp" alt="star">
                                        <span>{{ dataHasSelected?.level }}</span>
                                    </span>
                                </div>
                                <div class="mb-2">
                                    <span><b>[ {{ dataHasSelected?.race }} / {{ textTypeMonster(dataHasSelected?.frameType) }} {{textEffectMonster(dataHasSelected?.frameType)}} ]</b></span>
                                </div>
                                <div class="mb-2">
                                    {{ decodeHTML(dataHasSelected.desc) }} 
                                </div>
                                <div class="mb-1">
                                    <span><b>ATK/</b>{{ dataHasSelected?.atk }} <span :innerHTML="textDef(dataHasSelected?.frameType, dataHasSelected?.def)"></span></span>   
                                </div>
                                <div class="released-card mb-2">
                                    <span>Released on Card Set  {{dataHasSelected?.card_sets[0]?.set_name}}</span>
                                </div>

                            </div>
                        </div>
                    </div>  
                </template>  
                <template v-if="dataHasSelected.frameType === 'trap' || dataHasSelected.frameType === 'spell'">
                    <div class="card-trap-spell-preview wrap-card-currently">
                        <div class="d-flex justify-content-center">
                            <div class="mb-3">
                                    <h3 class=" name-card"> <b>{{ dataHasSelected?.name }}</b></h3>
                            </div>
                        </div>
                        <div class="d-flex">
                            <div class="image-section">
                                <img :src="dataHasSelected?.card_images[0]?.image_url" :alt="dataHasSelected?.name" >
                            </div>
                            <div class="information-section">
                                <div class="row mb-2">
                                    <div class="col-8 mr-auto">
                                        <span> <b>{{ dataHasSelected.name }}</b></span>
                                    </div>
                                    <div class="col-4 ml-auto ">
                                        <span class="mr-1"> <b>{{ textTypeMonster(dataHasSelected.frameType)}} - {{ dataHasSelected.race }}</b></span>
                                    </div>
                                </div>
                                <div class="mb-2">
                                    {{ decodeHTML(dataHasSelected.desc) }} 
                                </div>
                                <div class="released-card mb-2">
                                    <span>Released on Card Set  {{dataHasSelected.card_sets[0].set_name}}</span>
                                </div>
                            </div>
                        </div>
                    </div>  
                </template>  
            </div>
        </template>       
    </div>
</template>
<script setup>
    import { ref, reactive, computed, onMounted, defineProps, defineEmits } from 'vue'

    const props = defineProps([
        'openModal',
        'dataSelectCards',
     ])

     const emit = defineEmits([
        'dataModalCard',
     ]);


    onMounted(()=>{
    
    })

    const dataHasSelected = computed(()=>{
        return props.dataSelectCards;
    })

    function openModalCard (value, index=0) {
        emit('dataModalCardPreview',value)
    }

    //  ********** formation name text reusable
    function textTypeMonster(data){
        if( data === 'link' || data === 'xyz' ){
            return data.toUpperCase();
        } else {
            return data[0].toUpperCase()+data.substr(1).toLowerCase();
        }
     }

     function textEffectMonster(data){
        return data !== 'effect' ? '/ Effect' : ''
     }

     function decodeHTML(htmlText){
        let txt = document.createElement("textarea");
        txt.innerHTML = htmlText;
        return txt.value;
     }

     function textDef(type,def=0){
        let txt = document.createElement("textarea");
        let htmlText = type === 'link' ? '' : `<b>DEF/</b>${def}`
        txt.innerHTML = htmlText;
        return txt.value;
     }
</script>
<style scoped>
        .modal-wrapper-none{
        display: none;
    }
    .modal-wrapper {
        position: fixed;
        left: 0;
        top: 0;
        z-index: 999;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.4);
        display: grid;
        /* place-items: center; */
    }

    .wrap-card-currently {
        background-color: #0D2F4E;
        padding: 14px;
        border-radius: 10px;
    }

    .modal-wrapper .close-section{
        display: grid;
        justify-items: end;
        margin-top: 1.5rem;
        margin-right: 2rem;
        grid-template-rows: 0.1fr 0.1fr;
    }

    .modal-wrapper .content-section{
        display: grid;
        place-items: center;
        grid-template-rows: 0fr 0fr;
    }

    .modal-wrapper .image-section img{
        width: 210px;
        margin-right: 0.75rem;
    }

    .modal-wrapper .information-section {
        width: 30rem;
        padding: 8px;
        background-color: #175188;
        border-radius: 10px;
    }

    .released-card {
        display: flex;
        justify-content: end;
    }
    
    .modal-wrapper .information-section .wrap-star {
        display: flex;
        align-items: center;
    }

    .modal-wrapper .information-section .name-card {
        font-size: 22px;
    }
    .modal-wrapper .information-section .wrap-star img{
        width: 20px;
        height: 20px;
        margin-right: 6px;
    }
</style>