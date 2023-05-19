import axios from 'axios';
import { ElMessage } from 'element-plus';
const service = axios.create({
    // 配置域名
    baseURL: '',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
});
// 请求拦截器
service.interceptors.request.use(config => {
    console.log(config);
    return config;
}, error => {
    Promise.reject(error);
});
//相应拦截器
service.interceptors.response.use(res => {
    if (res.data.code !== 200) {
        ElMessage.error('返回码不等于200');
        return Promise.reject(res);
    }
    return res.data;
}, error => {
    ElMessage.error('网络异常');
    Promise.reject(error);
});

export default service;
