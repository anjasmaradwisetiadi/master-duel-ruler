<template>
    <Navbar></Navbar>
    <div class="container">
        <router-view></router-view>
    </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
    data() {
        return {
        count: 0
        }
    },
    components: {
        Navbar
    },

}
</script>
<style>

</style>