/* eslint-disable react-native/no-inline-styles */
/*
 * @Author: your name
 * @Date: 2019-11-08 16:53:14
 * @LastEditTime: 2019-11-21 15:05:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hello_world\src\Index.js
 */
import React from 'react';
import {StyleSheet, ScrollView, Image, View} from 'react-native';
import {Grid, SearchBar} from '@ant-design/react-native';
import Img1 from '../resource/发现--辖区.png';
import Img2 from '../resource/发现--地铁线.png';
import Img3 from '../resource/发现--附近.png';
import Img4 from '../resource/发现--同城.png';

class Find extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const imgs = [Img1, Img2, Img3, Img4];
    return (
      <ScrollView>
        <View>
          <SearchBar placeholder="搜索更多地点" />
        </View>
        <View style={{marginTop: 20}}>
          <Grid
            style={{border: 'none'}}
            data={(() => {
              let result = [];
              imgs.forEach((el, j) => {
                result.push({
                  icon: (
                    <Image
                      source={el}
                      key={j}
                      style={{width: '90%', height: '90%'}}
                    />
                    // <ImageViewer imageUrls={images} />
                  ),
                  text: '',
                });
              });
              return result;
            })()}
            columnNum={2}
            isCarousel
            onPress={(_el, index) => {
              switch (index) {
                case 0:
                  this.props.navigation.navigate('FindXiaqu');
                  break;
                case 1:
                  this.props.navigation.navigate('FindMetro');
                default:
                  break;
              }
            }}
          />
        </View>
      </ScrollView>
    );
  }
}
export default Find;
