import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
import path from 'path';
import autoprefixer from 'autoprefixer';
import postCssPxToRem from 'postcss-pxtorem';
import stylelitPlugin from 'vite-plugin-stylelint';
import vueJsx from '@vitejs/plugin-vue-jsx'; // 配置vue使用jsx
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueJsx(),
        eslintPlugin(),
        stylelitPlugin({ fix: true })
    ],
    resolve: {
        alias: {
            '@src': path.resolve(__dirname, './src')
        }
    },
    // 配置开发环境代理
    server: {
        proxy: {
            // 字符串简写写法：http://localhost:5173/foo -> http://localhost:4567/foo
            // '/foo': 'http://localhost:4567',
            // 带选项写法：http://localhost:5173/api/bar -> http://jsonplaceholder.typicode.com/bar
            '/api': {
                target: 'http://jsonplaceholder.typicode.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    },
    // 引入less
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true,
                additionalData: `@import "${path.resolve(
                    __dirname,
                    'src/assets/css/reset.less'
                )}";`
            }
        },
        postcss: {
            plugins: [
                autoprefixer({ // 自动添加前缀
                    overrideBrowserslist: [
                        'Android 4.1',
                        'iOS 7.1',
                        'Chrome > 31',
                        'ff > 31',
                        'ie >= 8',
                        'last 10 versions'
                    ],
                    grid: false
                }),
                postCssPxToRem({
                    // 注意只改变css中的，style中的不进行转换
                    // 自适应，px>rem转换
                    rootValue: 14, // 根元素字体大小 16/1.25
                    unitPrecision: 5, // 转换成rem后保留的小数点位数
                    propList: ['*'], // 匹配CSS中的属性，* 代表启用所有属性
                    selectorBlackList: ['.no-post-rem'], // 要忽略并保留为 px 的选择器
                    mediaQuery: false // （布尔值）允许在媒体查询中转换px
                })
            ]
        }
    }
});
