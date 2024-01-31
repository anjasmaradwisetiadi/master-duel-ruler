<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Example Component testeing</div>

                    <div class="card-body RogFont">
                        I'm an example downloadS
                    </div>

                    <div class="d-flex">
                        {{compute}}
                    </div>
                    <div class="d-flex">
                        <div class="mr-3">
                            <button class="btn btn-primary" @click="incrementCounter()"> Counter ++</button>
                        </div>
                        <div class="mr-3">
                            <button class="btn btn-danger" @click="decrementCounter()"> Counter --</button>
                        </div>
                    </div>
                    <div>
                        <ul class="list-group">
                            <li v-for="(data, index) in dataTodoList" :key="index" class="list-group-item">{{ data.content}} - {{ data.created_at}}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { reactive, computed, onMounted, onBeforeMount } from 'vue'
    import { mapMutations, useStore } from 'vuex'
    import storing from '../store/index.js';

    const store = useStore();
    const dataReactives = reactive({
        name: store.state.todoList,
    })

    onBeforeMount(()=>{

    })

    onMounted(()=>{
        console.log('Component mounted. value env= ')
        console.log("data baru = ")
        console.log(process.env)
        console.log("data nih")
        console.log(dataTodoList)
        store.dispatch('getListTodoList')
    })

    const datas = computed(() =>store.state.todoList)
    const compute = computed(() =>store.state.counter)
    const dataTodoList = computed(()=> {
        // console.log("store.getters.getterTodoList = ")
        // console.log(store.getters.getterTodoList)
        return store.getters.getterTodoList
    })
    
    function decrementCounter(){
        store.commit('decrementCounter',1)
    }
    function incrementCounter(){
        store.commit('incrementCounter',1)
        // store.dispatch('getListTodoList')
    }

</script>

<style>
.RogFont{
    font-family: RogFont;
    font-weight: bold;
}
</style>
