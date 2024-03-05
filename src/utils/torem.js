import { debounce, divide } from 'lodash';
// 以1920px 底图为准开发页面
const baseSize = 14;
export const setDomFontSize = (store) => {
    const count = () => {
        let width = document.documentElement.clientWidth || document.body.clientWidth;
        const scale = width / 1920;
        const fontSize = baseSize * scale;
        const userAgent = navigator.userAgent;
        // Chrome和Opera有最小字体限制，所以使用zoom缩放
        if (userAgent.indexOf('Chrome') > -1 || userAgent.indexOf('Opera') > -1) {
            if (fontSize < 12) {
                const zoomScale = fontSize / 12;
                // 因为缩放到12以下用zoom所以比例直接用14 / 12
                store.commit('setScaleWidth', 14 / 12);
                // 小于12px时判断比12小多少然后等比缩放
                document.getElementsByTagName('html')[0].style.zoom = zoomScale;
                document.documentElement.style.fontSize = '12px';
            } else {
                store.commit('setScaleWidth', scale);
                document.getElementsByTagName('html')[0].style.zoom = 1;
                document.documentElement.style.fontSize = fontSize + 'px';
            }
        } else {
            store.commit('setScaleWidth', scale);
            document.documentElement.style.fontSize = fontSize + 'px';
        }
    };
    count();
    let setDomFontSizeDebounce = debounce(count, 100);
    window.addEventListener('resize', setDomFontSizeDebounce); // 浏览器加入收缩监听防抖，重新计算rem配置
};
// 使用了zoom的浏览器需要特殊处理某些zoom不能使用的场景
export const notZoomStyle = (store) => {
    const count = () => {
        let width = document.documentElement.clientWidth || document.body.clientWidth;
        const scale = width / 1920;
        const fontSize = baseSize * scale;
        const userAgent = navigator.userAgent;
        // Chrome和Opera有最小字体限制，所以使用zoom缩放
        if (userAgent.indexOf('Chrome') > -1 || userAgent.indexOf('Opera') > -1) {
            if (fontSize < 12) {
                const zoomScale = fontSize / 12;
                // 算出扩大的倍数
                const expansionFactor = divide(1, zoomScale);
                store.commit('setNotZoomStyle', {
                    zoom: expansionFactor,
                    'transform-origin': 'top left',
                    transform: `scale(${zoomScale})`
                });
                return;
            }
            store.commit('setNotZoomStyle', {});
            return;
        }
        store.commit('setNotZoomStyle', {});
    };
    count();
    let setDomFontSizeDebounce = debounce(count, 100);
    window.addEventListener('resize', setDomFontSizeDebounce); // 浏览器加入收缩监听防抖
};