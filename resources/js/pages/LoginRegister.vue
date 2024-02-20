<template>
    <div id="LoginRegister" class="mt-4">
        <div class="row justify-content-center mb-3">
            <div class="col-6 text-center ">
                <h3>{{loginOrNotChecked ? 'Login':'Register'}} Form</h3>
            </div>
        </div>
        <template v-if="!loginOrNotChecked" >
            <template v-if="responseGeneral.position === 'admin'">
                <div class="row mb-2 justify-content-center">
                    <div class="col-6">
                        <div class="form-group" v-if="!loginOrNotChecked" >
                            <label for="name">Name</label>
                            <input type="text" class="form-control" 
                                v-model="name" 
                                :class="responseGeneral?.message?.name ? 'is-invalid':''" id="name" aria-describedby="name" 
                            >
                            <small v-if="!responseGeneral?.status" class="form-text invalid-feedback">{{responseGeneral?.message?.name ? responseGeneral?.message?.name[0] : ''}}</small>
                        </div>
                        <div class="form-group" v-if="!loginOrNotChecked">
                            <label for="username">Username</label>
                            <input type="text" class="form-control" 
                                v-model="username" 
                                :class="responseGeneral?.message?.user_name ? 'is-invalid':''" id="username" aria-describedby="username" 
                            >
                            <small v-if="!responseGeneral?.status" class="form-text invalid-feedback">{{responseGeneral?.message?.user_name ? responseGeneral?.message?.user_name[0] : ''}}</small>
                        </div>
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
                        <div class="form-group" v-if="!loginOrNotChecked">
                            <label for="position">Position</label>
                            <select 
                                class="custom-select custom-select-lg mb-3" 
                                :class="responseGeneral?.message?.position ? 'is-invalid':''"
                                v-model="position" id="position" >
                                <option disabled selected value="">Pilih position user</option>
                                <option value="admin">Admin</option>
                                <option value="player">Player</option>
                            </select>
                            <small v-if="!responseGeneral?.status" class="form-text invalid-feedback">{{responseGeneral?.message?.position ? responseGeneral?.message?.position[0] : ''}}</small>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-6">
                        <button type="button" class="btn btn-success" @click="submit()">Submit</button>
                        <!-- <button type="button" class="btn btn-warning" @click="createPayload()">Create Payload</button> -->
                    </div>
                </div>
            </template>
            <template v-if="responseGeneral.position !== 'admin'">
                <div class="row justify-content-center mb-4">
                    <div class="col-6 text-center">
                        <h5> Anda tidak memiliki hak akses ke page ini, coba hubungi admin jika ingin melakukan register !!!</h5>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col text-center">
                        <button type="button" class="btn btn-warning" @click="back()"> Kembali </button>
                    </div>
                </div>
            </template>
        </template>
        <template v-if="loginOrNotChecked" >
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
                        <button type="button" class="btn btn-success" @click="submit()">Submit</button>
                        <!-- <button type="button" class="btn btn-warning" @click="createPayload()">Create Payload</button> -->
                    </div>
                </div>
        </template>
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

     const loginOrNotChecked = computed(()=>{
        if(router?.currentRoute?.value){
            if(router?.currentRoute?.value?.path.includes('/register')){
                return false;
            } else if(router?.currentRoute?.value?.path.includes('/login')){
                return true;
            }
        }
    })

     function submit(){
        let formData = new FormData();
        if(loginOrNotChecked) {
            const payload={
                'email': email.value,
                'password': password.value,
            };
            for (const key in payload) {
                formData.append(key, payload[key])
            }
            store.dispatch('login', formData);
        } else {
            const payload={
                'name':  name.value,
                'user_name': username.value,
                'email': email.value,
                'password': password.value,
                'position': position.value
            };
            for (const key in payload) {
                formData.append(key, payload[key])
            }
            store.dispatch('register', formData);
        } 
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