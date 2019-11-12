/* eslint-disable react-native/no-inline-styles */
/*
 * @Author: your name
 * @Date: 2019-11-08 16:53:14
 * @LastEditTime: 2019-11-12 10:43:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hello_world\src\Index.js
 */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Card, WhiteSpace, Tabs} from '@ant-design/react-native';
import PropTypes from 'prop-types';
import ViewPager from '@react-native-community/viewpager';

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
    const tabs = [
      {title: 'First Tab'},
      {title: 'Second Tab'},
      {title: 'Third Tab'},
    ];
    const style = {
      alignItems: 'center',
      justifyContent: 'center',
      height: 150,
      backgroundColor: '#fff',
    };
    return (
      <Tabs tabs={tabs}>
        <View style={style}>
          <Text>Content of First Tab</Text>
        </View>
        <View style={style}>
          <Text>Content of Second Tab</Text>
        </View>
        <View style={style}>
          <Text>Content of Third Tab</Text>
        </View>
      </Tabs>
      // <ViewPager style={styles.viewPager} initialPage={0}>
      //   <View key="1">
      //     <Text>First page</Text>
      //   </View>
      //   <View key="2">
      //     <Text>Second page</Text>
      //   </View>
      // </ViewPager>
    );
  }
}
const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
});
