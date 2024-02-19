<template>
    <div id="navbar">
        <nav class="navbar navbar-expand-lg non-padding navbar-color text-white">
            <div class="container">
                <div class="navbar-nav mr-auto">
                    <a class="navbar-brand RogFont text-font text-white" href="/">Master Duel<br> Ruler</a>
                </div>
                <div class="navbar-nav ml-auto">
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav navbar-list d-flex justify-content-center">
                        <a class="nav-link text-white align-self-center ml-2" :class="[activeLink === 'tier-list'?'text-active':''] " href="/tier-list">Tier List <span class="sr-only">(current)</span></a>
                        <a class="nav-link text-white align-self-center ml-2" :class="[activeLink === 'play-style-deck'?'text-active':'']" href="/play-style-deck">Play Style Deck</a>
                        <a class="nav-link text-white align-self-center ml-2" :class="[activeLink === 'counter-style-deck'?'text-active':'']" href="/counter-style-deck">Counter Style Deck</a>
                        <a class="nav-link text-white align-self-center ml-2 pointer" > 
                            <span class="material-icons" @click="searchCards()">
                                search
                            </span>
                        </a>
                        <a class="nav-link text-white" href="/login">
                            <button type="button" class="btn btn-light">Login</button>
                        </a>
                    </div>
                </div>
                </div>
            </div>
        </nav>
        <!-- perlu adjustment lagi class untuk display hover kartu karena ada masalah sama hover image lain -->
        <SearchCards :openModal="openModal" @dataModalCard="dataModalCard" ></SearchCards>
    </div>
</template>

<script setup>
import { computed, onMounted, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import SearchCards from './SearchCards.vue'
const router = useRouter();
const store = useStore();

const openModal = ref(false);

const state = reactive({
    openModal,
})
onMounted(()=>{
})
const activeLink = computed(()=>{
    if(router.currentRoute.value.path.includes('/tier-list')){
        return 'tier-list'
    } else if(router.currentRoute.value.path.includes('/counter-style-deck')){
        return 'counter-style-deck'
    } else if(router.currentRoute.value.path.includes('/play-style-deck')){
        return 'play-style-deck'
    }
})
    
function searchCards(){
    // const payload = {
    //     name: 'floowandere',
    //     num: 5,
    //     offset: 0
    // }
    // store.dispatch('getSearchCards', payload)
    state.openModal = true;
}

function dataModalCard($event){
    state.openModal = $event
}

</script>
<style>
    .text-font{
        text-align: center;
    }
    .non-padding{
        padding: 0px !important;
    }
    .navbar-color{
        background-color: #03182C !important;
        color: white !important;
    }
    .navbar-list a{
        font-size: 18px;
        font-weight: 600;
    }
    .text-active{
        text-decoration: underline;
    }

    .pointer{
        cursor: pointer;
    }
</style>