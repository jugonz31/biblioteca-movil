import React, { Component } from 'react';
import {StyleSheet, View, Text} from 'react-native';

class Revistas extends Component {
    render() {
        return (
            <View style = {styles.fondo}>
                <Text>Revistas</Text>
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

export default Revistas;