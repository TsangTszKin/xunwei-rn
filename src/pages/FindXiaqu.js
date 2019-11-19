/* eslint-disable react-native/no-inline-styles */
/*
 * @Author: your name
 * @Date: 2019-11-17 14:29:30
 * @LastEditTime: 2019-11-19 17:17:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hello_world\src\pages\FindXiaqu.js
 */
import React from 'react';
import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import {Button, Drawer, List, WhiteSpace} from '@ant-design/react-native';
import AreaImg from '../resource/行政区(1).png';
import ShopListPannel from '../components/common/ShopListPannel';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
});
export default class FindXiaqu extends React.Component {
  constructor(props) {
    super(props);
    this.onOpenChange = isOpen => {
      /* tslint:disable: no-console */
      console.log('是否打开了 Drawer', isOpen.toString());
    };
  }

  static navigationOptions = {
    title: '辖区',
  };

  render() {
    const itemArr = areaList.map((item, index) => {
      return (
        <List.Item
          style={{backgroundColor: '#333'}}
          key={index}
          // thumb={
          //   <Text
          //     style={{
          //       backgroundColor: item.color,
          //       width: item.special ? 45 : 30,
          //       height: 30,
          //       borderRadius: item.special ? 45 : 30,
          //       lineHeight: 30,
          //       textAlign: 'center',
          //       color: '#FFF',
          //     }}>
          //     {item.name}
          //   </Text>
          // }
        >
          <Text style={{color: '#FFF', marginLeft: 10}}>{item.name}</Text>
        </List.Item>
      );
    });
    // Todo: https://github.com/DefinitelyTyped/DefinitelyTyped
    const sidebar = (
      <ScrollView style={[styles.container]}>
        <View
          style={{
            backgroundColor: '#333',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            margin: 10,
          }}>
          <Image source={AreaImg} style={{width: 30, height: 30}} />
        </View>
        <List style={{backgroundColor: '#333'}}>{itemArr}</List>
      </ScrollView>
    );
    return (
      <Drawer
        sidebar={sidebar}
        position="left"
        open={false}
        drawerRef={el => (this.drawer = el)}
        onOpenChange={this.onOpenChange}
        drawerBackgroundColor="#ccc">
        <View style={{flex: 1, padding: 8}}>
          <ShopListPannel />
          <Button onPress={() => this.drawer && this.drawer.openDrawer()}>
            根据行政区域查找
          </Button>
        </View>
      </Drawer>
    );
  }
}

const areaList = [
  {
    name: '天河区',
    color: '',
  },
  {
    name: '越秀区',
    color: '',
  },
  {
    name: '海珠区',
    color: '',
  },
  {
    name: '荔湾区',
    color: '',
  },
  {
    name: '番禺区',
    color: '',
  },
  {
    name: '黄浦区',
    color: '',
  },
  {
    name: '增城区',
    color: '',
  },
  {
    name: '从化区',
    color: '',
  },
  {
    name: '花都区',
    color: '',
  },
  {
    name: '南沙区',
    color: '',
  },
];
