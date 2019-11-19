/* eslint-disable react-native/no-inline-styles */
/*
 * @Author: your name
 * @Date: 2019-11-08 16:53:14
 * @LastEditTime: 2019-11-19 14:48:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hello_world\src\Index.js
 */
import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Card, WhiteSpace, Grid, Icon} from '@ant-design/react-native';
import PropTypes from 'prop-types';
import BannerImg2 from '../../resource/u=3958675909,1639915875&fm=21&gp=0.jpg';
import Food1 from '../../resource/foods/1.jpg';
import Food2 from '../../resource/foods/2.jpg';
import Food3 from '../../resource/foods/3.jpg';
import Food4 from '../../resource/foods/4.jpg';
import Food5 from '../../resource/foods/5.jpg';
import Food6 from '../../resource/foods/6.jpg';
import Food7 from '../../resource/foods/7.jpg';
import Food8 from '../../resource/foods/8.jpg';
import Avator1 from '../../resource/avator/1.jpg';
import Avator2 from '../../resource/avator/2.jpg';
import Avator3 from '../../resource/avator/3.jpg';

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
      {
        avator: Food1,
        name: '旧作的茶1',
        introduction: '下午茶第9杯9.9折',
        address: '广州·车陂',
      },
      {
        avator: Food2,
        name: '旧作的茶2',
        introduction: '下午茶第9杯9.8折',
        address: '广州·车陂',
      },
      {
        avator: Food3,
        name: '旧作的茶3',
        introduction: '下午茶第9杯9.8折',
        address: '广州·车陂',
      },
      {
        avator: Food4,
        name: '旧作的茶4',
        introduction: '下午茶第9杯9.8折',
        address: '广州·车陂',
      },
      {
        avator: Food5,
        name: '旧作的茶5',
        introduction: '下午茶第9杯9.8折',
        address: '广州·车陂',
      },
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
                  extra={item.address}
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

const styles = StyleSheet.create({
  avator: {
    height: 50,
    width: 50,
  },
  imgsShell: {
    width: '100%',
    // height: 500,
    margin: 50,
    marginTop: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgs: {
    width: 80,
    height: 80,
  },
  footShell: {
    flex: 2,
    // width: 100,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  footerCell: {
    flex: 1,
    // width: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  commentShell: {
    margin: 3,
    marginLeft: 10,
  },
  userName: {
    color: '#FBC464',
  },
  userComment: {
    color: '#333333',
  },
});
