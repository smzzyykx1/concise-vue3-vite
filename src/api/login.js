import { service } from './index';

// 登录接口
export const login = (data) => {
    return service.post('',{ data });
};