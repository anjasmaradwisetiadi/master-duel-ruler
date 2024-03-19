<template>
    <div id="MainExtraDeck">
      <!-- main deck -->
      <!-- head list deck builder -->
      <div class="row">
        <div class="col-4 mr-auto">
          <h5>{{deckType === 'main deck' ? 'Main Deck' : 'Extra Deck'}}</h5>
        </div>
        <div class="col-4 text-center">
          <template
            v-if="dataDeckBuilder?.price?.total_rarity_UR && deckType === 'main deck'"
          >
            <!--********** this code comment because rarity can not implement  -->
            <!-- <div class="d-flex price-wrap">
              <div class="d-flex align-items-center">
                <img
                  class="image-rarity"
                  src="../../assets/image/cp-ur-rarity.webp"
                  alt="cp-ur-rarity"
                />
                <span class="ml-2">
                  {{dataDeckBuilder.price.total_rarity_UR}}
                </span>
              </div>
              <div class="mx-2">+</div>
              <div class="d-flex align-items-center">
                <img
                  class="image-rarity"
                  src="../../assets/image/cp-sr-rarity.webp"
                  alt="cp-sr-rarity"
                />
                <span class="ml-2">
                  {{dataDeckBuilder.price.total_rarity_SR}}
                </span>
              </div>
            </div> -->
          </template>
          <template v-if="!dataDeckBuilder?.price?.total_rarity_UR">
            <div></div>
          </template>
        </div>
        <div class="col-4 text-right">
          <template v-if="props?.displayHover">
            <span >
              {{ deckType === 'main deck' ? dataDeckBuilder?.total_card?.total_card_main_deck :  dataDeckBuilder?.total_card?.total_card_extra_deck}}
            </span>
          </template>
          <template v-if="!props?.displayHover">
            <span>
              {{ deckType === 'main deck' ? totalCardMain :  totalCardExtra}}
            </span>
          </template>
          Cards
        </div>
      </div>
      <!-- column list deck builder -->
      <div class="row">
        <div class="col">
          <div class="background-image">
            <div
              class="d-flex flex-wrap scroller-cards-collect"
              id="scrollbar1"
            >
              <!-- when it need hover for display detail information -->
              <template v-if="props?.dataDeckBuilderLength?.length">
                <template v-if="props?.displayHover && !loading">
                  <div
                    v-for="(urlImage, index) of mainDeckCards"
                    :key="index"
                    class="wrap-card-search-main-extra" 
                    :class="deckType === 'main deck' ? 'wrap-card-search-main-deck' : 'wrap-card-search-extra-deck'"
                    id="wrap-card-search-main-extra"
                  >
                    <div
                      class="wrap-hover-image"
                      ref="imagePosition"
                      @mouseover=" displayCard($event,index,true)"
                      @mouseleave=" displayCard($event,index,false)"
                    >
                    <div class="wrap-image-display">
                      <img
                          :src="urlImage?.card_images ? urlImage?.card_images[0]?.image_url_small :'' "
                          :alt="urlImage?.name"
                          @click="selectedCard(urlImage)"
                          class="image-style"
                      />
                      <img v-if="urlImage.value === 2" class="image-card-value"  src="../../assets/image/2-card.webp"  alt="2-card">
                      <img v-if="urlImage.value === 3" class="image-card-value"  src="../../assets/image/3-card.webp"  alt="3-card">
                    </div>
                    <div class="hover-card" ref="hoverCardTemplate">
                      <template
                        v-if="urlImage.frameType !== 'trap' && urlImage.frameType !== 'spell'"
                      >
                        <div class="d-flex card-monster">
                          <div class="image-section">
                            <img
                              :src="urlImage?.card_images ? urlImage?.card_images[0]?.image_url_small:''"
                              :alt="urlImage?.name"
                            />
                          </div>
                          <div class="information-section">
                            <div class="row mb-2">
                              <div class="col-8 mr-auto">
                                <span>
                                  <b>{{ urlImage?.name }}</b></span
                                >
                              </div>
                              <div class="col-4 ml-auto">
                                <span class="mr-1">
                                  <b>{{ urlImage?.attribute }}</b></span
                                >
                                <span
                                  class="wrap-star"
                                  v-if="urlImage?.frameType === 'xyz'"
                                >
                                  <img
                                    src="../../assets/image/rank-icon.webp"
                                    alt="rank"
                                  />
                                  <span>{{ urlImage?.level }}</span>
                                </span>
                                <span
                                  class="wrap-star"
                                  v-else-if="urlImage?.frameType === 'link'"
                                >
                                  Link -
                                  <span>{{ urlImage?.linkval }}</span>
                                </span>
                                <span class="wrap-star" v-else>
                                  <img
                                    src="../../assets/image/star-icon.webp"
                                    alt="star"
                                  />
                                  <span>{{ urlImage?.level }}</span>
                                </span>
                              </div>
                            </div>
                            <div class="mb-2">
                              <span
                                ><b
                                  >[ {{ urlImage?.race }} /
                                  {{ utilize.textTypeMonster(urlImage?.frameType) }}
                                  {{utilize.textEffectMonster(urlImage?.frameType)}}
                                  ]</b
                                ></span
                              >
                            </div>
                            <div class="mb-2 description-card">
                              {{ utilize.decodeHTML(urlImage?.desc) }}
                            </div>
                            <div class="mb-2">
                              <span
                                ><b>ATK/</b>{{ urlImage?.atk }}
                                <span
                                  :innerHTML="utilize.textDef(urlImage?.frameType, urlImage?.def)"
                                ></span
                              ></span>
                            </div>
                            <div class="released-card">
                              <span
                                >Released on Card Set
                                {{urlImage?.card_sets ? urlImage?.card_sets[0]?.set_name: ''}}</span
                              >
                            </div>
                          </div>
                        </div>
                      </template>
                      <template
                        v-if="urlImage?.frameType === 'trap' || urlImage?.frameType === 'spell'"
                      >
                        <div class="d-flex card-trap-spell">
                          <div class="image-section">
                            <img
                              :src="urlImage?.card_images ? urlImage?.card_images[0]?.image_url_small :''"
                              :alt="urlImage?.name"
                            />
                          </div>
                          <div class="information-section">
                            <div class="row mb-2">
                              <div class="col-8 mr-auto">
                                <span>
                                  <b>{{ urlImage?.name }}</b></span
                                >
                              </div>
                              <div class="col-4 ml-auto">
                                <span class="mr-1">
                                  <b
                                    >{{ utilize.textTypeMonster(urlImage?.frameType)}}
                                    - {{ urlImage?.race }}</b
                                  ></span
                                >
                              </div>
                            </div>
                            <div class="mb-2 description-card">
                              {{ utilize.decodeHTML(urlImage?.desc) }}
                            </div>
                            <div class="released-card">
                              <span
                                >Released on Card Set
                                {{urlImage?.card_sets ? urlImage?.card_sets[0]?.set_name: ''}}</span
                              >
                            </div>
                          </div>
                        </div>
                      </template>
                    </div>
                    </div>
                  </div>
                </template>
              </template>
              <!-- when it just use make deck builder -->
              <template v-if="!props?.displayHover && !loading && deckCollects?.length">
                <div 
                  v-for="(card, index) of deckCollects"
                  :key="index"
                >
                  <div class="mb-1" >
                    <div class="wrap-card-one-deck-builder">
                      <img 
                        :src="card?.card_images ? card?.card_images[0]?.image_url_small :'' " 
                        :alt="card.name"
                        class="image-style"
                      >
                      <img v-if="card.value === 2" class="image-card-value"  src="../../assets/image/2-card.webp"  alt="2-card">
                      <img v-if="card.value === 3" class="image-card-value"  src="../../assets/image/3-card.webp"  alt="3-card">
                    </div>
                    <div class="d-flex justify-content-center mt-1">
                      <span class="button-action mr-1" @click="addCard(card)"> 
                        <img src="../../assets/image/plus.png" alt="plus">
                      </span>
                      <span class="button-action" @click="removeCard(card)"> 
                        <img src="../../assets/image/minus.png" alt="minus">
                      </span>
                    </div>
                  </div>
                </div>
              </template>
              <template v-if="!props?.displayHover && !loading && !deckCollects?.length">
                <div class="d-flex justify-content-center scroller-cards-collect" >
                  <span>Tidak ada kartu yang ke record</span>
                </div>
              </template>
              <!-- add loading spinner mandiri -->
              <div class="d-flex justify-content-center text-center width-loading" v-if="loading">
                <div class="spinner-border text-light" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
              </div>
              <!-- not record data  -->
              <div
                class="d-flex justify-content-center"
                v-if="!dataDeckBuilderLength?.length && props?.displayHover && !loading"
              >
                <span>Tidak ada kartu yang ke record</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <!-- ********** it just display data when create orr edit deck builder -->
          <span 
            v-if="deckType === 'main deck' && (totalCardMain < 40 || totalCardMain >= 60)" 
            class="invalid-text"> Deck contain 40 until 60 cards 
          </span>
          <span 
            v-if="deckType === 'extra deck' && (totalCardExtra >= 15 )" 
            class="invalid-text"> Deck contain until 15 cards 
          </span>
        </div>
      </div>
    </div>
  </template>
  <script setup>
  import { ref, computed, onMounted, defineProps, defineEmits, defineModel, watch } from 'vue';
  import { useStore } from 'vuex'
  import {utilize} from '../utilize/utilize';
  const store = useStore();
  const props = defineProps({
      dataDeckBuilder: Object,
      dataDeckBuilderLength: Array,
      deckType: String,
      displayHover: {
        default: false
      },
  })
  
  const emits = defineEmits([
    'addRemoveCardSelected'
  ])

  const cardSelected = defineModel('cardSelected');
  const mainDeckCards = defineModel('mainDeckCards');
  const deckCollects = defineModel('deckCollects');
  
  const hoverCardTemplate = ref(null);
  const hoverConditionIndex = ref(0);
  const hoverCondition = ref(false);
  // const totalCard = ref(0);
  const num = ref(40);
  const offset = ref(0);
  const valueSearch = ref('');
  const imagePosition = ref(null);
  
  onMounted(()=>{
    const valueCard = props?.deckType === 'main deck' ? props?.dataDeckBuilder?.total_card?.total_card_main_deck :  props?.dataDeckBuilder?.total_card?.total_card_extra_deck;
    listenChangeTotalCard(valueCard);
  })

  const loading = computed(()=>{
    return store.getters.getterStateLoading;
})

  const totalCardMain = computed(()=>{
    let valueCard = 0;
    if(deckCollects.value){
      deckCollects.value?.forEach(element => {
        valueCard+=element.value;
      });

      listenChangeTotalCard(valueCard);
      return store.getters.getterTotalMainDeck;
    }
  })

  const totalCardExtra = computed(()=>{
    let valueCard = 0;
    if(deckCollects.value){
      deckCollects.value?.forEach(element => {
        valueCard+=element.value;
      });

      listenChangeTotalCard(valueCard);
      return store.getters.getterTotalExtraDeck;
    }
  })

  function listenChangeTotalCard(valueCard){
    if(props?.deckType === 'main deck'){
        store.commit('mutateTotalMainDeck', valueCard);
      } else{
        store.commit('mutateTotalExtraDeck', valueCard)
      }
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
      let positionLeft, positionTop  = 0;
      let listCardSelector;
      const data = index+1;

      //*********** */ this make differential between extra and main deck because make hover not accurate index
      if(props?.deckType === 'main deck'){
        listCardSelector = document.querySelector(`.wrap-card-search-main-deck:nth-child(${data}) .hover-card`);
      } else if (props?.deckType === 'extra deck'){
        listCardSelector = document.querySelector(`.wrap-card-search-extra-deck:nth-child(${data}) .hover-card`);
      }

      // trial add before
      // let listCardSelectorBefore = document.querySelector(`.wrap-card:nth-child(${data}) .hover-card::before`);
      if (condition){
          if(detectWidthMonitor >= 1910){
              positionLeft = left-294;
              //*********** */ this make differential between extra and main deck because make hover not accurate position
              if(props?.deckType === 'main deck'){
                positionTop =  top-290;
              } else if (props?.deckType === 'extra deck'){
                positionTop =  top-756;
              }
          } else if (detectWidthMonitor >= 1200 && detectWidthMonitor<1910){
              positionLeft = left-104;
              // positionTop =  top-282;
              //*********** */ this make differential between extra and main deck because make hover not accurate position
              if(props?.deckType === 'main deck'){
                positionTop =  top-282;
              } else if (props?.deckType === 'extra deck'){
                positionTop =  top-542;
              }
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
  
          listCardSelector.style.maxWidth= '470px';
          listCardSelector.style.minWidth= '470px';
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
  function selectedCard(data){
      cardSelected.value = data;
  }

  function addCard(data){
    if(props?.deckType === 'main deck' && store.getters.getterTotalMainDeck < 60){
        const payload ={
        status: 'add',
        value: data
      };
      emits('addRemoveCardSelected', payload);
    } else if( props?.deckType === 'extra deck' && store.getters.getterTotalExtraDeck < 15 ){
      const payload ={
        status: 'add',
        value: data
      };
      emits('addRemoveCardSelected', payload);
    }
  }
  function removeCard(data){
    const payload ={
      status: 'remove',
      value: data
    };
    emits('addRemoveCardSelected', payload);
  }
  </script>
  <style scoped>
  
  /*---------- style deck buider hover */
  #MainExtraDeck{
      min-height: 8rem;
      position: relative;
      z-index: 1;
  }
  
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
  
  .price-wrap .image-rarity{
      width: 20px;
      height: 20px;
  }
  .background-image{
      background-color: #03182c;
      border-radius: 10px;
      padding: 10px;
      min-height: 10rem;
  }
  .image-wrap-main{
    position: relative;
    z-index: 1;
  }
  /* make untidy style */
  /* .wrap-card-search-main-extra{
    position: relative;
  } */
  .wrap-hover-image{
      padding-right: 6px;
      padding-top:4px;
  }

  .wrap-hover-image .wrap-image-display{
    position: relative;
  }

  .wrap-card-search-main-extra .image-style{
      max-width: 80px;
      cursor: pointer;
  }

  .wrap-card-search-main-extra .image-card-value{
    position: absolute;
    top: 74px;
    left: 22px;
    width: 38px;
    z-index: 2;
  }

  .wrap-card-search-main-extra .non-hover-card{
      display: none;
  }
  
  .wrap-card-search-main-extra .hover-card{
      display: none;
      position: relative;
      z-index: 2;
  }

  .hover-card .image-section img{
      width: 150px !important;
      height: 210px;
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
  
  .hover-card .information-section .wrap-star img{
      width: 16px;
      height: 16px;
      margin-right: 4px;
      margin-top:-4px;
  }
  
  .description-card{
      min-height: 9.4rem;
      text-align: justify;
  }
  
  .scroller-cards-collect{
      max-height: 32rem;
      min-height: 10rem;
      overflow-y: auto;
  }
  .width-loading{
    min-width: 520px;
  }
  /*---------- end style deck buider hover */

  /*---------- style deck buider non hover */
  .button-action{
    cursor: pointer;
  }

  .button-action img{
    width: 24px;
    height: 24px;
  }

  .wrap-card-one-deck-builder{
    position: relative;
  }

  .wrap-card-one-deck-builder .image-style{
      max-width: 84px;
      padding-right: 6px;
      padding-top:4px;
      cursor: pointer;
  }
  .wrap-card-one-deck-builder .image-card-value{
    position: absolute;
    top: 74px;
    left: 22px;
    width: 38px;
    z-index: 2;
  }

  .invalid-text{
    width: 100%;
    margin-top: 0.25rem;
    font-size: .875em;
    color: #dc3545;
  }
  /*---------- end style deck buider non hover */
  </style>
  