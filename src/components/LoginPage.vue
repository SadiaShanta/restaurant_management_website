<template>
        <div class="flex justify-center items-center flex-col">
        <img class="logo" alt="Restaurant logo" src="../assets/logo.png"/>
        <h1 class="text-center font-bold text-2xl">Login</h1>
        <form class="w-1/5">
            <input class="mt-6 p-2 border border-red-300 focus:outline-none focus:border-red-500 bg-transparent w-full" type="email" placeholder="Enter Email" v-model="email">
            <input class="mt-6 p-2 border border-red-300 focus:outline-none focus:border-red-500 bg-transparent w-full" type="password" placeholder="Enter Password" v-model="password">
            <button type="button" v-on:click="login" class="mt-6 p-2 bg-red-600 text-white px-8 py-2 w-full">Login</button>
        </form>
        <router-link to="/sign-up" class="mt-4 p-2 text-cyan-600 underline underline-offset-1">Sign Up</router-link>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'LoginPage',
    //get the value from input field 
    data(){
        return{
            email: '',
            password:''
        }
    },
    methods:{
        async login() {
            let result = await axios.get(`http://localhost:3000/user?email=${this.email}&password=${this.password}`);

            console.log("result sad" ,result.data);
            //200 for checking , 201 for storing
            if(result.status==200 && result.data.length>0)
            {
                //getting data inside an array
                localStorage.setItem("user-info", JSON.stringify(result.data[0]))
                this.$router.push({name:'HomePage'})
            }
        },
    },
    mounted()
        {
            let user= localStorage.getItem('user-info');
         //if there is user info it will redirect to Home Page
            if(user)
            {
            this.$router.push({name:'HomePage'})
            }
        }
}
</script>
