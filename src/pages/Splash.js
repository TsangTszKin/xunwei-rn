/* eslint-disable react-native/no-inline-styles */
/*
 * @Author: your name
 * @Date: 2019-11-08 16:53:14
 * @LastEditTime: 2019-11-20 20:48:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hello_world\src\Index.js
 */
import React from 'react';
import {StyleSheet, Image} from 'react-native';
import SplashImg from '../resource/start.png';

export default class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = () => {
    return {
      header: () => null, // 隐藏头部
    };
  };

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Index');
    }, 1000);
  }

  render() {
    return <Image source={SplashImg} style={{width: '100%', height: '100%'}} />;
  }
}
