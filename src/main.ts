import { createApp } from 'vue'
import App from './App.vue'
import Varlet from '@varlet/ui'
import '@varlet/ui/es/style.js'  // 引入varlet
import '@varlet/touch-emulator' // 桌面适配

createApp(App).use(Varlet).mount('#app')
