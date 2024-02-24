<template>
    <div id="PlayStyleDeck">
        <h1>Play Style Deck</h1>
        <button class="btn btn-success" @click="submitCard(false)">
            card trigger
        </button>
        <div>
            <p v-if="getCard?.name">
                {{getCard.name}}
            </p>
        </div>
    </div>
</template>

<script setup>
    import { reactive, computed, onMounted, onBeforeMount } from 'vue'
    import { useStore } from 'vuex'
    import {playStyleDeckService} from '../store/PlayStyleDeck/playStyleDeckService';

    const store = useStore();

    const getCard = computed(()=>{
        return store?.getters?.getterGetCard ? store?.getters?.getterGetCard : {};
    })
    const submitCard = () =>{
        console.log("store = ");
        console.log(store);
        playStyleDeckService.getListPlayStyle();
    }
</script>
<style>

</style>