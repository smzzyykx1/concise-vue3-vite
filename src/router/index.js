import { createRouter, createWebHistory } from 'vue-router';
// 首页
import index from '@src/pages/index.vue';
// 404判断页面
import notFound from '@src/pages/notFound/index.vue';
import login from '@src/pages/login/index.vue';

// 定义一些路由
// 每个路由都需要映射到一个组件。
const routes = [
    { path: '/', redirect: '/index' },
    { path: '/index', name: 'index', component: index },
    { path: '/login', name: 'login', component: login },
    // 404页面
    { path: '/:pathMatch(.*)*', name: 'notFound', component: notFound },
];

// 创建路由实例并传递 `routes` 配置
const router = createRouter({
    history: createWebHistory(),
    routes,
});
// 路由导航守卫
router.beforeEach((to,from,next) => {
    // 这里需要写是否登陆过的判断逻辑
    next();
});

export default router;