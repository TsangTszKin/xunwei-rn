/* eslint-disable no-unused-vars */
/*
 * @Author: zengzijian
 * @Date: 2019-08-26 14:17:20
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-11-21 15:03:05
 * @Description:
 */
import {observable, toJS, action, runInAction} from 'mobx';
import findService from '../api/findService';

class store {
  constructor() {
    this.getShopListForApi = this.getShopListForApi.bind(this);
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

  @action async getShopListForApi() {
    this.list.updateData('loading', true);
    const responseData = await findService.getShopList();
    this.list.updateData('loading', false);
    this.list.updateData('dataSource', responseData.data.result.dataList);
  }
}
export default store;
