<template>
    <div id="navbar">
        <nav class="navbar navbar-expand-lg non-padding navbar-color text-white">
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
                        <a class="nav-link text-white" href="/login">
                            <button type="button" class="btn btn-light" 
                                v-if="!responseAuth">Login</button>
                        </a>
                        <a class="nav-link text-white">
                            <button type="button" class="btn btn-danger" 
                                @click="logout()" 
                                v-if="responseAuth">Logout</button>
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
    return store?.getters?.getterResponseAuth?.token;
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
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                // localStorage.removeItem('user');
                // store.state.responseAuth = {};
                // router.push('/login');
                // Swal.fire({
                //     title: "Sukses!!!",
                //     text: "Anda telah berhasil logout",
                //     icon: "success"
                // });
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
</style>