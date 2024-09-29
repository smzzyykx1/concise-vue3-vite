import axios from 'axios';
import { ElMessage } from 'element-plus';
const service = axios.create({
    // 配置域名
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
});
// 请求拦截器
service.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);
// 接口白名单
const apiWhiteList = [];
// 响应拦截器
service.interceptors.response.use(
    (res) => {
    // 增加接口白名单，隔离一些特定接口不用统一处理错误结果，如login页面
        if (res.data.errorCode !== 200 && !apiWhiteList.includes(res.config.url)) {
            ElMessage.error(res.data.msg);
            return { ...res.data };
        }
        return { ...res.data };
    },
    (error) => {
    // 登录超时跳转登录页
        ElMessage.error('网络异常');
        return { ...error.response.data };
    }
);

export default service;
