/* eslint-disable react-native/no-inline-styles */
/*
 * @Author: your name
 * @Date: 2019-11-08 16:53:14
 * @LastEditTime: 2019-11-11 21:53:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hello_world\src\Index.js
 */
import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import {Carousel} from '@ant-design/react-native/lib';
import BannerImg from '../../resource/广场banner.jpg';
import BannerImg2 from '../../resource/u=3958675909,1639915875&fm=21&gp=0.jpg';

export default class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onHorizontalSelectedIndexChange(index) {
    /* tslint:disable: no-console */
    // console.log('horizontal change to', index);
  }

  render() {
    return (
      <Carousel
        style={styles.wrapper}
        selectedIndex={0}
        autoplay
        infinite
        afterChange={this.onHorizontalSelectedIndexChange}>
        <View style={[styles.containerHorizontal, {backgroundColor: 'red'}]}>
          <Image source={BannerImg} style={styles.img} />
        </View>
        <View style={[styles.containerHorizontal, {backgroundColor: 'red'}]}>
          <Image source={BannerImg2} style={styles.img} />
        </View>
      </Carousel>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
  },
  containerHorizontal: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
  },
  img: {
    height: '100%',
    width: '100%',
  },
});
