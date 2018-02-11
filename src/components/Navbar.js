console.log('navbar component is working.');
import React, { Component } from 'react';
import { Text } from 'react-native';

class Navbar extends Component {
  render() {
    return (
      <Text style={{ marginTop: 15 }} >
        Navbar
      </Text>
    );
  }
}
export default Navbar;
