import { createApp } from 'vue';
import App from './App.vue';
// 全局引入elementPlus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// 挂载router
import router from './router';
import store from './store/index';

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.use(store);
app.mount('#app');