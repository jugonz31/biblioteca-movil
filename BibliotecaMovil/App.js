import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableWithoutFeedback, Image} from 'react-native';

import Header from './src/components/Header'

export default class App extends Component {
  render() {
    return (
    
    <View style = {[{flex: 1}, styles.container]}>
      <Header></Header>
    </View>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: 'white'
  }

})

// skip this line if using Create React Native App
AppRegistry.registerComponent('BibliotecaMovil', () => App);