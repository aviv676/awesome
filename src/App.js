import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import LoginForm from '../src/component/LoginForm.js';
import MasukForm from '../src/component/MasukForm.js';
import {createStackNavigator, createAppContainer} from 'react-navigation'

export default class App extends Component{
  render(){
    return (
      <AppContainer/>
    );
  }
}

const AppStackNavigator = createStackNavigator({
  LoginForm: LoginForm,
  MasukForm: MasukForm
})

const AppContainer = createAppContainer (AppStackNavigator);