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
        'map': [
            ['@src', path.resolve(__dirname, './src')]
        ]
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
