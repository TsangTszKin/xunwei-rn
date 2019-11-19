/* eslint-disable react-native/no-inline-styles */
/*
 * @Author: your name
 * @Date: 2019-11-17 14:29:30
 * @LastEditTime: 2019-11-19 17:17:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hello_world\src\pages\FindMetro.js
 */
import React from 'react';
import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import {Button, Drawer, List, WhiteSpace} from '@ant-design/react-native';
import MetroImg from '../resource/地铁(1).png';
import ShopListPannel from '../components/common/ShopListPannel';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
});
export default class FindMetro extends React.Component {
  constructor(props) {
    super(props);
    this.onOpenChange = isOpen => {
      /* tslint:disable: no-console */
      console.log('是否打开了 Drawer', isOpen.toString());
    };
  }

  static navigationOptions = {
    title: '地铁',
  };

  render() {
    const itemArr = lineMetro.map((item, index) => {
      return (
        <List.Item
          style={{backgroundColor: '#333'}}
          key={index}
          thumb={
            <Text
              style={{
                backgroundColor: item.color,
                width: item.special ? 45 : 30,
                height: 30,
                borderRadius: item.special ? 45 : 30,
                lineHeight: 30,
                textAlign: 'center',
                color: '#FFF',
              }}>
              {item.name}
            </Text>
          }>
          <Text style={{color: '#FFF', marginLeft: 10}}>
            {item.special ? '线' : '号线'}
          </Text>
        </List.Item>
      );
    });
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
          <Image source={MetroImg} style={{width: 30, height: 30}} />
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
            根据地铁站点查找
          </Button>
        </View>
      </Drawer>
    );
  }
}

const lineMetro = [
  {
    name: '1',
    color: '#e0c841',
  },
  {
    name: '2',
    color: '#115da0',
  },
  {
    name: '3',
    color: '#e7a056',
  },
  {
    name: '4',
    color: '#137644',
  },
  {
    name: '5',
    color: '#c30c3a',
  },
  {
    name: '6',
    color: '#c30c3b',
  },
  {
    name: '7',
    color: '#8dbb2b',
  },
  {
    name: '8',
    color: '#107c7b',
  },
  {
    name: '9',
    color: '#72ce9e',
  },
  {
    name: '13',
    color: '#8a8800',
  },

  {
    name: '14',
    color: '#7e2722',
  },
  {
    name: '21',
    color: '#171055',
  },
  {
    name: 'APM',
    color: '#00b9e6',
    special: true,
  },
  {
    name: '广佛',
    color: '#b2c70d',
    special: true,
  },
];
