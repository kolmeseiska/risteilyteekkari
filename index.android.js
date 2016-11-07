/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { createStore } from 'redux';
import { provider } from 'react-redux';
import store from './store/store';

export default class Risteilyteekkari extends Component {
  render() {
    return (
      <Provider store={store}> 
        <App /> 
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('Risteilyteekkari', () => Risteilyteekkari);
