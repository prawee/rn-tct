console.log('app component is working.');
import React, { Component } from 'react';
import { Text } from 'react-native';
import Navbar from './component/Navbar';

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
        <Navbar/>
      );
    }
}
