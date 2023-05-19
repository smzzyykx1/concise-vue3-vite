import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(),
        eslintPlugin({
            include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue']
        })],
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
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
        },
    },
    // 引入less
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true,
                additionalData: `@import "${path.resolve(
                    __dirname,
                    'src/assets/index.less',
                )}";`,
            },
        },
    },

});
