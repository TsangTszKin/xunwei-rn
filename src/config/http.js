/* eslint-disable no-unused-vars */
/*
 * @Author: zengzijian
 * @Date: 2018-07-24 15:33:02
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-11-20 17:20:49
 * @Description: 根据环境不同，采用不同的请求配置
 */

const development = {
  gwApiPrefix: 'http://localhost:8888/system',
  wsApiPrefix: 'ws://localhost:8888/system',
};
const production = {
  // gwApiPrefix: 'http://192.168.0.72:7081',
  gwApiPrefix: '',
  wsApiPrefix: '',
};

const test = {
  gwApiPrefix: '',
  wsApiPrefix: 'ws://192.168.0.99:7081',
};

var httpResult;

switch (process.env.type) {
  case 'development': //此处切换后端接口ip端口
    httpResult = development;
    break;
  case 'test':
    httpResult = test;
    break;
  case 'production':
    httpResult = production;
    break;

  default:
    httpResult = development;
    break;
}
module.exports = {
  http: httpResult,
};
