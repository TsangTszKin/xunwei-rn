/*
 * @Author: your name
 * @Date: 2019-11-13 13:48:13
 * @LastEditTime: 2019-11-13 16:35:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hello_world\src\pages\Message.js
 */
import React from 'react';
import {ScrollView, Text, View, TouchableOpacity} from 'react-native';
import {Tabs} from '@ant-design/react-native';
import Notice from '../components/message/Notice';
import Follow from '../components/message/Follow';
export default class Message extends React.Component {
  render() {
    const tabs = [{title: '关注'}, {title: '通知'}];

    const style = {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
    };
    return (
      <View style={{flex: 1}}>
        <Tabs
          tabs={tabs}
          tabBarActiveTextColor="#000"
          tabBarInactiveTextColor="#E4E4E4"
          tabBarBackgroundColor="#FBC464"
          tabBarUnderlineStyle="#FBC464"
          renderUnderline={s => {
            return <View style={{backgroundColor: '#000'}} />;
          }}>
          <View style={style}>
            <Follow />
          </View>
          <View style={style}>
            <Notice />
          </View>
        </Tabs>
      </View>
    );
  }
}
export const title = 'Tabs';
export const description = 'Tabs example';
