<template>
   <HeaderCom/>
   <div class="flex justify-center items-center flex-col">
    <h1 class="font-bold text-2xl mt-4">Welcome to the Add New Restaurant Page</h1>
    <form class="w-1/5">
            <input class="mt-8 p-2 border border-red-300 focus:outline-none focus:border-red-500 bg-transparent w-full" type="name" placeholder="Enter Name " v-model="restaurant.name">
            <input class="mt-6 p-2 border border-red-300 focus:outline-none focus:border-red-500 bg-transparent w-full" type="text" placeholder="Enter Address" v-model="restaurant.address">
            <input class="mt-6 p-2 border border-red-300 focus:outline-none focus:border-red-500 bg-transparent w-full" type="text" placeholder="Enter Contact" v-model="restaurant.contact">
            <button type="button" v-on:click="addRestaurant" class="mt-6 p-2 bg-red-600 text-white px-8 py-2 w-full">Add New Restaurant</button>
        </form>
   </div>
</template>
<script>
import axios from 'axios'
import HeaderCom from './HeaderCom.vue'
export default {
    name:'AddRestaurant',
    components:{
        HeaderCom
    },
    //get the value from input field 
    data(){
        return{
            restaurant :{
                name:'',
                address: '',
                contact:''
            }

        }
    },    
    methods:{
        async addRestaurant() {
            let result = await axios.post("http://localhost:3000/restaurant",{
                name: this.restaurant.name,
                address: this.restaurant.address,
                contact: this.restaurant.contact
                
            });

            console.log(result);
            if(result.status==201)
            {
              //201 means any data is created, now redirect to the home page
                this.$router.push({name:'HomePage'})
            }
        }
    },
    mounted()
    {
        let user = localStorage.getItem('user-info');
        //if there is no user info it will redirect to SignUp
        if(!user)
        {
            this.$router.push({name:'SignUp'})
        }
    }
}
</script>
