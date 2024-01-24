
import { createApp } from 'vue'
import App from './App.vue'
import LoginVue from './components/Login.vue'
let  app = createApp(App)

// 全局注册组件
app.component('MyGlobalLogin',LoginVue)

app.mount('#app')
