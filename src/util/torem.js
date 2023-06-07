import { debounce } from 'lodash';
// 以1920px 底图为准开发页面
const baseSize = 14;
export const setDomFontSize = () => {
    let width = document.documentElement.clientWidth || document.body.clientWidth;
    const scale = Math.max(width, 1280) / 1920;
    const fontSize = baseSize * scale;
    document.getElementsByTagName('html')[0].style['font-size'] = fontSize + 'px';
};

let setDomFontSizeDebounce = debounce(setDomFontSize, 100);
window.addEventListener('resize', setDomFontSizeDebounce); // 浏览器加入收缩监听防抖，重新计算rem配置
