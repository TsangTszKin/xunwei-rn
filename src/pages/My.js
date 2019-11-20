/*
 * @Author: your name
 * @Date: 2019-11-13 13:48:13
 * @LastEditTime: 2019-11-20 15:10:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hello_world\src\pages\Message.js
 */
import React from "react";
import {
  ScrollView,
  Text,
  View,
  ImageBackground,
  Image,
  StyleSheet
} from "react-native";
import { Tabs, Icon, Grid } from "@ant-design/react-native";
import Notice from "../components/message/Notice";
import Follow from "../components/message/Follow";
import BG_img from "../resource/my-bg.jpg";
import Avator from "../resource/avator/3.jpg";
import MainPannel from "../components/home/MainPannel";

export default class My extends React.Component {
  render() {
    const style = {
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#fff"
    };
    return (
      <View style={styles.containor}>
        <View style={{ height: 200 }}>
          <ImageBackground
            source={BG_img}
            style={{ width: "100%", height: 200, overflow: "hidden" }}
          >
            {/* <View style={styles.setting}>
            <Icon name="setting" style={{width: 20, heigh: 20}} />
          </View> */}
            <View style={styles.info}>
              <View>
                <Image
                  source={Avator}
                  style={{ width: 70, height: 70, borderRadius: 70 }}
                />
              </View>
              <Text style={{ fontSize: 18, margin: 8 }}>小喜</Text>
              <Text style={{ color: "#333" }}>你很懒，都不他妈写个签？</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.countBar}>
          <View styke={styles.countBarCell}>
            <Text>0</Text>
            <Text>关注</Text>
          </View>
          <View styke={styles.countBarCell}>
            <Text>0</Text>
            <Text>关注</Text>
          </View>
          <View styke={styles.countBarCell}>
            <Text>0</Text>
            <Text>关注</Text>
          </View>
          <View styke={styles.countBarCell}>
            <Text>0</Text>
            <Text>关注</Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            marginTop: -150,
            backgroundColor: "#E4E4E4",
            paddingTop: 10
          }}
        >
          <Tabs
            tabs={[{ title: "发布" }, { title: "店铺收藏" }]}
            tabBarActiveTextColor="#333"
            tabBarInactiveTextColor="#808080"
            // tabBarBackgroundColor="#FBC464"
            tabBarUnderlineStyle="#FBC464"
            renderUnderline={s => {
              return <View style={{ backgroundColor: "#000" }} />;
            }}
          >
            <View>
              <MainPannel />
            </View>
            <View>{/* <Notice /> */}</View>
          </Tabs>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containor: {
    // flex: 1,
    // backgroundColor: '#E4E4E4',
    height: "100%"
    // justifyContent: 'center',
    // alignItems: 'flex-start',
  },
  setting: {
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    height: 30
  },
  info: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  countBar: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height: 50,
    marginTop: -140
  },
  countBarCell: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#fff"
  }
});
