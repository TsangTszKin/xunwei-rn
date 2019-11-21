/* eslint-disable no-unused-vars */
/*
 * @Author: zengzijian
 * @Date: 2019-08-26 14:17:20
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-11-21 16:03:31
 * @Description:
 */
import {observable, toJS, action, runInAction} from 'mobx';
import homeService from '../api/homeService';

class store {
  constructor() {
    this.getShareListForApi = this.getShareListForApi.bind(this);
  }

  @observable list = {
    data: {
      dataSource: [],
      loading: true,
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

  @action async getShareListForApi() {
    this.list.updateData('loading', true);
    const responseData = await homeService.getShareList();
    this.list.updateData('loading', false);
    this.list.updateData('dataSource', responseData.data.result.dataList);
  }
}
export default new store();
