<template>
    <div id="SearchCardsSeparate">
      <div class="container mb-2">
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
        <div class="row">
          <div class="col">
            <div class="background-image">
              <div
                class="d-flex flex-wrap ml-2 scroller-cards-collect"
                id="scrollbar1"
                v-if="getDataYgoProDeck?.length"
              >
                <div
                  v-for="(urlImage,index) in getDataYgoProDeck"
                  :key="index"
                  class="wrap-card-search-deck-builder"
                >
                  <img
                    :src="urlImage?.card_images ? urlImage?.card_images[0]?.image_url_small :'' "
                    :alt="urlImage.name"
                    @mouseover=" displayCard($event,index,true)"
                    @mouseleave=" displayCard($event,index,false)"
                    @click="selectedCard(urlImage)"
                    class="image-style"
                    ref="imagePosition"
                  />
                  <div 
                    v-show="conditionHover"
                    class="hover-card" 
                    ref="hoverCardTemplate"
                  >
                    <template
                      v-if="urlImage.frameType !== 'trap' && urlImage.frameType !== 'spell'"
                    >
                      <div class="d-flex card-monster">
                        <div class="image-section">
                          <img
                            :src="urlImage?.card_images ? urlImage?.card_images[0]?.image_url_small:''"
                            :alt="urlImage.name"
                          />
                        </div>
                        <div class="information-section">
                          <div class="row mb-2">
                            <div class="col-7 mr-auto">
                              <span>
                                <b>{{ urlImage.name }}</b></span
                              >
                            </div>
                            <div class="col-5 d-flex justify-content-end">
                              <span class="mr-1">
                                <b>{{ urlImage.attribute }}</b></span
                              >
                              <span
                                class="wrap-star"
                                v-if="urlImage.frameType === 'xyz'"
                              >
                                <img
                                  src="../../assets/image/rank-icon.webp"
                                  alt="rank"
                                />
                                <span>{{ urlImage.level }}</span>
                              </span>
                              <span
                                class="wrap-star"
                                v-else-if="urlImage.frameType === 'link'"
                              >
                                Link -
                                <span>{{ urlImage.linkval }}</span>
                              </span>
                              <span class="wrap-star" v-else>
                                <img
                                  src="../../assets/image/star-icon.webp"
                                  alt="star"
                                />
                                <span>{{ urlImage.level }}</span>
                              </span>
                            </div>
                          </div>
                          <div class="mb-2">
                            <span
                              ><b
                                >[ {{ urlImage.race }} /
                                {{ utilize.textTypeMonster(urlImage.frameType) }}
                                {{utilize.textEffectMonster(urlImage.frameType)}}
                                ]</b
                              ></span
                            >
                          </div>
                          <div class="mb-2 description-card">
                            {{ utilize.decodeHTML(urlImage.desc) }}
                          </div>
                          <div class="mb-2">
                            <span
                              ><b>ATK/</b>{{ urlImage.atk }}
                              <span
                                :innerHTML="utilize.textDef(urlImage.frameType, urlImage.def)"
                              ></span
                            ></span>
                          </div>
                          <div class="released-card">
                            <span
                              >Released on Card Set
                              {{urlImage.card_sets ? urlImage?.card_sets[0]?.set_name: ''}}</span
                            >
                          </div>
                        </div>
                      </div>
                    </template>
                    <template
                      v-if="urlImage.frameType === 'trap' || urlImage.frameType === 'spell'"
                    >
                      <div class="d-flex card-trap-spell">
                        <div class="image-section">
                          <img
                            :src="urlImage?.card_images ? urlImage?.card_images[0]?.image_url_small :''"
                            :alt="urlImage.name"
                          />
                        </div>
                        <div class="information-section">
                          <div class="row mb-2">
                            <div class="col-7 mr-auto">
                              <span>
                                <b>{{ urlImage.name }}</b></span
                              >
                            </div>
                            <div class="col-5 d-flex justify-content-end">
                              <span class="mr-1">
                                <b
                                  >{{ utilize.textTypeMonster(urlImage.frameType)}}
                                  - {{ urlImage.race }}</b
                                ></span
                              >
                            </div>
                          </div>
                          <div class="mb-2 description-card">
                            {{ utilize.decodeHTML(urlImage.desc) }}
                          </div>
                          <div class="released-card">
                            <span
                              >Released on Card Set
                              {{urlImage.card_sets ? urlImage?.card_sets[0]?.set_name: ''}}</span
                            >
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
        <div class="row mt-2" v-if="getDataYgoProDeck?.length">
            <div class="col-5 d-flex justify-content-start align-items-center">
                <div class="mr-2">
                    <button
                        class="button-style-primary mr-2"
                        @click="nextPage()"
                        :disabled="!infoPage?.next_page_offset ? '':disabled"
                    >
                        >
                    </button>
                    <button
                        class="button-style-primary"
                        @click="backPage()"
                        :disabled="infoPage?.previous_page_offset === undefined  ? '':disabled"
                    >
                        <
                    </button>
                </div>
                <div>
                    <span>
                    {{infoPage?.total_rows - infoPage?.rows_remaining}} of
                    {{infoPage?.total_rows}}</span
                    >
                </div>
            </div>
            <div class="col-3">
              <button class="btn" 
                :class="conditionHover ? 'btn-info' : 'btn-secondary'" 
                @click="conditionHover = !conditionHover"> 
                  {{conditionHover ? 'hover on' : 'hover off' }}
              </button>
            </div>
            <div class="col-4 d-flex justify-content-end text-center">
                <div ref="ClassList" >
                    <span v-show="props?.fullCardLoad?.value < 3 && props?.fullCardLoad?.value >= 1">
                        {{props?.fullCardLoad?.value}} card added
                    </span>
                    <span v-show="props?.fullCardLoad?.value === 3"> limit reached </span>
                </div>
            </div>
      </div>
      </div>
      <LoadingAndAlert :loading="loading" :responseGeneral="responseGeneral" @confirm="confirm"></LoadingAndAlert>
    </div>
  </template>
  <script setup>
  import { ref, reactive, computed, onMounted, defineEmits, defineProps, watch } from 'vue';
  import { useStore } from 'vuex';
  import { useRouter } from 'vue-router';
  import LoadingAndAlert from './LoadingAndAlert.vue';
  import Swal from 'sweetalert2';
  import { utilize } from '../utilize/utilize';
  const router = useRouter();
  const store = useStore();
  
  const inputSearch = ref('');
  const imagePosition = ref(null);
  const num = ref(40);
  const offset = ref(0);
  const valueSearch = ref('');
  const hoverCardTemplate = ref(null);
  const hoverCondition = ref(false);
  const hoverConditionIndex = ref(0);
  let searchTimeout = '';
  const ClassList = ref(null);
  const conditionHover = ref(true);
  
  const props = defineProps([
    'fullCardLoad'
  ])
  const emit = defineEmits([
      'selectedCard',
      'emitFullCardLoad'
  ])
  
  const state = reactive({
      inputSearch
  })  
  
  watch(props?.fullCardLoad, (newValue, oldValue)=>{
      let el = ClassList.value;
      el.classList.add('smooth-animation');
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(()=>{
        const data ={
          condition: false,
          value: 0
        }
        el.classList.remove('smooth-animation');
        emit('emitFullCardLoad', data)
      }, 300);
    //   fullCardLoad.condition = false;
  })
  
  onMounted(()=>{
      /******* it make be default search but when app ready to use */
      const payload = {
          mode: 'all-search',
          name: 'hero',
          num: num.value,
          offset: offset.value
      }
      store.dispatch('getSearchCards', payload);
  })
  
  const responseGeneral = computed(()=>{
      return store?.state?.responseGeneral;
  })
  
  const getDataYgoProDeck = computed(()=>{
      return store?.state?.dataSearchCard.data;
  })
  
  const infoPage = computed(()=>{
      return store?.state?.dataSearchCard?.meta
  })
  
  const loading = computed(()=>{
      return store.getters.getterStateLoading;
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
      let listCardSelector = document.querySelector(`.wrap-card-search-deck-builder:nth-child(${data}) .hover-card`);
      // trial add before
      // let listCardSelectorBefore = document.querySelector(`.wrap-card:nth-child(${data}) .hover-card::before`);
      if (condition && conditionHover.value){
          if(detectWidthMonitor >= 1910){
              positionLeft = left-301;
              positionTop =  top-320;
          } else if (detectWidthMonitor >= 1200 && detectWidthMonitor<1910){
              positionLeft = left-110;
              positionTop =  top-329;
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
      } else{
          listCardSelector.style.position='relative';
          listCardSelector.style.display = 'none';
      }
  }
  
  
  function selectedCard(data){
      emit('selectedCard', data);
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
      store.dispatch('getSearchCards', payload);
  }
  </script>
  
  <style scoped>
  #SearchCardsSeparate{
    z-index: 99;
  }
  /* stryle seacrh global image */
  #scrollbar1::-webkit-scrollbar {
    width: 6px;
  }
  
  #scrollbar1::-webkit-scrollbar-track {
    border-radius: 4px;
    background-color: #0c345a;
    border: 2px solid #0c345a;
  }
  
  #scrollbar1::-webkit-scrollbar-thumb {
    border-radius: 4px;
    border: 2px solid transparent;
    background-clip: content-box;
    background-color: #194773;
  }
  .background-image {
    background-color: #03182c;
    border-radius: 10px;
    padding: 10px;
    z-index: 2;
    position: relative;
  }
  .background-image .image-style {
    max-width: 95px;
    padding-right: 8px;
    cursor: pointer;
    padding-top: 4px;
    cursor: pointer;
  }
  
  .wrap-card-search-deck-builder .non-hover-card {
    display: none;
  }
  
  .wrap-card-search-deck-builder .hover-card {
    display: none;
    position: relative;
  }
  
  .hover-card .image-section img {
    width: 150px !important;
    height: 210px;
    margin-right: 0.75rem;
  }
  
  .information-section {
    max-width: 320px;
  }
  
  .hover-card .information-section .wrap-star img {
    width: 16px;
    height: 16px;
    margin-right: 4px;
    margin-top: -4px;
  }
  
  .hover-card .information-section .wrap-star img {
    width: 16px;
    height: 16px;
    margin-right: 4px;
    margin-top: -4px;
  }
  
  .description-card {
    min-height: 9.4rem;
    text-align: justify;
  }
  
  .scroller-cards-collect {
    max-height: 32rem;
    overflow: auto;
  }
  
  .smooth-animation {
    width: 120px;
    height: 42px;
    border-radius: 10px;
    background-color: #3498db;
    opacity: 0;
    z-index: 1;
    padding-top: 18px;
    top: -24px !important;
    position: absolute;
    animation-name: example;
    animation-duration: 0.4s; 
    animation-iteration-count: 1;
  }
  
  @keyframes example {
    0% {
      opacity: 1;
    }
    25% {
      opacity: 1;
    }
    50% {
      opacity: 1;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }
  </style>

  