import './index.scss'
import './Lib/gulu.scss'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'


const app = createApp(App)
app.use(router)
app.mount('#app')
