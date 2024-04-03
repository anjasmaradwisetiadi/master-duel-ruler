<template>
    <div id="LoadingAndAlert">
        <div v-if="props.loading" class="loading">
            <div class="modal-wrapper">
                <img src="../../assets/image/animated/spinner.svg" alt="spinner">
            </div>
        </div>
        <div class="sweet-alert" v-if="props.responseGeneral">
           <div style="display: none;">{{responseGeneral}}</div> 
        </div>
        <div class="sweet-alert" v-if="props.confirmDelete">
           <div style="display: none;">{{confirmDelete}}</div> 
        </div>
    </div>
</template>
<script setup>
     import { ref, reactive, computed, onMounted, defineProps, defineEmits, watch } from 'vue';
     import { useStore } from 'vuex';
     import Swal from 'sweetalert2';
     const store = useStore();
     const props = defineProps([
        'text',
        'loading',
        'responseGeneral',
        'confirmDelete'
    ])

    const emit = defineEmits([
        'confirm',
        'confirmDelete'
    ]);

     onMounted(()=>{
     })

     const responseGeneral = computed(()=>{
        const response = props?.responseGeneral;
            if(!props.loading){
                if(response?.status === true){
                    return  Swal.fire({
                        title: "Sukses!!!",
                        text: response.message,
                        icon: "success",
                        showCancelButton: false,
                        confirmButtonColor: '#2b77bf',
                        confirmButtonText: "Yes",
                    }).then((result)=>{
                        if (result.isConfirmed || result.isDismissed) {
                            emit('confirm',true)
                        }
                    })
                } else if(response?.status === false) {
                    const conditionSlug = response?.message?.slug ? response?.message?.slug[0] : '';
                    if(conditionSlug.toLowerCase() === 'slug unique'){
                        return  Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "Nama sudah ada, coba ganti nama lain !",
                            confirmButtonColor: '#2b77bf',
                        });
                    } else if(response?.data?.toLowerCase() === 'email atau username dan password salah'){
                        return  Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "Email, Username dan Password salah, silahkan coba lagi !!!",
                            confirmButtonColor: '#2b77bf',
                        });
                    } else {
                        return  Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "Something went wrong!",
                            confirmButtonColor: '#2b77bf',
                        });
                    }
                }
            }
    })

    const confirmDelete = computed(()=>{
        const data = props?.confirmDelete;
        if(data){
            return Swal.fire({
            title: "Apa kamu yakin akan mengapus info Deck ini ? ",
            showCancelButton: true,
            confirmButtonColor: '#2b77bf',
            confirmButtonText: "Yes",
        }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    emit('confirm',true);
                } else{
                    emit('confirm',false);
                }
            });
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