<template>
    <div id="About mt-4">
        <div class="row justify-content-center mt-4">
            <div class="col text-center">
                <h3>About</h3>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col text-justify">
                <p>
                    Alasan kenapa saya membuat aplikasi ini adalah didasarkan ketika saya sedang memainkan game <b>Yu gi oh Master Duel</b> di PC. Memainkan game Master Duel ternyata cukup membuat sulit karena ada lebih dari 10.000 kartu yang memiliki effect berbeda di setiap text effect kartunya. Ketika saya memainkan gamenya ada beberapa kesulitan yang saya alami ketika memainkannya, dari ketidaktahuan ataupun lupa gimana memainkan deck yang saya miliki ataupun combo yang benar. Selain itu ketika di turn lawan saya juga tidak mengetahui gimana cara menggangu atau disrupt combo lawan dengan deck yang meraka mainkan karena banyaknya variasi deck.
                    Karena saya programmer kenapa tidak membuat aplikasi yang bisa mengatasi masalah saya ? Membuat catatan gimana memainkan suatu deck tertentu agar menghasilkan endboard yang maximal ataupun membuat catatan gimana suatu deck dapat di distrupt agar tidak menghasilkan endboard yang sesuai lawan inginkan. Dengan begini saya memiliki contekan sendiri agar saya ngak sering2 kalah dalam memainkan game. Cukup solutip-kan wkwkw.....
                </p>
            </div>
        </div>
        <div class="row justify-content-center mt-3">
            <div class="col text-center">
                <h3>Summary</h3>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col text-justify">
                <p>Beberapa feature yang ada di aplikasi ini: </p>
                <p>
                    <b>Tier List:</b> adalah feature digunakan untuk memberikan info pengguna tentang peta kekuatan deck yu gi oh sekarang ini dimana akan berubah seiring waktu.
                </p>
                <p>
                    <b>Play Style Deck:</b>  adalah feature digunakan untuk memberikan catatan tentang gimana cara memainkan kartu yang kita miliki saat ini ataupun memberikan step combo yang benar ketika kita sedang bermain. di feature ini juga disertakan feature Builder Deck deck apa yang bisa kita mainkan berdasarkan catatan di play style deck.
                </p>
                <p>
                    <b>Builder Deck:</b> adalah feature digunakan untuk membuat deck yang kita inginkan dan kita bisa memasukan deck yang kita buat ke game "Master Duel Yu gi oh" melalui pihak ke tiga <a href="https://www.db.yugioh-card.com/yugiohdb/?request_locale=en">db.yugioh-card.com</a> .
                </p>
                <p>
                    <b>Counter Style Deck:</b> adalah feature digunakan untuk memberikan catatan tentang gimana cara menganggu combo lawan berdasarkan deck yang mereka pakai saat pertandingan, dengan harapan dapat mematikan permainan lawan.
                </p>
            </div>
        </div>
        <div class="row justify-content-center mt-3">
            <div class="col text-center">
                <h4>Thanks to </h4>
                <div class="font-weight-bold mt-3" style="font-size: 16px;">
                    YGOPRODeck
                </div>
            </div>
        </div>
        <div class="row justify-content-left">
            <div class="col">
                <div>
                    <div>
                        <h5>Dev Team</h5>
                    </div>
                    <div 
                        v-for="(data,index) in dataDevTeam.data" :key="index"
                        class="wrap-team">
                        <div 
                            v-if="data.name === 'Anjasmara Dwi Setiadi'"
                            class="wrap-image">
                            <img src="../../assets/image/anjas-github.png" :alt="data.name">
                        </div>
                        <div class="wrap-info">
                            <div>
                                {{ data.name }}
                            </div>
                            <div class="link-portofolio">
                                Github: <a :href="data.github" target="_blank"> {{ data.github }}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
     import { reactive, computed, onMounted } from 'vue';
     import { useStore } from 'vuex';
     import {dataDevTeam} from '../DummyDataCard';
     const store = useStore();

     onMounted(()=>{
        
     })

</script>
<style scoped>
    .wrap-team{
        display: flex;
        /* justify-content: center; */
        align-items: center;
    }

    .wrap-team .wrap-image{
        border-radius: 50%;
        width: 64px;
        height: 64px;
        border: 4px solid #385979;
        margin-right: 1.6rem;
    }

    .wrap-team .wrap-image img{
        width: 56px;
        height: 56px;
    }

    .wrap-team .wrap-info .link-portofolio a{
        color: white;
    }
</style>