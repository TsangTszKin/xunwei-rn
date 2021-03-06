/*
 * @Author: your name
 * @Date: 2019-11-08 16:53:14
 * @LastEditTime: 2019-11-21 15:59:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hello_world\src\Index.js
 */
import React from 'react';
import {StatusBar, Image, StyleSheet} from 'react-native';
import {TabBar} from '@ant-design/react-native';
import Home from './pages/Home';
import Find from './pages/Find';
import Message from './pages/Message';
import My from './pages/My';
import homeIcon from './resource/广场--点击.png';
import homeIcon_ from './resource/广场.png';
import findIcon from './resource/发现--点亮.png';
import findIcon_ from './resource/发现.png';
import msgIcon from './resource/未标题-1.png';
import msgIcon_ from './resource/未标题-10.png';
import myIcon from './resource/我的0=0.png';
import myIcon_ from './resource/我的.png';
import store from './store/Index';
import {Provider, observer} from 'mobx-react';

@observer
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
    };
  }

  static navigationOptions = () => {
    return {
      header: () => null, // 隐藏头部
    };
  };

  onChangeTab(tabName) {
    this.setState({
      selectedTab: tabName,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Provider indexStore={store}>
          <StatusBar barStyle="dark-content" />
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#FBC464"
            barTintColor="#f5f5f5"
            style={{height: '100%'}}>
            <TabBar.Item
              title="寻味"
              icon={
                <Image
                  source={
                    this.state.selectedTab === 'home' ? homeIcon : homeIcon_
                  }
                  style={
                    this.state.selectedTab === 'home'
                      ? styles.icon
                      : styles.icon_
                  }
                />
              }
              selected={this.state.selectedTab === 'home'}
              onPress={() => this.onChangeTab('home')}>
              <Home />
            </TabBar.Item>
            <TabBar.Item
              icon={
                <Image
                  source={
                    this.state.selectedTab === 'find' ? findIcon : findIcon_
                  }
                  style={
                    this.state.selectedTab === 'find'
                      ? styles.icon
                      : styles.icon_
                  }
                />
              }
              title="发现"
              selected={this.state.selectedTab === 'find'}
              onPress={() => this.onChangeTab('find')}>
              <Find {...this.props} />
            </TabBar.Item>
            <TabBar.Item
              icon={
                <Image
                  source={this.state.selectedTab === 'msg' ? msgIcon : msgIcon_}
                  style={
                    this.state.selectedTab === 'msg'
                      ? styles.icon
                      : styles.icon_
                  }
                />
              }
              title="动态"
              badge={2}
              selected={this.state.selectedTab === 'msg'}
              onPress={() => this.onChangeTab('msg')}>
              <Message />
            </TabBar.Item>
            <TabBar.Item
              icon={
                <Image
                  source={this.state.selectedTab === 'my' ? myIcon : myIcon_}
                  style={
                    this.state.selectedTab === 'my' ? styles.icon : styles.icon_
                  }
                />
              }
              title="我的"
              selected={this.state.selectedTab === 'my'}
              onPress={() => this.onChangeTab('my')}>
              <My />
            </TabBar.Item>
          </TabBar>
        </Provider>
      </React.Fragment>
    );
  }
}

export default Index;

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  },
  icon_: {
    width: 18,
    height: 18,
  },
});
