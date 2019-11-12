/* eslint-disable react-native/no-inline-styles */
/*
 * @Author: your name
 * @Date: 2019-11-08 16:53:14
 * @LastEditTime: 2019-11-12 17:49:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hello_world\src\Index.js
 */
import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {Card, WhiteSpace, Grid} from '@ant-design/react-native';
import PropTypes from 'prop-types';
import myIcon from '../../resource/我的0=0.png';
import BannerImg2 from '../../resource/u=3958675909,1639915875&fm=21&gp=0.jpg';

export default class CardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    dataList: PropTypes.array,
  };
  static defaultProps = {
    dataList: [
      {
        avator:
          'https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg',
        userName: 'Tom12',
        time: '2019-11-11',
        content:
          '主内容主内容主内容主内容主内容。。。。主内容主内容主内容主内容主内容。。。。主内容主内容主内容主内容主内容。。。。主内容主内容主内容主内容主内容。。。。',
        likeCount: 10,
        commentCount: 10,
        imgs: [
          BannerImg2,
          BannerImg2,
          BannerImg2,
          BannerImg2,
          BannerImg2,
          BannerImg2,
          BannerImg2,
          BannerImg2,
          BannerImg2,
        ],
      },
      {
        avator:
          'https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg',
        userName: 'Tom',
        time: '2019-11-11',
        content: '主内容主内容主内容主内容主内容。。。。',
        likeCount: 10,
        commentCount: 10,
        imgs: [BannerImg2],
      },
      {
        avator:
          'https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg',
        userName: 'Tom',
        time: '2019-11-11',
        content: '主内容主内容主内容主内容主内容。。。。',
        likeCount: 10,
        commentCount: 10,
        imgs: [BannerImg2],
      },
    ],
  };

  onHorizontalSelectedIndexChange(index) {
    /* tslint:disable: no-console */
    // console.log('horizontal change to', index);
  }

  render() {
    const data = Array.from(new Array(9)).map((_val, i) => ({
      icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
      text: `Name${i}`,
    }));
    return (
      <React.Fragment>
        {this.props.dataList.map((item, i) => {
          return (
            <React.Fragment key={i}>
              <Card>
                <Card.Header
                  title={item.userName}
                  thumbStyle={{width: 30, height: 30}}
                  thumb={item.avator}
                  extra={item.time}
                />
                <Card.Body>
                  <View>
                    <Text style={{marginLeft: 16}}>{item.content}</Text>
                  </View>
                  <View style={{marginTop: 20}}>
                    <Grid
                      style={{border: 'none'}}
                      data={(() => {
                        let result = [];
                        item.imgs.forEach((el, j) => {
                          result.push({
                            icon: (
                              <Image
                                source={el}
                                key={j}
                                style={{width: '80%', height: '80%'}}
                              />
                            ),
                            text: '',
                          });
                        });
                        return result;
                      })()}
                      columnNum={3}
                      isCarousel
                      onPress={(_el, index) => alert(index)}
                    />
                  </View>
                </Card.Body>
                <Card.Footer
                  content={item.likeCount}
                  extra={item.commentCount}
                />
              </Card>
              <WhiteSpace size="xs" />
            </React.Fragment>
          );
        })}
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  avator: {
    height: 50,
    width: 50,
  },
  imgsShell: {
    width: '100%',
    // height: 500,
    margin: 50,
    marginTop: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgs: {
    width: 80,
    height: 80,
  },
});

const dataList = [
  {
    avator:
      'https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg',
    userName: 'Tom',
    time: '2019-11-11',
    content: '主内容主内容主内容主内容主内容。。。。',
    likeCount: 10,
    commentCount: 10,
  },
  {
    avator:
      'https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg',
    userName: 'Tom',
    time: '2019-11-11',
    content: '主内容主内容主内容主内容主内容。。。。',
    likeCount: 10,
    commentCount: 10,
  },
  {
    avator:
      'https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg',
    userName: 'Tom',
    time: '2019-11-11',
    content: '主内容主内容主内容主内容主内容。。。。',
    likeCount: 10,
    commentCount: 10,
  },
];
