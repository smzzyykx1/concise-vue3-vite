import { debounce } from 'lodash';
// 以1920px 底图为准开发页面
const baseSize = 14;
export const setDomFontSize = () => {
    let width = document.documentElement.clientWidth || document.body.clientWidth;
    const scale = width / 1920;
    const fontSize = baseSize * scale;
    const userAgent = navigator.userAgent;
    // Chrome和Opera有最小字体限制，所以使用zoom缩放
    if (userAgent.indexOf('Chrome') > -1 || userAgent.indexOf('Opera') > -1) {
        if (fontSize < 12) {
            const zoomScale = fontSize / 12;
            // 小于12px时判断比12小多少然后等比缩放
            document.getElementsByTagName('html')[0].style.zoom = zoomScale;
            document.documentElement.style.fontSize = '12px';
        } else {
            document.getElementsByTagName('html')[0].style.zoom = 1;
            document.documentElement.style.fontSize = fontSize + 'px';
        }
    } else {
        document.documentElement.style.fontSize = fontSize + 'px';
    }
};

let setDomFontSizeDebounce = debounce(setDomFontSize, 100);
window.addEventListener('resize', setDomFontSizeDebounce); // 浏览器加入收缩监听防抖，重新计算rem配置
