/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Row, Col, Box } from '../lib/index';

export default class test extends Component {
  render() {
    return (
      <View style={[styles.container]}>
        <Text style={[styles.welcome]}>Hello RN!</Text>
        <View style={[Row.$,styles.h50, styles.bd1,Row.center]}>
          <View style={[Col.$]}>
            <Text style={[styles.tc]}>Col1</Text>
          </View>
          <View style={[Col.$]}>
            <Text style={[styles.tc]}>Col1</Text>
          </View>
          <View style={[Col.$]}>
            <Text style={[styles.tc]}>Col1</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  tc: {
    textAlign:'center'
  },
  h50: {
    height:50
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('test', () => test);
