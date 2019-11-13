/* eslint-disable react-native/no-inline-styles */
/*
 * @Author: your name
 * @Date: 2019-11-08 16:53:14
 * @LastEditTime: 2019-11-13 14:47:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hello_world\src\Index.js
 */
import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {Card, WhiteSpace, Grid, Icon} from '@ant-design/react-native';
import PropTypes from 'prop-types';
import ImageViewer from 'react-native-image-zoom-viewer';
import myIcon from '../../resource/我的0=0.png';
import BannerImg2 from '../../resource/u=3958675909,1639915875&fm=21&gp=0.jpg';
import Food1 from '../../resource/foods/1.jpg';
import Food2 from '../../resource/foods/2.jpg';
import Food3 from '../../resource/foods/3.jpg';
import Food4 from '../../resource/foods/4.jpg';
import Food5 from '../../resource/foods/5.jpg';
import Food6 from '../../resource/foods/6.jpg';
import Food7 from '../../resource/foods/7.jpg';
import Food8 from '../../resource/foods/8.jpg';
import Avator1 from '../../resource/avator/1.jpg';
import Avator2 from '../../resource/avator/2.jpg';
import Avator3 from '../../resource/avator/3.jpg';
import Avator4 from '../../resource/avator/4.jpg';

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
        avator: Avator1,
        userName: 'Tom12',
        time: '2019-11-11 11:11',
        content:
          '主内容主内容主内容主内容主内容。。。。主内容主内容主内容主内容主内容。。。。主内容主内容主内容主内容主内容。。。。主内容主内容主内容主内容主内容。。。。',
        likeCount: 10,
        commentCount: 10,
        imgs: [Food1, Food2, Food3, Food4, Food5, Food6, Food7, Food8, Food1],
        simpleComment: [
          {
            userName: '小恶小坤',
            content: '你好',
          },
          {
            userName: '杨幂幂幂幂',
            content: '你好aaaaa',
          },
          {
            userName: '鳗鱼有饭',
            content: '你好啊啊啊啊啊啊啊啊啊啊啊啊啊',
          },
        ],
      },
      {
        avator: Avator2,
        userName: 'Tom',
        time: '2019-11-11 11:11',
        content: '主内容主内容主内容主内容主内容。。。。',
        likeCount: 10,
        commentCount: 10,
        imgs: [BannerImg2],
        simpleComment: [
          {
            userName: '小恶小坤',
            content: '你好',
          },
          {
            userName: '杨幂幂幂幂',
            content: '你好aaaaa',
          },
          {
            userName: '鳗鱼有饭',
            content: '你好啊啊啊啊啊啊啊啊啊啊啊啊啊',
          },
        ],
      },
      {
        avator: Avator3,
        userName: 'Tom',
        time: '2019-11-11 11:11',
        content: '主内容主内容主内容主内容主内容。。。。',
        likeCount: 10,
        commentCount: 10,
        imgs: [BannerImg2],
        simpleComment: [
          {
            userName: '小恶小坤',
            content: '你好',
          },
          {
            userName: '杨幂幂幂幂',
            content: '你好aaaaa',
          },
          {
            userName: '鳗鱼有饭',
            content: '你好啊啊啊啊啊啊啊啊啊啊啊啊啊',
          },
        ],
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

    const images = [
      {
        // Simplest usage.
        url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',

        // width: number
        // height: number
        // Optional, if you know the image size, you can set the optimization performance

        // You can pass props to <Image />.
        props: {
          // headers: ...
        },
      },
    ];

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
                      source={Avator3}
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
                    广州 · 霸龙冰室
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
