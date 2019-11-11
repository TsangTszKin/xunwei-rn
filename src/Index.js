/*
 * @Author: your name
 * @Date: 2019-11-08 16:53:14
 * @LastEditTime: 2019-11-11 16:51:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hello_world\src\Index.js
 */
import React from 'react';
import {Text, View, StatusBar} from 'react-native';
import {Icon, SearchBar, TabBar} from '@ant-design/react-native/lib';
import Home from './pages/Home';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
    };
  }

  renderContent(pageText) {
    return (
      <View style={{flex: 1, alignItems: 'center', backgroundColor: 'white'}}>
        <SearchBar placeholder="Search" showCancelButton />
        <Text style={{margin: 50}}>{pageText}</Text>
      </View>
    );
  }

  onChangeTab(tabName) {
    this.setState({
      selectedTab: tabName,
    });
  }

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="#f5f5f5">
          <TabBar.Item
            title="Life"
            icon={<Icon name="home" />}
            selected={this.state.selectedTab === 'blueTab'}
            onPress={() => this.onChangeTab('blueTab')}>
            <Home />
          </TabBar.Item>
          <TabBar.Item
            icon={<Icon name="ordered-list" />}
            title="Koubei"
            badge={2}
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => this.onChangeTab('redTab')}>
            {this.renderContent('Koubei Tab')}
          </TabBar.Item>
          <TabBar.Item
            icon={<Icon name="like" />}
            title="Friend"
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => this.onChangeTab('greenTab')}>
            {this.renderContent('Friend Tab')}
          </TabBar.Item>
          <TabBar.Item
            icon={<Icon name="user" />}
            title="My"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => this.onChangeTab('yellowTab')}>
            {this.renderContent('My Tab')}
          </TabBar.Item>
        </TabBar>
      </>
    );
  }
}
