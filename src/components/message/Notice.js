/*
 * @Author: your name
 * @Date: 2019-11-13 14:17:04
 * @LastEditTime: 2019-11-13 14:49:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hello_world\src\components\message\Follow.js
 */
// tslint:disable:no-empty
import React from 'react';
import {Image, ScrollView, View, Text} from 'react-native';
import {List} from '@ant-design/react-native';
import NoticeIco from '../../resource/通知--寻味.png';

const Item = List.Item;
const Brief = Item.Brief;
export default class Notice extends React.Component {
  render() {
    return (
      <ScrollView
        style={{backgroundColor: '#f5f5f9', width: '100%'}}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <List>
          <Item
            style={{padding: 10}}
            thumb={
              <Image
                source={NoticeIco}
                style={{
                  width: 40,
                  height: 40,
                  marginRight: 10,
                  borderRadius: 10,
                }}
              />
            }
            arrow="horizontal">
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: 50,
              }}>
              <View style={{}}>
                <Text style={{fontSize: 17, color: '#333'}}>官方消息</Text>
                <Text style={{color: '#808080'}}>寻味攻略</Text>
              </View>
              <Text style={{color: '#808080'}}>2019-11-13 14：34</Text>
            </View>
          </Item>
          <Item
            style={{padding: 10}}
            thumb={
              <Image
                source={NoticeIco}
                style={{
                  width: 40,
                  height: 40,
                  marginRight: 10,
                  borderRadius: 10,
                }}
              />
            }
            arrow="horizontal">
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: 50,
              }}>
              <View style={{}}>
                <Text style={{fontSize: 17, color: '#333'}}>官方消息</Text>
                <Text style={{color: '#808080'}}>寻味攻略</Text>
              </View>
              <Text style={{color: '#808080'}}>2019-11-13 14：34</Text>
            </View>
          </Item>
        </List>
      </ScrollView>
    );
  }
}
