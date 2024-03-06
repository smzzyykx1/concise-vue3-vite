import { createStore } from 'vuex';
const store = createStore({
    state() {
        return {
            // 用户信息
            user: {},
            // 屏幕缩放比例
            scaleWidth: 0,
            // 使用了zoom的浏览器需要特殊处理某些zoom不能使用的场景 返回样式值
            notZoomStyle: {}
        };
    },
    mutations: {
        setUserIfon(state, info) {
            state.user = info;
        },
        setScaleWidth(state, info) {
            state.scaleWidth = info;
        },
        setNotZoomStyle(state, info) {
            state.notZoomStyle = info;
        }
    },
    // vuex模块化设置
    modules: {}
});

export default store;
