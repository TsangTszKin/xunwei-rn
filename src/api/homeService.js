/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-18 16:02:45
 * @LastEditTime: 2019-11-21 14:18:11
 * @LastEditors: Please set LastEditors
 */
import axios from '../config/http.filter';
import http from '../config/http';
import mockData from './mock';

export default {
  getShareList() {
    return axios.get(`${http.gwApiPrefix}/getShareList`);
  },
};
