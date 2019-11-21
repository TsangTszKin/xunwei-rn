/* eslint-disable no-unused-vars */
/*
 * @Author: zengzijian
 * @Date: 2019-08-26 14:17:20
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-11-21 16:08:14
 * @Description:
 */
import {observable, toJS, action, runInAction} from 'mobx';
import findService from '../api/findService';
import homeService from '../api/homeService';

class store {
  constructor() {}

  @observable pageLoaded = {
    data: {
      home: false, // home的store用全局
      find: false, //find的store用局部
      message: false, // 暂不用store
      my: false, // my的store用全局
    },
    get getData() {
      return toJS(this.data);
    },
    setData(value) {
      this.data = value;
    },
    updateData(key, value) {
      this.data[key] = value;
    },
  };
}
export default new store();
