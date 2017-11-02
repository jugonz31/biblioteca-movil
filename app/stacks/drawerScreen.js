import {DrawerNavigator, StackNavigator} from 'react-navigation';
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Basica from '../components/basica';
import Avanzada from '../components/avanzada';
import Autor from '../components/autor';
import Revistas from '../components/revistas';
import Tesis_Proyectos from '../components/tesis_proyectos';
import Peliculas from '../components/peliculas';
import Musica from '../components/musica';
import Tema_Materia from '../components/tema_materia';
import { AppLoading, Asset, Font } from 'expo';
import { FontAwesome } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';

const DrawerScreen = DrawerNavigator({
    Básica: {screen: Basica},
    Avanzada: {screen: Avanzada},
    Autor: {screen: Autor},
    Revistas: {screen: Revistas},
    Tesis_Proyectos: {screen: Tesis_Proyectos},
    Películas: {screen: Peliculas},
    Música: {screen: Musica},
    Tema_Materia: {screen: Tema_Materia}
}, {
    headerMode: 'none',
    headerStyle: {
        backgroundColor: '#FFFFFF',
        paddingLeft: 10,
        paddingRight: 10
    },
    drawerTintColor: 'white',
    drawerBackgroundColor: '#000066',
    contentOptions: {
        inactiveTintColor: 'white'
    }
})

const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    }
  });  

export default DrawerScreen;