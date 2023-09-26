import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { Button,Col,Row,Icon,Field  } from 'vant';
import router from './router/index'
import 'vant/lib/index.css'
import 'css-doodle';
import 'amfe-flexible';


createApp(App).use(router).use(Button).use(Icon).use(Col).use(Row).use(Field).mount('#app')
