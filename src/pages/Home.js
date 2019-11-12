/* eslint-disable react-native/no-inline-styles */
/*
 * @Author: your name
 * @Date: 2019-11-08 16:53:14
 * @LastEditTime: 2019-11-12 10:47:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hello_world\src\Index.js
 */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Banner from '../components/home/Banner';
import MainPannel from '../components/home/MainPannel';
import {WhiteSpace, WingBlank} from '@ant-design/react-native';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <WhiteSpace />
        <Banner />
        <MainPannel />
        <WhiteSpace />
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({});
