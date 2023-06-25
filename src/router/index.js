import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes';
// 创建路由实例并传递 `routes` 配置
const router = createRouter({
    history: createWebHistory(),
    routes
});
// 路由导航守卫
router.beforeEach((to, from, next) => {
    // 这里需要写是否登陆过的判断逻辑
    next();
});

export default router;
