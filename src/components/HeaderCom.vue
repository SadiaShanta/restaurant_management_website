<template>
    <nav class="flex items-stretch md:items-center bg-red-700 text-white text-base">
        <img class="logo border-2 border-red-700 size-14" alt="Restaurant logo" src="../assets/logo.png"/>
        <router-link to="/" class="ml-8 hover:bg-red-900 p-4">Home</router-link>
        <router-link to="/add-restaurant" class="hover:bg-red-900 p-4 ml-8">Add Restaurant</router-link>
        <router-link to="#" class="mr-16 hover:bg-red-900 p-4 ml-8" v-on:click="logout">Logout</router-link>
    </nav>
</template>
<script>

export default {
    name: 'HeaderCom',
    methods:{
        logout(){
            console.log("logging out");
            localStorage.clear();
            this.$router.push({name:'LoginPage'})
        }
    }
}
</script>
