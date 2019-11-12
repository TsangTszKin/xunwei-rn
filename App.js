/*
 * @Author: your name
 * @Date: 2019-11-08 16:26:45
 * @LastEditTime: 2019-11-12 16:47:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hello_world\App.js
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Provider} from '@ant-design/react-native';
import IndexScreen from './src/Index';

const AppNavigator = createStackNavigator(
  {
    Index: {
      screen: IndexScreen,
    },
  },
  {
    initialRouteName: 'Index',
  },
);

const ANT_THEMES = {
  //ant主题颜色
  brandPrimary: '#FBC464',
  brandPrimaryTap: 'transparent',
};

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  return <AppContainer />;
};

export default App;
