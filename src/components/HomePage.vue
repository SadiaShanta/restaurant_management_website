<template>
    <div class="overflow-x-auto">
      <HeaderCom/>
      <h1 class="text-center font-bold text-2xl p-4">Welcome {{ name }} to the Home Page</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="restaurant in restaurants" :key="restaurant.id" class="bg-white shadow-md rounded-md p-4 border border-gray-200">
          <div class="mb-4">
            <span class="font-bold">ID:</span> {{ restaurant.id }}
          </div>
          <div class="mb-4">
            <span class="font-bold">Name:</span> {{ restaurant.name }}
          </div>
          <div class="mb-4">
            <span class="font-bold">Contact:</span> {{ restaurant.contact }}
          </div>
          <div class="mb-4">
            <span class="font-bold">Address:</span> {{ restaurant.address }}
          </div>
          <div class="flex justify-center">
            <router-link :to="'/update-restaurant/' + restaurant.id">
              <button class="px-4 py-2 bg-green-600 text-white rounded-md mr-2">Update</button>
            </router-link>
            <button v-on:click="deleteRestaurant(restaurant.id)" class="px-4 py-2 bg-red-600 text-white rounded-md">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </template>
<script>
import HeaderCom from './HeaderCom.vue'
import axios from 'axios';

export default {
    name:'HomePage',
    data(){
        return{
            name: '',
            restaurants:[]
        }
    },
    components:{
        HeaderCom
    },
    methods:{
        async deleteRestaurant(id){
            let result = await axios.delete("http://localhost:3000/restaurant/"+id);
            console.log(result);
            if(result.status==200){
                this.loadData();
            }
        },
        async loadData(){
            let user = localStorage.getItem('user-info');
            this.name= JSON.parse(user).name;
            //if there is no user info it will redirect to SignUp
            if(!user)
            {
                this.$router.push({name:'SignUp'})
            }
            let result = await axios.get(`http://localhost:3000/restaurant`);
            console.log(result);
            this.restaurants= result.data
        }
    },
    mounted()
    {
        this.loadData();
    }
}
</script>
