/* eslint-disable react-native/no-inline-styles */
/*
 * @Author: your name
 * @Date: 2019-11-08 16:53:14
 * @LastEditTime: 2019-11-11 16:59:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hello_world\src\Index.js
 */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Banner from '../components/home/Banner';
import CardList from '../components/home/CardList';
import {WhiteSpace, WingBlank} from '@ant-design/react-native/lib';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <WhiteSpace />
        <Banner />
        <WingBlank size="md">
          <WhiteSpace />
          <CardList />
        </WingBlank>
        <WhiteSpace />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
