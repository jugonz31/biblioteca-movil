import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableWithoutFeedback, Image} from 'react-native';

import SideMenu from 'react-native-side-menu'
import Header from './src/components/Header'
import Menu from './src/components/Menu'

export default class App extends Component {
  constructor(props){
  	super(props)
  	this.state = {
  		isOpen: false
  	}
  }
  toggle(){
  	this.setState({
  		isOpen: !this.state.isOpen
  	})
  }
  updateMenu(isOpen){
  	this.setState({isOpen})
  }

  render() {
    return (
    <View style = {[{flex: 1}, styles.container]}>
    <SideMenu
    	menu = {<Menu />}
    	isOpen = {this.state.isOpen}
    	onChange = {(isOpen) => this.updateMenu(isOpen)}
    >
    	<View>
    		<Header toggle = {this.toggle.bind(this)}/>
    	</View>
    </SideMenu>
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