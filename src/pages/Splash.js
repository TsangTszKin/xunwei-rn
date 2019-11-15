/* eslint-disable react-native/no-inline-styles */
/*
 * @Author: your name
 * @Date: 2019-11-08 16:53:14
 * @LastEditTime: 2019-11-15 08:51:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hello_world\src\Index.js
 */
import React from 'react';
import {StyleSheet, ScrollView, Image, View} from 'react-native';
import Banner from '../components/home/Banner';
import MainPannel from '../components/home/MainPannel';
import {WhiteSpace, Grid, SearchBar} from '@ant-design/react-native';
import Img1 from '../resource/发现--辖区.png';
import Img2 from '../resource/发现--地铁线.png';
import Img3 from '../resource/发现--附近.png';
import Img4 from '../resource/发现--同城.png';
import Splash from '../resource/闪屏.jpg';

export default class Find extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Index');
    }, 1000);
  }

  render() {
    return <Image source={Splash} style={{width: '100%', height: '100%'}} />;
  }
}

const styles = StyleSheet.create({});
