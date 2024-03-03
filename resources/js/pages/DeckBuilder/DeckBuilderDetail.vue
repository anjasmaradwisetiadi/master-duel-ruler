<template>
    <div id="DeckBuilderDetail" class="mt-4">
      <div class="row justify-content-center mb-5">
        <div class="col-8 text-center">
          <h1>Khastira</h1>
        </div>
      </div>
      <div class="row mb-2">
        <div class="col">
          <button
            type="button"
            class="btn btn-success mr-2"
            @click="editPlayStyle(getDataPlayStyleDeck?.slug)"
          >
            Edit Counter Style
          </button>
          <button type="button" class="btn btn-danger" @click="deletePlayStyle()">
            Delete Counter Style
          </button>
        </div>
        <div class="col d-flex justify-content-end">
          <button type="button" class="btn btn-warning" @click="backRoute()">
            Kembali
          </button>
        </div>
      </div>
      <div class="row mb-2 mt-4">
        <div class="col">
          <div class="d-flex">
            <div class="d-flex mr-auto">
              <h5>Description</h5>
            </div>
            <div class="d-flex ml-auto">
              <small
                >Updated:
                {{ dayjs(dataDeckBuilder?.updated_at).format('D-MMM-YYYY')  }}</small
              >
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <div
                class="information-html"
                v-html="dataDeckBuilder?.description"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <div class="mt-2 main-deck-style">
            <MainExtraDeck
              :data-deck-builder-length="dataDeckBuilderLength"
              :data-deck-builder="dataDeckBuilder"
              v-model:mainDeckCards="mainDeckCards"
              v-model:card-selected="cardSelected"
              :deck-type="deckTypeMain"
              :display-hover="displayHover"
            ></MainExtraDeck>
          </div>
          <div class="mt-4 extra-deck-style">
            <MainExtraDeck
              :data-deck-builder-length="dataDeckBuilderLength"
              :data-deck-builder="dataDeckBuilder"
              v-model:mainDeckCards="extraDeckCards"
              v-model:card-selected="cardSelected"
              :deck-type="deckTypeExtra"
              :display-hover="displayHover"
            ></MainExtraDeck>
          </div>
        </div>
        <div class="col-6">
          <!-- --- style card selected -->
          <div v-if="dataHasSelected?.name" class="content-section">
            <template
              v-if="dataHasSelected?.frameType !== 'trap' && dataHasSelected?.frameType !== 'spell'"
            >
              <div class="card-monster-preview wrap-card-currently">
                <div class="d-flex justify-content-center">
                  <div class="mb-3">
                    <h4 class="name-card">
                      <b>{{ dataHasSelected?.name }}</b>
                    </h4>
                  </div>
                </div>
                <div class="d-flex">
                  <div class="image-section">
                    <img
                      :src="dataHasSelected?.card_images ? dataHasSelected?.card_images[0]?.image_url_small: ''"
                      :alt="dataHasSelected?.name"
                    />
                  </div>
                  <div class="information-section">
                    <div class="row mb-2">
                      <div class="col-7 mr-auto">
                        <szpan class="mr-1">
                          <b>{{ dataHasSelected?.attribute }}</b></szpan
                        >
                      </div>
                      <div class="col-5 d-flex justify-content-end">
                        <span
                          class="wrap-star"
                          v-if="dataHasSelected?.frameType === 'xyz'"
                        >
                          <img
                            src="../../../assets/image/rank-icon.webp"
                            alt="rank"
                          />
                          <span>{{ dataHasSelected?.level }}</span>
                        </span>
                        <span
                          class="wrap-star"
                          v-else-if="dataHasSelected?.frameType === 'link'"
                        >
                          <span>Link - {{ dataHasSelected?.linkval }}</span>
                        </span>
                        <span class="wrap-star" v-else>
                          <img
                            src="../../../assets/image/star-icon.webp"
                            alt="star"
                          />
                          <span>{{ dataHasSelected?.level }}</span>
                        </span>
                      </div>
                    </div>
                    <div class="mb-2">
                      <span
                        ><b
                          >[ {{ dataHasSelected?.race }} /
                          {{ utilize.textTypeMonster(dataHasSelected?.frameType ? dataHasSelected?.frameType: ' ') }}
                          {{utilize.textEffectMonster(dataHasSelected?.frameType)}}
                          ]</b
                        ></span
                      >
                    </div>
                    <div class="mb-2 description-card">
                      {{ utilize.decodeHTML(dataHasSelected?.desc) }}
                    </div>
                    <div class="mb-1">
                      <span
                        ><b>ATK/</b>{{ dataHasSelected?.atk }}
                        <span
                          :innerHTML="utilize.textDef(dataHasSelected?.frameType, dataHasSelected?.def)"
                        ></span
                      ></span>
                    </div>
                    <div class="released-card mb-2">
                      <span
                        >Released on Card Set
                        {{dataHasSelected?.card_sets ? dataHasSelected?.card_sets[0]?.set_name : ' '}}</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </template>
            <template
              v-if="dataHasSelected?.frameType === 'trap' || dataHasSelected?.frameType === 'spell'"
            >
              <div class="card-trap-spell-preview wrap-card-currently">
                <div class="d-flex justify-content-center">
                  <div class="mb-3">
                    <h3 class="name-card">
                      <b>{{ dataHasSelected?.name }}</b>
                    </h3>
                  </div>
                </div>
                <div class="d-flex">
                  <div class="image-section">
                    <img
                      :src="dataHasSelected?.card_images ? dataHasSelected?.card_images[0]?.image_url_small: ' '"
                      :alt="dataHasSelected?.name"
                    />
                  </div>
                  <div class="information-section">
                    <div class="row mb-2">
                      <div class="col-7 mr-auto">
                        <span>
                          <b>{{ dataHasSelected.name }}</b></span
                        >
                      </div>
                      <div class="col-5 text-right">
                        <span class="mr-1">
                          <b
                            >{{ utilize.textTypeMonster(dataHasSelected?.frameType ? dataHasSelected?.frameType: ' ')}}
                            - {{ dataHasSelected.race }}</b
                          ></span
                        >
                      </div>
                    </div>
                    <div class="mb-2 description-card">
                      {{ utilize.decodeHTML(dataHasSelected?.desc) }}
                    </div>
                    <div class="released-card mb-2">
                      <span
                        >Released on Card Set
                        {{dataHasSelected?.card_sets ? dataHasSelected?.card_sets[0]?.set_name : ''}}</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
      <LoadingAndAlert :loading="loading" :confirmDelete="confirmDelete" @confirm="methodConfirmDelete" ></LoadingAndAlert>
    </div>
  </template>
  <script setup>
  import { ref, reactive, watch, computed, onMounted, onBeforeMount } from 'vue';
  import { builderDeckService } from '../../store/BuilderDeck/builderDeckService';
  import {dataDummyDeckBuilder, dataDummyCards} from '../../DummyDataCard';
  import MainExtraDeck from '../../components/MainExtraDeck.vue';
  import { useStore } from 'vuex';
  import { useRouter } from 'vue-router';
  import { utilize } from '../../utilize/utilize';
  import { collectionUrl } from '../../urlCollect';
  const dayjs = require('dayjs');
  
  const store = useStore();
  const router = useRouter();
  
  
  // const dataHasSelected = dataDummyCards.data[4];
  // const dataDeckBuilderLength = ref(dataDummyCards.data);
  // const dataDeckBuilder = ref(dataDummyDeckBuilder.data[1]);
  const cardSelected = ref(null);
  const deckTypeMain = ref('main deck');
  const deckTypeExtra = ref('extra deck');
  const displayHover = ref(true);
  const confirmDelete = ref(false);
  const paramsUrlSlugPlayStyle = ref('');

  const state = reactive({
    paramsUrlSlugPlayStyle,
    confirmDelete
  }) 

  onMounted(()=>{
      const payload = router.currentRoute.value.params.slug;
      state.paramsUrlSlugPlayStyle = payload;
      builderDeckService.getDeckBuilderDetail(payload);
  })

  const dataDeckBuilder = computed(()=>{
    return store.getters.getterDetailDeckBuilder
  })

  const dataDeckBuilderLength = computed(()=>{
    return store.getters.getterDetailDeckBuilder.deck_builder
  })
  
  const dataHasSelected = computed(()=>{
      return cardSelected.value;
  })
  
  const mainDeckCards = computed(()=>{
      return store.getters.getterdataDeckBuilderMainDeck;
  })
  const extraDeckCards = computed(()=>{
      return store.getters.getterdataDeckBuilderExtraDeck;
  })
  
  function editPlayStyle(slug){
      router.push(`/builder-deck/${paramsUrlSlugPlayStyle.value}/${slug}/edit`);
  }
  
  function deletePlayStyle(){
      state.confirmDelete = true;
  }

  function methodConfirmDelete($event){
      if($event){
          // store.dispatch('deleteCounterStyle', paramsUrl.value);   
      }
      state.confirmDelete = false;
  }
  
  function backRoute(){
      router.back();
  }
  </script>
  <style scoped>
  .card {
    color: black;
  }
  /*--- style card selected */
  .wrap-card-currently {
    background-color: #0d2f4e;
    padding: 8px;
    border-radius: 10px;
    border: 3px solid #385979;
  }
  
  .content-section {
    margin-top: 2.5rem;
  }
  
  .image-section img {
    width: 170px;
    margin-right: 0.75rem;
  }
  
  .information-section .wrap-star {
    display: flex;
    align-items: center;
  }
  
  .information-section .wrap-star span {
    display: flex;
    align-items: center;
    font-size: 18px;
  }
  
  .information-section .wrap-star img {
    width: 20px;
    height: 20px;
    margin-right: 6px;
  }
  
  .information-section .description-card {
    min-height: 220px;
    text-align: justify;
    font-size: 14px;
  }
  
  .released-card {
    display: flex;
    justify-content: end;
  }
  /*--- end card selected */
  .main-deck-style{
    z-index: 2;
    position: relative;
  }
  .extra-deck-style{
    z-index: 1;
    position: relative;
  }
  </style>
  
  <style>
  .card-body .information-html p {
    padding: 0px !important;
    margin: 0px !important;
  }
  </style>
  