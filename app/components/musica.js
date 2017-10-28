import React, { Component } from 'react';
import {StyleSheet, View, Text} from 'react-native';

class Musica extends Component {
    render() {
        return (
            <View style = {styles.fondo}>
                <Text>Música</Text>
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

export default Musica;