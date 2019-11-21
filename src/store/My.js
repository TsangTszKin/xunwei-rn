/* eslint-disable no-unused-vars */
/*
 * @Author: zengzijian
 * @Date: 2019-08-26 14:17:20
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-11-21 16:08:28
 * @Description:
 */
import {observable, toJS, action, runInAction} from 'mobx';
import findService from '../api/findService';
import homeService from '../api/homeService';

class store {
  constructor() {
    this.getShareListForApi = this.getShareListForApi.bind(this);
    this.getShopListForApi = this.getShopListForApi.bind(this);
  }

  @observable shareList = {
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

  @observable shopList = {
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
    this.shopList.updateData('loading', true);
    const responseData = await findService.getShopList();
    this.shopList.updateData('loading', false);
    this.shopList.updateData('dataSource', responseData.data.result.dataList);
  }

  @action async getShareListForApi() {
    this.shareList.updateData('loading', true);
    const responseData = await homeService.getShareList();
    this.shareList.updateData('loading', false);
    this.shareList.updateData('dataSource', responseData.data.result.dataList);
  }
}
export default new store();
