import { createApp } from 'vue'
import './tailwind.css';
import router from './routers.js';
import App from './App.vue'

createApp(App)
.use(router)
.mount('#app')
