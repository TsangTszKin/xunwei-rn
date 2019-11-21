/*
 * @Author: zengzijian
 * @Date: 2019-08-26 15:24:54
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-11-21 15:09:58
 * @Description:
 */
import http from '../config/http';
import Mock from 'mockjs';
// 图片资源
import Avator1 from '../resource/avator/1.jpg';
import Avator2 from '../resource/avator/2.jpg';
import Avator3 from '../resource/avator/3.jpg';
import Food1 from '../resource/foods/1.jpg';
import Food2 from '../resource/foods/2.jpg';
import Food3 from '../resource/foods/3.jpg';
import Food4 from '../resource/foods/4.jpg';
import Food5 from '../resource/foods/5.jpg';
import Food6 from '../resource/foods/6.jpg';
import Food7 from '../resource/foods/7.jpg';
import Food8 from '../resource/foods/8.jpg';

const getShareList = Mock.mock(`${http.gwApiPrefix}/getShareList`, {
  code: 1,
  message: '操作成功',
  result: {
    'dataList|5': [
      {
        'avator|1': [Avator1, Avator2, Avator3],
        userName: '@cname',
        time: '@date("yyyy-MM-dd HH:mm")', //日期
        content: '@cparagraph',
        city: '@city',
        shopName: '@cword(5)',
        'likeCount|0-99': 99,
        'commentCount|0-99': 99,
        'imgs|1-9': [Food1, Food2, Food3, Food4, Food5, Food6, Food7, Food8],
        'simpleComment|0-5': [
          {
            userName: '@cname',
            content: '@csentence',
          },
        ],
      },
    ],
  },
});

const getShopList = Mock.mock(`${http.gwApiPrefix}/getShopList`, {
  code: 1,
  message: '操作成功',
  result: {
    'dataList|5': [
      {
        'avator|1': [Food1, Food2, Food3, Food4, Food5, Food6, Food7, Food8],
        name: '@cword(5)',
        introduction: '@date("yyyy-MM-dd HH:mm")', //日期
        city: '@city',
        position: '@region(5)',
      },
    ],
  },
});

export {getShareList, getShopList};
