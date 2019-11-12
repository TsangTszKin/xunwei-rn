/* eslint-disable react-native/no-inline-styles */
/*
 * @Author: your name
 * @Date: 2019-11-08 16:53:14
 * @LastEditTime: 2019-11-12 17:45:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hello_world\src\Index.js
 */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Card, WhiteSpace, Tabs} from '@ant-design/react-native';
import PropTypes from 'prop-types';
import CardList from './CardList';

export default class MainPannel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onHorizontalSelectedIndexChange(index) {
    /* tslint:disable: no-console */
    // console.log('horizontal change to', index);
  }

  render() {
    const tabs = [{title: '此时此刻'}, {title: '精选分享'}];
    const style = {
      alignItems: 'center',
      justifyContent: 'center',
      height: 150,
      backgroundColor: '#fff',
    };
    return (
      // <Tabs
      //   tabs={tabs}
      //   tabBarActiveTextColor="#FBC464"
      //   tabBarUnderlineStyle={{backgroundColor: 'none'}}>
      //   <View>
      //     <CardList />
      //   </View>
      //   <CardList />
      //   <View>
      //     <Text>Content of Second Tab</Text>
      //   </View>
      // </Tabs>
      <View style={{marginTop: 10}}>
        <CardList />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
});
