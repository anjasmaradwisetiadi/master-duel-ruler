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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac 
                    placerat urna. Duis facilisis vulputate neque at dapibus. Nunc sit amet 
                    congue nibh, consequat volutpat mauris. Praesent et semper diam, 
                    quis laoreet tortor. Sed eget condimentum justo. Pellentesque viverra 
                    faucibus leo sit amet euismod. In hac habitasse platea dictumst. 
                    Suspendisse efficitur maximus ultricies. Pellentesque habitant morbi 
                    tristique senectus et netus et malesuada fames ac turpis egestas. Duis 
                    ac libero quam. Orci varius natoque penatibus et magnis dis parturient 
                    montes, nascetur ridiculus mus. Nullam massa nisi, tempus vitae enim 
                    eget, dignissim volutpat purus. Fusce quis erat sit amet nisi vestibulum 
                    lacinia sit amet vitae justo. Pellentesque condimentum sapien nec 
                    dolor sollicitudin consequat ac tincidunt orci. Nullam erat mi, ultricies 
                    sit amet risus et, vehicula venenatis purus.
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
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac 
                    placerat urna. Duis facilisis vulputate neque at dapibus. Nunc sit amet 
                    congue nibh, consequat volutpat mauris. Praesent et semper diam, 
                    quis laoreet tortor. Sed eget condimentum justo. Pellentesque viverra 
                    faucibus leo sit amet euismod. In hac habitasse platea dictumst. 
                    Suspendisse efficitur maximus ultricies. Pellentesque habitant morbi 
                    tristique senectus et netus et malesuada fames ac turpis egestas. Duis 
                    ac libero quam. Orci varius natoque penatibus et magnis dis parturient 
                    montes, nascetur ridiculus mus. Nullam massa nisi, tempus vitae enim 
                    eget, dignissim volutpat purus. Fusce quis erat sit amet nisi vestibulum 
                    lacinia sit amet vitae justo. Pellentesque condimentum sapien nec 
                    dolor sollicitudin consequat ac tincidunt orci. Nullam erat mi, ultricies 
                    sit amet risus et, vehicula venenatis purus.
                </p>
            </div>
        </div>
        <div class="row justify-content-center mt-3">
            <div class="col text-center">
                <h5>Thanks to </h5>
                <div class="font-weight-bold mt-3" style="font-size: 20px;">
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