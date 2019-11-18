/* eslint-disable react-native/no-inline-styles */
/*
 * @Author: your name
 * @Date: 2019-11-08 16:53:14
 * @LastEditTime: 2019-11-18 09:00:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hello_world\src\Index.js
 */
import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import Banner from '../components/home/Banner';
import MainPannel from '../components/home/MainPannel';
import {WhiteSpace, WingBlank, SearchBar} from '@ant-design/react-native';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = {
    tabBarLabel: 'Home!',
  };

  render() {
    return (
      <ScrollView automaticallyAdjustContentInsets={false}>
        <SearchBar placeholder="搜索商户、美食、地点、用户" />
        <WhiteSpace />
        <Banner />
        <MainPannel />
        <WhiteSpace />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({});
