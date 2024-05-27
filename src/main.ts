import { createApp } from 'vue'
import router from './router/index'
import App from './App.vue'

// Tailwind CSS
import './tailwind/app.css'
import './style.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
