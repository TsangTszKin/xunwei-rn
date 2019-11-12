/* eslint-disable react-native/no-inline-styles */
/*
 * @Author: your name
 * @Date: 2019-11-08 16:53:14
 * @LastEditTime: 2019-11-11 22:05:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hello_world\src\Index.js
 */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Card, WhiteSpace, Tabs} from '@ant-design/react-native';
import PropTypes from 'prop-types';

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
    ],
  };

  onHorizontalSelectedIndexChange(index) {
    /* tslint:disable: no-console */
    // console.log('horizontal change to', index);
  }

  render() {
    return (
      <>
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
                  <View style={{height: 42}}>
                    <Text style={{marginLeft: 16}}>{item.content}</Text>
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
      </>
    );
  }
}

const styles = StyleSheet.create({});

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
