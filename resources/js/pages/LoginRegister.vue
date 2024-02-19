<template>
    <div id="LoginRegister" class="mt-4">
        <div class="row justify-content-center">
            <div class="col-6 text-center ">
                <h3>{{loginOrNot ? 'Login':'Register'}} Form</h3>
            </div>
        </div>
        <div class="row mb-2 justify-content-center">
            <div class="col-6">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" 
                        v-model="title" 
                        :class="responseGeneral?.message?.title ? 'is-invalid':''" id="name" aria-describedby="name" 
                    >
                    <small v-if="!responseGeneral?.status" class="form-text invalid-feedback">{{responseGeneral?.message?.title ? responseGeneral?.message?.title[0] : ''}}</small>
                </div>
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" class="form-control" 
                        v-model="username" 
                        :class="responseGeneral?.message?.username ? 'is-invalid':''" id="username" aria-describedby="username" 
                    >
                    <small v-if="!responseGeneral?.username" class="form-text invalid-feedback">{{responseGeneral?.message?.username ? responseGeneral?.message?.username[0] : ''}}</small>
                </div>
                <div class="form-group">
                    <label for="name">Email</label>
                    <input type="email" class="form-control" 
                        v-model="email" 
                        :class="responseGeneral?.message?.email ? 'is-invalid':''" id="email" aria-describedby="email" 
                        >
                </div>
                <div class="form-group">
                    <label for="name">Password</label>
                    <input type="password" class="form-control" 
                        v-model="password" 
                        :class="responseGeneral?.message?.password ? 'is-invalid':''" id="password" aria-describedby="password" 
                        :disabled="editOrNot ? '':disabled">
                </div>
                <div class="form-group" v-if="!loginOrNot">
                    <label for="position">Position</label>
                    <select class="custom-select custom-select-lg mb-3" v-model="position" id="position" >
                        <option disabled value="default">Open this select menu</option>
                        <option value="admin">Admin</option>
                        <option value="player">Player</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-6">
                <button type="button" class="btn btn-success" @click="submit()">Submit</button>
            </div>
        </div>
    </div>
</template>
<script setup>
     import { ref, reactive, computed, onMounted } from 'vue'
     import { useStore } from 'vuex'
     const store = useStore();
    
     const text = ref('');
     const username = ref('');
     const email = ref('');
     const password = ref('');
     const position = ref('default');

     const loginOrNot = ref(false);

     const responseGeneral = computed(()=>{
        return store?.state?.responseGeneral;
     })


     onMounted(()=>{
        
     })
</script>
<style scoped>

</style>