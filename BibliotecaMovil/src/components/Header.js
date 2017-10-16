import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableWithoutFeedback, Image} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'

const Header = props => (
<View style = {styles.container2}>
    <TouchableWithoutFeedback onPress = {() => props.toggle()}>
      <Icon
        name = "bars"
        color = "black"
        size = {25}
      />
      </TouchableWithoutFeedback>
      <Image style= {styles.logo} source = {require('../resources/logo.png')} />
      <Icon
        name = "book"
        color = "black"
        size = {25}
      />
      </View>
)

const styles = StyleSheet.create({
    container2: {
      flexDirection: 'row',
      height: 30,
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#C0C0C0',
      paddingHorizontal: 20,
      paddingVertical: 20  
    },
    logo: {
    width: 160,
    justifyContent: 'space-between',
		height: 40    	
    }
})

export default Header