import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableWithoutFeedback, Image} from 'react-native';

import SideMenu from 'react-native-side-menu'
import Header from './src/components/Header'
import Menu from './src/components/Menu'

class App extends Component {
  constructor(props){
  	super(props)
  	this.state = {
      isOpen: false,
      itemSelected: 'Básica'
    }
    this.itemSelected = this.itemSelected.bind(this)
  }

  toggle(){
  	this.setState({
  		isOpen: !this.state.isOpen
  	})
  }

  itemSelected(item){
    this.setState({
      itemSelected: item
    })
  }

  updateMenu(isOpen){
  	this.setState({isOpen})
  }

  render() {
    return (
    <View style = {[{flex: 1}, styles.container]}>
    <SideMenu
    	menu = {<Menu 
            itemSelected = {this.itemSelected}
            itemSelectedValue = {this.state.itemSelected}
      />}
    	isOpen = {this.state.isOpen}
    	onChange = {(isOpen) => this.updateMenu(isOpen)}
      style = {{flex: 1}}
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

export default App

AppRegistry.registerComponent('BibliotecaMovil', () => App);