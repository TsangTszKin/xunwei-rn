/* eslint-disable react-native/no-inline-styles */
/*
 * @Author: your name
 * @Date: 2019-11-08 16:53:14
 * @LastEditTime: 2019-11-21 15:10:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hello_world\src\Index.js
 */
import React from 'react';
import { Text, View, Image } from 'react-native';
import { Card, WhiteSpace } from '@ant-design/react-native';
import PropTypes from 'prop-types';
import Mock from 'mockjs';
// 图片资源
import Avator1 from '../../resource/avator/1.jpg';
import Avator2 from '../../resource/avator/2.jpg';
import Avator3 from '../../resource/avator/3.jpg';
import Food1 from '../../resource/foods/1.jpg';
import Food2 from '../../resource/foods/2.jpg';
import Food3 from '../../resource/foods/3.jpg';
import Food4 from '../../resource/foods/4.jpg';
import Food5 from '../../resource/foods/5.jpg';
import Food6 from '../../resource/foods/6.jpg';
import Food7 from '../../resource/foods/7.jpg';
import Food8 from '../../resource/foods/8.jpg';

const dataList = Mock.mock({
  'dataList|5': [
    {
      'avator|1': [Food1, Food2, Food3, Food4, Food5, Food6, Food7, Food8],
      name: '@cword(5)',
      introduction: '@date("yyyy-MM-dd HH:mm")', //日期
      city: '@city',
      position: '@region(5)',
    },
  ],
})

export default class ShopListPannel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    dataList: PropTypes.array,
  };
  static defaultProps = {
    dataList: dataList.dataList
  };

  onHorizontalSelectedIndexChange() {
    /* tslint:disable: no-console */
    // console.log('horizontal change to', index);
  }

  render() {
    return (
      <React.Fragment>
        {this.props.dataList.map((item, i) => {
          return (
            <React.Fragment key={i}>
              <Card style={{ marginBottom: 10 }}>
                <Card.Header
                  title={
                    <View>
                      <Text style={{ fontSize: 18 }}>{item.name}</Text>
                      <Text style={{ fontSize: 13, marginTop: 5 }}>
                        {item.introduction}
                      </Text>
                    </View>
                  }
                  thumbStyle={{ width: 30, height: 30 }}
                  thumb={
                    <Image
                      source={item.avator}
                      style={{
                        width: 50,
                        height: 50,
                        marginRight: 15,
                        marginTop: 5,
                      }}
                    />
                  }
                  extra={`${item.city}·${item.position}`}
                />
              </Card>
              <WhiteSpace size="xs" />
            </React.Fragment>
          );
        })}
      </React.Fragment>
    );
  }
}
