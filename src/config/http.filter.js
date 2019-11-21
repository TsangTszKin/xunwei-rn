/*
 * @Author: zengzijian
 * @Date: 2019-06-10 14:28:18
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-11-20 17:19:42
 * @Description: 请求过滤器
 */
import axios from 'axios';

const httpFilter = axios.create({
  // timeout: 1000 * 30, //gateway超时设置放在后端控制
  // withCredentials: true,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    // 'Access-Control-Request-Headers': '*'
    // 'Authorization': localStorage.token//设置默认的token到请求头
  },
});

/**
 * 请求拦截
 */
httpFilter.interceptors.request.use(config => {
  // config.headers['Access-Control-Request-Headers'] = '*' // 请求头带上token
  return config;
});

/**
 * 响应拦截
 */
httpFilter.interceptors.response.use(response => {
  return response;
});

export default httpFilter;
