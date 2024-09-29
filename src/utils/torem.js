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
                // 解决echarts zoom 鼠标移入便宜问题
                insertCss('canvas', {
                    zoom: expansionFactor,
                    'transform-origin': 'top left',
                    transform: `scale(${zoomScale})`
                });
                return;
            }
            store.commit('setNotZoomStyle', {});
            // 解决echarts zoom 鼠标移入便宜问题
            insertCss('canvas', {
                zoom: 1,
                'transform-origin': 'top left',
                transform: `scale(${1})`
            });
            return;
        }
        store.commit('setNotZoomStyle', {});
        // 解决echarts zoom 鼠标移入便宜问题
        insertCss('canvas', {
            zoom: 1,
            'transform-origin': 'top left',
            transform: `scale(${1})`
        });
    };
    count();
    let setDomFontSizeDebounce = debounce(count, 100);
    window.addEventListener('resize', setDomFontSizeDebounce); // 浏览器加入收缩监听防抖
};


// 动态插入style 样式
const insertCss = (select, styles) => {
    if (document.styleSheets.length === 0) { // 如果没有style标签,则创建一个style标签
        let style = document.createElement('style');
        document.head.appendChild(style);
    }
    let styleSheet = document.styleSheets[document.styleSheets.length - 1]; // 如果有style 标签.则插入到最后一个style标签中
    let str = select + ' {'; // 插入的内容必须是字符串,所以得把obj转化为字符串
    for (let prop in styles) {
        str += prop.replace(/([A-Z])/g, function (item) { // 使用正则把大写字母替换成 '-小写字母'
            return '-' + item.toLowerCase();
        }) + ':' + styles[prop] + ';';
    }
    str += '}';
    styleSheet.insertRule(str, styleSheet.cssRules.length); // 插入样式到最后一个style标签中的最后面
};