<template>
    <div id="navbar">
        <nav class="navbar navbar-expand-lg non-padding navbar-color text-white py-2">
            <div class="container">
                <div class="navbar-nav mr-auto">
                    <a class="navbar-brand RogFont text-font text-white" href="/">
                        <img class="logo-master-duel-ruler" src="../../assets/image/master-duel-ruler.png" alt="master-duel-ruler">
                    </a>
                </div>
                <div class="navbar-nav ml-auto">
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav navbar-list d-flex justify-content-center">
                        <a class="nav-link text-white align-self-center ml-2" :class="[activeLink === 'tier-list'?'text-active':''] " href="/tier-list">Tier List <span class="sr-only">(current)</span></a>
                        <a class="nav-link text-white align-self-center ml-2" :class="[activeLink === 'play-style-deck'?'text-active':'']" href="/play-style-deck">Play Style Deck</a>
                        <a class="nav-link text-white align-self-center ml-2" :class="[activeLink === 'counter-style-deck'?'text-active':'']" href="/counter-style-deck">Counter Style Deck</a>
                        <a class="nav-link text-white align-self-center ml-2" :class="[activeLink === 'about'?'text-active':'']" href="/about">About</a>
                        <a class="nav-link text-white align-self-center ml-2 pointer" > 
                            <span class="material-icons" @click="searchCards()">
                                search
                            </span>
                        </a>
                        <a v-if="!responseAuth?.token" class="nav-link text-white" href="/login">
                            <button type="button" class="btn btn-light">Login</button>
                        </a>
                        <a  v-if="responseAuth?.token"
                            class="nav-link text-white">
                            <div class="flex">
                                <div class="dropdown">
                                    <a role="button" data-toggle="dropdown" aria-expanded="false">
                                        <div class="style-person-icon">
                                            <span class="material-icons">
                                                person
                                            </span>
                                        </div>
                                    </a>

                                    <div class="dropdown-menu">
                                        <div class="account-login pl-2 ">
                                            <span>{{responseAuth?.name}}</span>
                                        </div>
                                        <div class="pl-2 pt-1">
                                            <button type="button" class="btn btn-danger" 
                                                @click="logout()" 
                                                >Logout
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
import SearchCards from './SearchCards.vue';
import Swal from 'sweetalert2';
const router = useRouter();
const store = useStore();

const openModal = ref(false);

const state = reactive({
    openModal,
})

const responseAuth = computed(()=>{
    return store?.getters?.getterResponseAuth;
})

onMounted(()=>{
    store.dispatch('tryAutoLogin');
})
const activeLink = computed(()=>{
    if(router.currentRoute.value.path.includes('/tier-list')){
        return 'tier-list'
    } else if(router.currentRoute.value.path.includes('/counter-style-deck')){
        return 'counter-style-deck'
    } else if(router.currentRoute.value.path.includes('/play-style-deck')){
        return 'play-style-deck'
    } else if(router.currentRoute.value.path.includes('/about')){
        return 'about'
    }
})
    
function searchCards(){
    state.openModal = true;
}

function dataModalCard($event){
    state.openModal = $event
}

function logout(){
    Swal.fire({
            title: "Apa kamu yakin akan Logout ? ",
            showCancelButton: true,
            confirmButtonText: "Yes",
            confirmButtonColor: '#2b77bf',
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                store.dispatch('logout');
            } else{
                return false;
            }
        });
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
    .logo-master-duel-ruler{
        width: 182px;
    }
    .style-person-icon{
        background-color: #63625c;
        border-radius: 50%;
        border: 2px solid #385979;
        width: 40px;
        height: 40px;
        padding: 6px;
    }
    .account-login{
        border-bottom: 1px solid black;
    }
</style>