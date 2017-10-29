import {
    StackNavigator
} from 'react-navigation';
import {
    TouchableHighlight,
    Text,
    View,
    Image,
    StyleSheet
} from 'react-native';

import { AppLoading, Asset, Font } from 'expo';
import { FontAwesome } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import DrawerScreen from './drawerScreen';

const DrawerNavigation = StackNavigator({
    DrawerStack: {screen: DrawerScreen}
}, {
    headerMode: 'float',
    navigationOptions: ({navigation}) => ({
        headerStyle: {
            backgroundColor: '#C0C0C0',
            paddingLeft: 10,
            paddingRight: 10
        },
        headerRight: 
        <View>
            <Image style= {styles.logo} source = {require('../resources/logo.png')} />
        </View>,
        headerTintColor: 'black',
        headerLeft: <View>
            <TouchableHighlight 
                onPress={() => {
                    if(navigation.state.index === 0){
                        navigation.navigate('DrawerOpen');
                    } else {
                        navigation.navigate('DrawerClose');
                    }
                }}>
                <FontAwesome
                    name = "bars"
                    color = "black"
                    size = {25}
                />
                
            </TouchableHighlight>
        </View>
    })
})

const styles = StyleSheet.create({
    logo: {
    width: 160,
    alignItems: 'center',
    justifyContent: 'space-between',
		height: 40    	
    }
})

export default DrawerNavigation;