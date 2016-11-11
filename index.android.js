/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './src/App';
import store from './src/store/store';

export default class Risteilyteekkari extends Component {
  render() {
    return (
      <Provider store={store}> 
        <App /> 
      </Provider>
    );
  }
}

AppRegistry.registerComponent('Risteilyteekkari', () => Risteilyteekkari);
