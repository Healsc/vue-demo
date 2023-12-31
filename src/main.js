import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Antd from "ant-design-vue"

import './assets/main.css'

const app = createApp(App)
app.use(Antd)
app.use(createPinia())
app.use(router)
// await router.isReady()
app.mount('#app')
