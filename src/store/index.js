import { createStore } from 'vuex';
const store = createStore({
    state() {
        return {
            //用户信息
            user: {},
        };
    },
    mutations: {
        setUserIfon(state, info) {
            state.user = info;
        },
    },
    // vuex模块化设置
    modules: {},
});

export default store;
