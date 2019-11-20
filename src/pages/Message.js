/*
 * @Author: your name
 * @Date: 2019-11-13 13:48:13
 * @LastEditTime: 2019-11-20 16:25:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hello_world\src\pages\Message.js
 */
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Tabs} from '@ant-design/react-native';
import Notice from '../components/message/Notice';
import Follow from '../components/message/Follow';
// import ViewPager from '@react-native-community/viewpager';
// import ScrollableTabView, {
//   DefaultTabBar,
// } from 'react-native-scrollable-tab-view';

export default class Message extends React.Component {
  render() {
    const tabs = [{title: '关注'}, {title: '通知'}];

    const style = {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
    };
    return (
      // <View style={{ flex: 1 }}>
      <Tabs
        tabs={tabs}
        tabBarActiveTextColor="#000"
        tabBarInactiveTextColor="#808080"
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
      // <ViewPager style={styles.viewPager} initialPage={0}>
      //   <View key="1">
      //     <Text>First page</Text>
      //   </View>
      //   <View key="2">
      //     <Text>Second page</Text>
      //   </View>
      // </ViewPager>
      // {/* </View> */ }
      // <ScrollableTabView
      //   style={{marginTop: 20}}
      //   initialPage={1}
      //   renderTabBar={() => <DefaultTabBar />}>
      //   <Text tabLabel="Tab #1">My</Text>
      //   <Text tabLabel="Tab #2">favorite</Text>
      //   <Text tabLabel="Tab #3">project</Text>
      // </ScrollableTabView>
      // <View />
    );
  }
}
const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
});
