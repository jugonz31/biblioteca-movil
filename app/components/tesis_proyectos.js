import React, { Component } from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { AppLoading, Asset, Font } from 'expo';
import { FontAwesome } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';

class Tesis_Proyectos extends Component {
    static navigationOptions = {
        drawerLabel: 'Tesis y proyectos',
        drawerIcon: ({ tintColor }) => (
            <FontAwesome
                    style = {styles.icon}
                    name = "search"
                    color = "white"
                    size = {25}
            />
        )
      };
    render() {
        return (
            <View style = {styles.fondo}>
                <Text>Tesis y proyectos</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: 'white'  	
    }
})

export default Tesis_Proyectos;