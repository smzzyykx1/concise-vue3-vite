import { createStore } from 'vuex';
const store = createStore({
    state() {
        return {
            // 用户信息
            user: {},
            // 屏幕缩放比例
            scaleWidth: 0
        };
    },
    mutations: {
        setUserIfon(state, info) {
            state.user = info;
        },
        setScaleWidth(state, info) {
            state.scaleWidth = info;
        }
    },
    // vuex模块化设置
    modules: {}
});

export default store;
