/* eslint-disable react-native/no-inline-styles */
/*
 * @Author: your name
 * @Date: 2019-11-08 16:53:14
 * @LastEditTime: 2019-11-21 16:06:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hello_world\src\Index.js
 */
import React from 'react';
import { ScrollView, View } from 'react-native';
import Banner from '../components/home/Banner';
import { WhiteSpace, SearchBar } from '@ant-design/react-native';
import ShareListPannel from '../components/common/ShareListPannel';
import store from '../store/Home';
import { observer, inject } from 'mobx-react';

@inject('indexStore')
@observer
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.isLoadedData();
  }

  isLoadedData() {
    if (!this.props.indexStore.pageLoaded.getData.home) {
      store.getShareListForApi();
      this.props.indexStore.pageLoaded.updateData('home', true);
    }
  }

  render() {
    return (
      <ScrollView automaticallyAdjustContentInsets={false}>
        <SearchBar placeholder="搜索商户、美食、地点、用户" />
        <WhiteSpace />
        <Banner />
        <View style={{ marginTop: 10 }}>
          <ShareListPannel
            // dataList={store.list.getData.dataSource}
          />
        </View>
        <WhiteSpace />
      </ScrollView>
    );
  }
}
export default Home;
