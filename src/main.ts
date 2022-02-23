
// import App from "@/views/App.vue";
// import Demo from "@/views/demo/index.vue";
import { createApp } from 'vue'
import App from '@/App.vue'
import Varlet from '@varlet/ui'
import '@varlet/ui/es/style.js'  // 引入varlet
import '@varlet/touch-emulator' // 桌面适配
import router from './router'



const app = createApp(App)
app.use(router)
.use(Varlet)
app.mount('#app')