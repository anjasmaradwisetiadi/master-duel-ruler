<template>
    <div id="TableListDeckBuilder">
        <div class="row">
            <div class="col">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col" >Title</th>
                            <th scope="col" >Engines</th>
                            <th scope="col" >Price</th>
                            <th scope="col" >Description</th>
                            <th scope="col" >Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr scope="row"
                            class="row-list-deck"
                            v-for="(deckBuilder, index) of dataDeckBuilders"
                            :key="index"
                            @click="redirectDetailDeckBuilder(deckBuilder.slug)"
                        >
                            <td> 
                                <div class="elipsis"> {{deckBuilder.title}}</div>
                            </td>
                            <td>
                                <div class="d-flex">
                                    <img class="image-engines mr-1" :src="deckBuilder?.engines" alt="card">
                                </div>
                            </td>
                            <td>
                                <!-- <template v-if="deckBuilder.price.total_rarity_UR">
                                    <div class="d-flex align-items-center mb-1">
                                        <span>
                                            <img class="image-rarity" src="../../../assets/image/cp-ur-rarity.webp" alt="cp-ur-rarity">
                                        </span>
                                        <span class="ml-2">
                                            {{deckBuilder.price.total_rarity_UR}}
                                        </span>
                                    </div>
                                    <div  class="d-flex align-items-center">
                                        <span>
                                            <img class="image-rarity" src="../../../assets/image/cp-sr-rarity.webp" alt="cp-sr-rarity">
                                        </span>
                                        <span class="ml-2">
                                            {{deckBuilder.price.total_rarity_SR}}
                                        </span>
                                    </div>
                                </template> -->
                                <div>
                                    &#9866;
                                </div>
                            </td>
                            <td>
                                <div class="elipsis" v-html="utilize.elipisWord(7, deckBuilder?.description) ">
                                </div>
                            </td>
                            <td>
                                <span>
                                    {{ dayjs(deckBuilder.updated_at).format('D-MMM-YYYY')  }}
                                </span>
                            </td>
                        </tr>
                        <tr v-if="!dataDeckBuilders.length">
                            <td colspan="5">
                                <div class="d-flex justify-content-center">
                                    Tidak ada data yang terecord
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { builderDeckService } from '../../store/BuilderDeck/builderDeckService';
import { utilize } from '../../utilize/utilize';
import {collectionUrl} from '../../urlCollect';
const dayjs = require('dayjs');
const store = useStore();
const router = useRouter();
const paramsUrl = ref('');

onMounted(()=>{
    const payload = router.currentRoute.value.params.slug;
    paramsUrl.value = payload;
    builderDeckService.getTableDeckBuilder(payload);
})

const dataDeckBuilders = computed(()=>{
    return store?.getters?.getterListDeckBuilder ? store?.getters?.getterListDeckBuilder : [];
})

function redirectDetailDeckBuilder(slug){
    router.push(`/builder-deck/${paramsUrl.value}/${slug}`)
}
</script>
<style scoped>
    table{
        color: white;
        border: 0.7px solid #385979;
        /* border-radius: 8px; */
        /* min-width: 60rem; */
    }
    table thead {
        background-color: #2a4b6c;
    }
    table tbody {
        background-color: #03182c;
    }

    table thead tr{
        text-align: center;
    }

    table tbody tr:hover {
        background-color: #1a4c7a;
    }

    .table th,
    .table td {
        border: none !important;
    }

    .table thead th {
        border-bottom: none !important;
    }

    table tr th:nth-child(1),
    table tr td:nth-child(1)
    {
        min-width: 10rem;
        max-width: 10rem;
    }
    table tr th:nth-child(2),
    table tr td:nth-child(2) {
        min-width: 6rem;
        max-width: 6rem;
    }
    table tr th:nth-child(3),
    table tr td:nth-child(3) {
        min-width: 4rem;
        max-width: 4rem;
    }
    table tr th:nth-child(4),
    table tr td:nth-child(4) {
        min-width: 14rem;
        max-width: 14rem;
    }
    table tr th:nth-child(5),
    table tr td:nth-child(5) {
        min-width: 6rem;
        max-width: 6rem;
    }

    .row-list-deck{
        cursor: pointer;
    }
    .elipsis{
        text-overflow: ellipsis;
        /* Required for text-overflow to do anything */
        white-space: nowrap;
        overflow: hidden;
    }

    .image-engines{
        width: 40px;
        height: 40px;
    }

    .image-rarity{
        width: 22px;
        height: 22px;
    }

</style>