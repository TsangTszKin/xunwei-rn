/* eslint-disable react-native/no-inline-styles */
/*
 * @Author: your name
 * @Date: 2019-11-08 16:53:14
 * @LastEditTime: 2019-11-19 10:50:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hello_world\src\Index.js
 */
import React from 'react';
import {View} from 'react-native';
import ShareListPannel from '../common/ShareListPannel';

export default class MainPannel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onHorizontalSelectedIndexChange() {
    /* tslint:disable: no-console */
    // console.log('horizontal change to', index);
  }

  render() {
    return (
      // <Tabs
      //   tabs={tabs}
      //   tabBarActiveTextColor="#FBC464"
      //   tabBarUnderlineStyle={{backgroundColor: 'none'}}>
      //   <View>
      //     <ShareListPannel />
      //   </View>
      //   <ShareListPannel />
      //   <View>
      //     <Text>Content of Second Tab</Text>
      //   </View>
      // </Tabs>
      <View style={{marginTop: 10}}>
        <ShareListPannel />
      </View>
    );
  }
}
