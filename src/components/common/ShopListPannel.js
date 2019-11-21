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
import {Text, View, Image} from 'react-native';
import {Card, WhiteSpace} from '@ant-design/react-native';
import PropTypes from 'prop-types';

export default class ShopListPannel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    dataList: PropTypes.array,
  };
  static defaultProps = {
    dataList: [
      // {
      //   avator: Food1,
      //   name: '旧作的茶1',
      //   introduction: '下午茶第9杯9.9折',
      //   city: '广州',
      //   position: '广州',
      // },
    ],
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
              <Card style={{marginBottom: 10}}>
                <Card.Header
                  title={
                    <View>
                      <Text style={{fontSize: 18}}>{item.name}</Text>
                      <Text style={{fontSize: 13, marginTop: 5}}>
                        {item.introduction}
                      </Text>
                    </View>
                  }
                  thumbStyle={{width: 30, height: 30}}
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
