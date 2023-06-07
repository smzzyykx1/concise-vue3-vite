import { createApp } from 'vue';
import App from './App.vue';

// 全局引入elementPlus
import ElementPlus from 'element-plus';
// 引入element中文包
import zhCn from 'element-plus/lib/locale/lang/zh-cn';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
// 挂载router
import router from './router';
import store from './store/index';
import { setDomFontSize } from './util/torem.js';
// 引入全局样式
import './assets/css/reset.less';
import 'element-plus/dist/index.css';
// 根据分辨率改字体大小
setDomFontSize();
const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}
app.use(router);
app.use(ElementPlus, { locale: zhCn });
app.use(store);
app.mount('#app');
