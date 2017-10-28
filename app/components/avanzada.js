import React, { Component } from 'react';
import {StyleSheet, View, Text} from 'react-native';

class Avanzada extends Component {
    render() {
        return (
            <View style = {styles.fondo}>
                <Text>Búsqueda avanzada</Text>
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

export default Avanzada;