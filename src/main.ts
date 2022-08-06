import { createApp } from 'vue'
import App from '@/App.vue'
import { createPinia } from 'pinia'
import '@/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(VueAxios, axios)

createApp(App).mount('#app')
