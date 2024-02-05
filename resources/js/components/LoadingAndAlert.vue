<template>
    <div id="LoadingAndAlert">
        <div v-if="props.loading" class="loading">
            <div class="modal-wrapper">
                <img src="../../assets/image/animated/spinner.svg" alt="spinner">
            </div>
        </div>
        <div class="sweet-alert">
           <div style="display: none;">{{responseGeneral}}</div> 
        </div>
    </div>
</template>
<script setup>
     import { reactive, computed, onMounted, defineProps } from 'vue';
     import { useStore } from 'vuex';
     import Swal from 'sweetalert2'
     const store = useStore();
     const props = defineProps([
        'text',
        'loading',
        'responseGeneral'
    ])

     onMounted(()=>{
     })

     const responseGeneral = computed(()=>{
        const response = props.responseGeneral;
            if(!props.loading){
                if(response.status === true){
                    return  Swal.fire({
                        title: "Sukses!!!",
                        text: response.message,
                        icon: "success"
                    });
            } else if(response.status === false) {
                return  Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                });
            }
        }
    })
</script>
<style scoped>
    /* ********** loading style */
    .modal-wrapper {
            position: fixed;
            left: 0;
            top: 0;
            z-index: 999;
            width: 100vw;
            height: 100vh;
            background: rgba(0, 0, 0, 0.4);
            display: grid;
            place-items: center;
    }
</style>