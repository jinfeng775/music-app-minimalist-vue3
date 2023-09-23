import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { Button,Col,Row } from 'vant';
import router from './router/index'
import 'vant/lib/index.css'
import 'css-doodle';
createApp(App).use(router).use(Button).use(Col).use(Row).mount('#app')
