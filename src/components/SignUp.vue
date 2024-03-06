<template>
    <div class="flex justify-center items-center flex-col">
        <img class="logo" alt="Restaurant logo" src="../assets/logo.png"/>
        <h1 class="text-center font-bold text-2xl">Sign Up</h1>
        <form class="w-1/5">
            <input class="mt-8 p-2 border border-red-300 focus:outline-none focus:border-red-500 bg-transparent w-full" type="name" placeholder="Enter Name " v-model="name">
            <input class="mt-6 p-2 border border-red-300 focus:outline-none focus:border-red-500 bg-transparent w-full" type="email" placeholder="Enter Email" v-model="email">
            <input class="mt-6 p-2 border border-red-300 focus:outline-none focus:border-red-500 bg-transparent w-full" type="password" placeholder="Enter Password" v-model="password">
            <button type="button" v-on:click="signUp" class="mt-6 p-2 bg-red-600 text-white px-8 py-2">Sign Up</button>
        </form>
        <router-link to="/login-page" class="mt-4 p-2 text-cyan-600 underline underline-offset-1">Login</router-link>
    </div>
</template>
<script>
import axios from 'axios'
//component name can be anything but we name it after our file name 
export default {
    name: 'SignUp',
    //get the value from input field 
    data(){
        return{
            name:'',
            email: '',
            password:''
        }
    },
    methods:{
        async signUp() {
            let result = await axios.post("http://localhost:3000/user",{
                name: this.name,
                email: this.email,
                password: this.password
            });

            console.log(result);
            if(result.status==201)
            {
                localStorage.setItem("user-info", JSON.stringify(result.data))
                this.$router.push({name:'HomePage'})
            }
        }
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
<style >
 .logo{
    width:100px
 }
</style>