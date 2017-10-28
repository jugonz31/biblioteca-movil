import React, { Component } from 'react';
import {StyleSheet, View, Text} from 'react-native';

class Tesis_Proyectos extends Component {
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