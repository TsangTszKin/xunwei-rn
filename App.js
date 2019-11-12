/*
 * @Author: your name
 * @Date: 2019-11-08 16:26:45
 * @LastEditTime: 2019-11-12 10:22:25
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

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  return <AppContainer />;
};

export default App;
