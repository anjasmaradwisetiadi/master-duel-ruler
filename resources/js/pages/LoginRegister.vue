<template>
    <div id="LoginRegister" class="mt-4">
        <div class="row justify-content-center mb-3">
            <div class="col-6 text-center ">
                <h3>Login Form</h3>
            </div>
        </div>
        <div class="row mb-3 justify-content-center">
            <div class="col-6">
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" 
                        v-model="email" 
                        :class="responseGeneral?.message?.email ? 'is-invalid':''" id="email" aria-describedby="email" 
                        >
                    <small v-if="!responseGeneral?.status" class="form-text invalid-feedback">{{responseGeneral?.message?.email ? responseGeneral?.message?.email[0] : ''}}</small>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" 
                        v-model="password" 
                        :class="responseGeneral?.message?.password ? 'is-invalid':''" id="password" aria-describedby="password" 
                    >
                    <small v-if="!responseGeneral?.status" class="form-text invalid-feedback">{{responseGeneral?.message?.password ? responseGeneral?.message?.password[0] : ''}}</small>
                </div>
                <small>Jika tidak memiliki account bisa <a href="/register" style="text-transform: underline;">register</a>  dulu !!! </small>
            </div>
        </div>
        <div class="row justify-content-center">
                <div class="col-6">
                    <button type="button" class="button-style-secondary" @click="submit()">Submit</button>
                    <!-- <button type="button" class="btn btn-warning" @click="createPayload()">Create Payload</button> -->
                </div>
        </div>
        <LoadingAndAlert :loading="loading" :responseGeneral="responseGeneral"></LoadingAndAlert>
    </div>
</template>
<script setup>
     import { ref, reactive, computed, onMounted, onBeforeMount } from 'vue';
     import LoadingAndAlert from '../components/LoadingAndAlert.vue'
     import { useStore } from 'vuex';
     import { useRouter } from 'vue-router';
     
     const store = useStore();
     const router = useRouter();
    
     const name = ref('');
     const username = ref('');
     const email = ref('');
     const password = ref('');
     const position = ref('');
     
     const state = reactive([

     ])
     onMounted(()=>{

     })

     const loading = computed(()=>{
        return store.getters.getterStateLoading
     })

     const responseGeneral = computed(()=>{
        return store?.getters?.getterResponseAuth
    })

    //  const loginOrNotChecked = computed(()=>{
    //     if(router?.currentRoute?.value){
    //         if(router?.currentRoute?.value?.path.includes('/register')){
    //             return false;
    //         } else if(router?.currentRoute?.value?.path.includes('/login')){
    //             return true;
    //         }
    //     }
    // })

     function submit(){
        let formData = new FormData();
        const payload={
            'email': email.value,
            'password': password.value,
        };
        for (const key in payload) {
            formData.append(key, payload[key])
        }
        store.dispatch('login', formData);
     }

     function back(){
        router.push('/login');
     }

     function createPayload(){
        // if(!loginOrNotChecked){
        //     username.value = 'Nico Ready';
        //     email.value = 'nicoready@gmail.com';
        //     password.value = 'nicoready';
        //     position.value = 'admin';
        //     name.value = 'Nico Ready'; 
        //     // ********* kenapa name dan password tidak terupdate seumpurna  menggunakan ref ? perlu state ?
        // } else if(loginOrNotChecked) {
        //     username.value = 'Nico Ready';
        //     email.value = 'nicoready@gmail.com';
        // }
     }


</script>
<style scoped>

</style>