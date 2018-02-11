console.log('app component is working.');
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Navbar from './components/Navbar';
import LoginPage from './components/pages/LoginPage';

export default class App extends Component {
  componentDidMount() {
    console.log('componentDidMount()');
  }
  componentWillMount() {
    console.log('componentWillMount()');
  }
  render() {
    console.log('render()');
    return (
        <View>
          <Navbar/>
          <LoginPage />
        </View>
      );
    }
}
