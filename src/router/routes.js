// 首页header
import index from '@src/pages/index/index.vue';
// 404判断页面
import notFound from '@src/pages/not-found/index.vue';
import login from '@src/pages/login/index.vue';
// 定义一些路由
// 每个路由都需要映射到一个组件。
// menuName用来判断显示的菜单
export const routes = [
    { path: '/', redirect: '/index' },
    { path: '/index', name: 'index', component: index },
    { path: '/login', name: 'login', component: login },
    // 404页面
    { path: '/:pathMatch(.*)*', name: 'not-found', component: notFound }
];