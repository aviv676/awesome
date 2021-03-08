import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import LoginForm from '../src/component/LoginForm.js';

export default class App extends Component{
  render(){
    return (
      <LoginForm />
    );
  }
}