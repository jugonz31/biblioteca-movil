import React, { Component } from 'react';
import {StyleSheet, View, Text} from 'react-native';

class Tema_Materia extends Component {
    render() {
        return (
            <View style = {styles.fondo}>
                <Text>Tema/Materia</Text>
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

export default Tema_Materia;