import React, { Component } from 'react';
import {StyleSheet, View, Text} from 'react-native';

class Peliculas extends Component {
    render() {
        return (
            <View style = {styles.fondo}>
                <Text>Películas</Text>
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

export default Peliculas;