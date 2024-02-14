<template>
    <div id="ListImageHover">
        <div class="row justify-content-center mt-3">
            <div class="col-9 background-image">
                    <div class="d-flex" 
                        v-if="getDataYgoProDeck.length">
                        <div
                            v-for="(urlImage,index) in getDataYgoProDeck" 
                            :key="index" 
                            class="wrap-card" 
                            :style="hoverFunctionCard"
                        >
                            <img 
                                :src="urlImage.card_images[0].image_url" 
                                :alt="urlImage.name"
                                @mouseover=" displayCard(index,true)" 
                                @mouseleave=" displayCard(index,false)"
                                @click="openModalCard(true, index)" 
                                class="image-style"
                            >
                            <div class="hover-card">
                                <template v-if="urlImage.frameType !== 'trap' && urlImage.frameType !== 'spell'">
                                    <div class="d-flex card-monster">
                                        <div class="image-section">
                                            <img :src="urlImage.card_images[0].image_url" :alt="urlImage.name" >
                                        </div>
                                        <div class="information-section">
                                            <div class="row mb-2">
                                                <div class="col-8 mr-auto">
                                                    <span> <b>{{ urlImage.name }}</b></span>
                                                </div>
                                                <div class="col-4 ml-auto ">
                                                    <span class="mr-1"> <b>{{ urlImage.attribute }}</b></span>
                                                    <span class="wrap-star" v-if="urlImage.frameType === 'xyz'">
                                                        <img src="../../assets/image/rank-icon.webp" alt="rank">
                                                        <span>{{ urlImage.level }}</span>
                                                    </span>
                                                    <span class="wrap-star" v-else-if="urlImage.frameType === 'link'">
                                                        Link - 
                                                        <span>{{ urlImage.linkval }}</span>
                                                    </span>
                                                    <span class="wrap-star" v-else>
                                                        <img src="../../assets/image/star-icon.webp" alt="star">
                                                        <span>{{ urlImage.level }}</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="mb-2">
                                                <span><b>[ {{ urlImage.race }} / {{ textTypeMonster(urlImage.frameType) }} {{textEffectMonster(urlImage.frameType)}} ]</b></span>
                                            </div>
                                            <div class="mb-2">
                                                {{ decodeHTML(urlImage.desc) }} 
                                            </div>
                                            <div class="mb-2">
                                                <span><b>ATK/</b>{{ urlImage.atk }} <span :innerHTML="textDef(urlImage.frameType, urlImage.def)"></span></span>   
                                            </div>
                                            <div class="released-card">
                                                <span>Released on Card Set  {{urlImage.card_sets[0].set_name}}</span>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                                <template v-if="urlImage.frameType === 'trap' || urlImage.frameType === 'spell'">
                                    <div class="d-flex card-trap-spell">
                                        <div class="image-section">
                                            <img :src="urlImage.card_images[0].image_url" :alt="urlImage.name" >
                                        </div>
                                        <div class="information-section">
                                            <div class="row mb-2">
                                                <div class="col-8 mr-auto">
                                                    <span> <b>{{ urlImage.name }}</b></span>
                                                </div>
                                                <div class="col-4 ml-auto ">
                                                    <span class="mr-1"> <b>{{ textTypeMonster(urlImage.frameType)}} - {{ urlImage.race }}</b></span>
                                                </div>
                                            </div>
                                            <div class="mb-2">
                                                {{ decodeHTML(urlImage.desc) }} 
                                            </div>
                                            <div class="released-card">
                                                <span>Released on Card Set  {{urlImage.card_sets[0].set_name}}</span>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                            </div>
                        </div>
                    </div>
                    <div 
                        class="d-flex justify-content-center"
                        v-if="!getDataYgoProDeck.length"
                    >
                        <span>Tidak ada kartu yang ke record</span>
                    </div>
            </div>
        </div>
    </div>
</template>
<script setup>
     import { ref, computed, onMounted, defineProps, defineEmits } from 'vue';
     import { useStore } from 'vuex';
     import Swal from 'sweetalert2';
     const store = useStore();
     const props = defineProps([
        'getDataYgoProDeck',
        'responseGeneral',
     ])

     const emit = defineEmits([
        'dataModalCard',
     ]);


     const hoverConditionIndex = ref(0);
     const hoverCondition = ref(false);

     onMounted(()=>{
        
     })

     const hoverFunctionCard = computed(()=>{
        return hoverConditionIndex;
     });


     function displayCard(index, condition ){
        hoverCondition.value = condition;
        hoverConditionIndex.value  = index;
        createdStyleCardHover(index, condition)
     };

     function createdStyleCardHover(index, condition){
        const data = index+1;
        let listCardSelector = document.querySelector(`.wrap-card:nth-child(${data}) .hover-card`);
        // trial add before
        // let listCardSelectorBefore = document.querySelector(`.wrap-card:nth-child(${data}) .hover-card::before`);
        if (condition){
            listCardSelector.style.maxWidth= '550px';
            listCardSelector.style.minWidth= '550px';
            listCardSelector.style.padding= '8px';
            listCardSelector.style.borderRadius= '8px';
            listCardSelector.style.backgroundColor= 'rgba(0, 0, 0, 0.85)';
            listCardSelector.style.zIndex='99';
            listCardSelector.style.position='absolute';
            listCardSelector.style.marginRight = '12px';
            listCardSelector.style.top = '-53px';
            listCardSelector.style.display = 'inline';
            listCardSelector.style.color = 'white';
            listCardSelector.style.fontSize = '13px';

            // trial add before
            // listCardSelectorBefore.style.left = 'auto';
            // listCardSelectorBefore.style.right = '0';
            // listCardSelectorBefore.style.borderRight = 'none'
            // listCardSelectorBefore.style.borderLeft = '50px solid transparent'
            // listCardSelectorBefore.style.borderTop = '40px solid #257287'
            // listCardSelectorBefore.style.bottom = '-40px'
            // listCardSelectorBefore.style.position='absolute';
        } else{
            listCardSelector.style.position='relative';
            listCardSelector.style.display = 'none';
        }
     }
     function openModalCard (value, index=0) {
        emit('dataModalCard',{
            dataSelectCards: store.state.dataListChips[index],
            openModal: value
        });

     }

    //  ********** formation name reusable
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
    /* *********** style .wrap-card */
    .date-update{
        font-size: 14px;
    }
    .background-image{
        background-color: #03182c;
        border-radius: 10px;
        padding: 10px;
    }
    .background-image .image-style{
        max-width: 95px;
        padding-right: 8px;
    }
    /* .wrap-card{
        position: relative;
    } */
    .image-style{
        cursor: pointer;
    }
    
    .wrap-card .hover-card{
        display: none;
        position: relative;
    }

    .wrap-card .hover-card{
        display: none;
        position: relative;
    }

    .wrap-card .non-hover-card{
        display: none;
    }

    .background-image .hover-card .image-section img{
        width: 160px !important;
        margin-right: 0.75rem;
    }

    .hover-card .information-section .wrap-star img{
        width: 16px;
        height: 16px;
        margin-right: 4px;
        margin-top:-4px;
    }

    .middle-notice{
        line-height: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
<style>
    .card-body .information-html p{
        padding: 0px !important;
        margin: 0px !important;
    }
</style>