/* eslint-disable react-native/no-inline-styles */
/*
 * @Author: your name
 * @Date: 2019-11-08 16:53:14
 * @LastEditTime: 2019-11-21 14:49:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hello_world\src\Index.js
 */
import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Card, WhiteSpace, Grid, Icon} from '@ant-design/react-native';
import PropTypes from 'prop-types';
import Mock from 'mockjs';
// 图片资源
import Avator1 from '../../resource/avator/1.jpg';
import Avator2 from '../../resource/avator/2.jpg';
import Avator3 from '../../resource/avator/3.jpg';
import Food1 from '../../resource/foods/1.jpg';
import Food2 from '../../resource/foods/2.jpg';
import Food3 from '../../resource/foods/3.jpg';
import Food4 from '../../resource/foods/4.jpg';
import Food5 from '../../resource/foods/5.jpg';
import Food6 from '../../resource/foods/6.jpg';
import Food7 from '../../resource/foods/7.jpg';
import Food8 from '../../resource/foods/8.jpg';

const dataList = Mock.mock({
  'dataList|5': [
    {
      'avator|1': [Avator1, Avator2, Avator3],
      userName: '@cname',
      time: '@date("yyyy-MM-dd HH:mm")', //日期
      content: '@cparagraph',
      city: '@city',
      shopName: '@cword(5)',
      'likeCount|0-99': 99,
      'commentCount|0-99': 99,
      'imgs|1-9': [Food1, Food2, Food3, Food4, Food5, Food6, Food7, Food8],
      'simpleComment|0-5': [
        {
          userName: '@cname',
          content: '@csentence',
        },
      ],
    },
  ],
})


export default class ShareListPannel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    dataList: PropTypes.array,
  };
  static defaultProps = {
    dataList: dataList.dataList
  };

  onHorizontalSelectedIndexChange() {
    /* tslint:disable: no-console */
    // console.log('horizontal change to', index);
  }

  render() {
    return (
      <React.Fragment>
        {this.props.dataList.map((item, i) => {
          return (
            <React.Fragment key={i}>
              <Card style={{marginBottom: 10}}>
                <Card.Header
                  title={item.userName}
                  thumbStyle={{width: 30, height: 30}}
                  thumb={
                    <Image
                      source={item.avator}
                      style={{
                        height: 40,
                        width: 40,
                        marginRight: 10,
                        borderRadius: 40,
                      }}
                    />
                  }
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
                              // <ImageViewer imageUrls={images} />
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
                  <Text style={{margin: 15, color: '#4682B4'}}>
                    {item.city}·{item.shopName}
                  </Text>
                </Card.Body>
                <Card.Footer
                  // content={

                  // }
                  extra={
                    <View style={styles.footerCell}>
                      <View style={styles.footerCell}>
                        <Icon name={'heart'} style={{color: '#FBC464'}} />
                        <Text>{item.likeCount}</Text>
                      </View>
                      <View style={styles.footerCell}>
                        <Icon name={'message'} style={{color: '#FBC464'}} />
                        <Text>{item.commentCount}</Text>
                      </View>
                    </View>
                  }
                />
                <View style={{marginTop: 10}}>
                  {item.simpleComment.map((el, j) => (
                    <View style={styles.commentShell} key={j}>
                      <Text style={styles.userName}>
                        {el.userName}：
                        <Text style={styles.userComment}>{el.content}</Text>
                      </Text>
                    </View>
                  ))}
                  <Text style={styles.commentShell}>查看全部条评论 ></Text>
                </View>
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
  footShell: {
    flex: 2,
    // width: 100,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  footerCell: {
    flex: 1,
    // width: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  commentShell: {
    margin: 3,
    marginLeft: 10,
  },
  userName: {
    color: '#FBC464',
  },
  userComment: {
    color: '#333333',
  },
});
