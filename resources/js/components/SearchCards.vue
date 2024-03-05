<template>
    <div
      :class="props.openModal?'modal-wrapper':'modal-wrapper-none'"
      id="SearchCards"
    >
      <div class="card-search-cards">
        <div class="content-card-search-cards">
          <div class="container">
            <div class="row align-items-center mb-3 py-1 header-card">
              <div class="col justify-content-start">
                <h5>Cards</h5>
              </div>
              <div class="col text-right">
                <a style="cursor: pointer" @click="openModalCard(false)">
                  <span class="material-icons" style="font-size: 30px">
                    cancel
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div class="row mb-2">
            <div class="col">
              <input
                type="text"
                class="form-control"
                id="Search"
                aria-describedby="Search"
                placeholder="Search Cards..."
                v-model="inputSearch"
                @keyup="searching($event)"
              />
            </div>
          </div>
          <div class="container mb-2">
            <div class="row">
                <div class="col background-image">
                    <div class="d-flex flex-wrap ml-2 scroller-cards-collect" id="scrollbar1" 
                        v-if="getDataYgoProDeck?.length">
                        <div
                            v-for="(urlImage,index) in getDataYgoProDeck" 
                            :key="index" 
                            class="wrap-card-search-global" 
                        >
                            <img 
                                :src="urlImage?.card_images ? urlImage?.card_images[0]?.image_url_small :'' " 
                                :alt="urlImage.name"
                                @mouseover=" displayCard($event,index,true)" 
                                @mouseleave=" displayCard($event,index,false)"
                                @click="selectedCard(urlImage)"
                                class="image-style"
                                ref="imagePosition"
                            >
                            <div class="hover-card" ref="hoverCardTemplate">
                                <template v-if="urlImage.frameType !== 'trap' && urlImage.frameType !== 'spell'">
                                    <div class="d-flex card-monster">
                                        <div class="image-section">
                                            <img :src="urlImage?.card_images ? urlImage?.card_images[0]?.image_url_small:''" :alt="urlImage.name" >
                                        </div>
                                        <div class="information-section">
                                            <div class="row mb-2">
                                                <div class="col-7 mr-auto">
                                                    <span> <b>{{ urlImage.name }}</b></span>
                                                </div>
                                                <div class="col-5  d-flex justify-content-end ">
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
                                                <span><b>[ {{ urlImage.race }} / {{ utilize.textTypeMonster(urlImage.frameType) }} {{utilize.textEffectMonster(urlImage.frameType)}} ]</b></span>
                                            </div>
                                            <div class="mb-2 description-card">
                                                {{ utilize.decodeHTML(urlImage.desc) }} 
                                            </div>
                                            <div class="mb-2">
                                                <span><b>ATK/</b>{{ urlImage.atk }} <span :innerHTML="utilize.textDef(urlImage.frameType, urlImage.def)"></span></span>   
                                            </div>
                                            <div class="released-card">
                                                <span>Released on Card Set  {{urlImage.card_sets ? urlImage?.card_sets[0]?.set_name: ''}}</span>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                                <template v-if="urlImage.frameType === 'trap' || urlImage.frameType === 'spell'">
                                    <div class="d-flex card-trap-spell">
                                        <div class="image-section">
                                            <img :src="urlImage?.card_images ? urlImage?.card_images[0]?.image_url_small :''" :alt="urlImage.name" >
                                        </div>
                                        <div class="information-section">
                                            <div class="row mb-2">
                                                <div class="col-7 mr-auto">
                                                    <span> <b>{{ urlImage.name }}</b></span>
                                                </div>
                                                <div class="col-5  d-flex justify-content-end ">
                                                    <span class="mr-1"> <b>{{ utilize.textTypeMonster(urlImage.frameType)}} - {{ urlImage.race }}</b></span>
                                                </div>
                                            </div>
                                            <div class="mb-2 description-card">
                                                {{ utilize.decodeHTML(urlImage.desc) }} 
                                            </div>
                                            <div class="released-card">
                                                <span>Released on Card Set  {{urlImage.card_sets ? urlImage?.card_sets[0]?.set_name: ''}}</span>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                            </div>
                        </div>
                    </div>
                    <div 
                        class="d-flex justify-content-center"
                        v-if="!getDataYgoProDeck?.length"
                    >
                        <span>Tidak ada kartu yang ke record</span>
                    </div>
                </div>
            </div>
          </div>
          <div class="row" v-if="getDataYgoProDeck?.length">
            <div class="col d-flex justify-content-start align-items-center">
                <div class="mr-4">
                    <button class="button-style-primary mr-2" 
                        @click="nextPage()" 
                        :disabled="!infoPage?.next_page_offset ? '':disabled"> > </button>
                    <button class="button-style-primary" 
                        @click="backPage()" 
                        :disabled="infoPage?.previous_page_offset === undefined  ? '':disabled"> < </button>
                </div>
                <div>
                    <span> {{infoPage?.total_rows - infoPage?.rows_remaining}} of {{infoPage?.total_rows}}</span> 
                </div>
            </div>
          </div>
        </div>
      </div>

      <LoadingAndAlert :loading="loading" :responseGeneral="responseGeneral" @confirm="confirm"></LoadingAndAlert>
    </div>
  </template>
  <script setup>
   import { reactive, ref, computed, onMounted, defineProps, defineEmits } from 'vue';
   import LoadingAndAlert from './LoadingAndAlert.vue';
   import { useStore } from 'vuex';
   import {utilize} from '../utilize/utilize';
   import {collectionUrl} from '../urlCollect';
   const store = useStore();

   const props = defineProps([
      'openModal',
      'dataSelectCards',
   ])
  
   const emit = defineEmits([
      'dataModalCard',
   ]);

   const hoverConditionIndex = ref(0);
   const hoverCondition = ref(false);
   const inputSearch = ref('');
   const num = ref(40);
   const offset = ref(0);
   const valueSearch = ref('');
   const imagePosition = ref(null);
   const hoverCardTemplate = ref(null);
   let searchTimeout;

   const state = reactive([
        'inputSearch',
   ])

   const getDataYgoProDeck = computed(()=>{
    return store?.state?.dataSearchCard?.data ? store?.state?.dataSearchCard?.data : [];
   })

   const infoPage = computed(()=>{
    return store?.state?.dataSearchCard?.meta
   })

   const responseGeneral = computed(()=>{
    return store.state.responseGeneral
   })
  
   onMounted(()=>{
    //******* it make be default search but when app ready to use */
    const payload = {
        mode: 'all-search',
        name: 'inf',
        num: num.value,
        offset: offset.value
    }
    store.dispatch('getSearchCards', payload);
   })
  
  function searching(event){
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(()=>{  
      const input = event.target.value;
      state.inputSearch = input;
      offset.value = 0;

      if(input){
          store.state.dataSearchCard = {}
          valueSearch.value = utilize.characterEncodingUrl(input);
            triggerSearchGlobal();
      }
      event.preventDefault();
    }, 800)
  }
  
  function openModalCard (value) {
      emit('dataModalCard',value)
  }

  function displayCard($event, index, condition ){
        hoverCondition.value = condition;
        hoverConditionIndex.value  = index;
        createdStyleCardHover($event, index, condition)
  };

  function createdStyleCardHover($event, index, condition){
        // ********** get data position image 
        const { top, right, bottom, left } = imagePosition.value[index].getBoundingClientRect();
        const detectWidthMonitor = window.innerWidth;
        let positionLeft = 0;
        let positionTop =  0;
        const data = index+1;
        let listCardSelector = document.querySelector(`.wrap-card-search-global:nth-child(${data}) .hover-card`);
        // trial add before
        // let listCardSelectorBefore = document.querySelector(`.wrap-card:nth-child(${data}) .hover-card::before`);
        if (condition){
            if(detectWidthMonitor >= 1910){            
                positionLeft = left-606;
                positionTop =  top-206;
            } else if (detectWidthMonitor >= 1200 && detectWidthMonitor<1910){
                positionLeft = left-413;
                positionTop =  top-196;
            }

            //********* */ try to fixing when i scroll on botom scroll can display hover on top 
            // if(detectHeightMonitor < 752 &&  $event.clientY > 530){
            //     const getHeightElementCardHover = hoverCardTemplate.value[index].offsetHeight;
            //     console.log("getHeightElementCardHover = ");
            //     console.log(getHeightElementCardHover);
            //     positionTop = positionTop - 234;
            //     listCardSelector.style.top = `${positionTop}px`;

            // } else {
            //     listCardSelector.style.left = `${positionLeft}px`;
            //     listCardSelector.style.top = `${positionTop}px`;
            // }

            listCardSelector.style.maxWidth= '500px';
            listCardSelector.style.minWidth= '500px';
            listCardSelector.style.padding= '8px';
            listCardSelector.style.borderRadius= '8px';
            listCardSelector.style.backgroundColor= 'rgba(0, 0, 0, 0.85)';
            listCardSelector.style.zIndex='99';
            listCardSelector.style.left = `${positionLeft}px`;
            listCardSelector.style.top = `${positionTop}px`;
            listCardSelector.style.position='absolute';
            listCardSelector.style.marginRight = '12px';
            listCardSelector.style.display = 'block';
            listCardSelector.style.color = 'white';
            listCardSelector.style.fontSize = '13px';

            //********* */ trial add before
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

    function nextPage(){
        // state.inputSearch = inputSearch.value;
        offset.value = offset.value+40;
        triggerSearchGlobal();
    }

    function backPage(){
        // state.inputSearch = inputSearch.value;
        offset.value = offset.value-40;
        triggerSearchGlobal();
    }

    function triggerSearchGlobal(){
        const payload = {
            mode: 'all-search',
            name: valueSearch.value,
            num: num.value,
            offset: offset.value
        }
        store.dispatch('getSearchCards', payload)
    }

    const loading = computed(()=>{
        return store.getters.getterStateLoading;
    })

     function selectedCard(data){
        const urlParameters= utilize.characterEncodingUrl(data.name);
        window.open(`${collectionUrl.baseUrlHead}detail-one-card/${urlParameters}`);
     }

  </script>
  <style scoped>
  /* * {
    scrollbar-width: thin;
    scrollbar-color: blue orange;
  } */

  #scrollbar1::-webkit-scrollbar {
    width: 6px;
  }

  #scrollbar1::-webkit-scrollbar-track {
        border-radius: 4px;
        background-color: #0C345A;
        border: 2px solid #0C345A;
  }

    #scrollbar1::-webkit-scrollbar-thumb {
        border-radius: 4px;
        border: 2px solid transparent;
        background-clip: content-box;
        background-color: #194773;
    }
  .modal-wrapper-none {
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
  .card-search-cards {
    display: grid;
    place-items: center;
    grid-template-rows: 0fr 0fr;
  }
  .content-card-search-cards {
    margin-top: 1.5rem;
    width: 530px;
    height: 100%;
    padding: 6px 6px 0px 6px;
    background-color: #0b365e;
    border-radius: 8px;
    border: solid 1px #385979;
  }
  
  .header-card {
    border-bottom: solid 3px #385979;
  }

  .wrap-card-search-global .hover-card{
    display: none;
    position: relative;
  }

  .background-image{
        background-color: #03182c;
        border-radius: 10px;
        padding: 10px;
    }
    .background-image .image-style{
        max-width: 95px;
        padding-right: 8px;
        cursor: pointer;
        padding-top:4px;
        cursor: pointer;
    }

    .wrap-card-search-global .hover-card{
        display: none;
        position: relative;
    }
    
    .wrap-card-search-global .non-hover-card{
        display: none;
    }

    .hover-card .image-section img{
        width: 160px !important;
        height: 230px;
        margin-right: 0.75rem;
    }

    .information-section{
        max-width: 320px;
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

    .scroller-cards-collect{
        max-height: 32rem;
        overflow: auto;
    }
    .description-card{
        min-height: 9.4rem;
        text-align: justify;
    }


  </style>
  