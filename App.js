/*
 * @Author: your name
 * @Date: 2019-11-08 16:26:45
 * @LastEditTime: 2019-11-08 17:33:43
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
import {StatusBar} from 'react-native';

import Index from './src/Index';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Index />
    </>
  );
};

export default App;
