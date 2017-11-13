import React, { Component } from 'react';
import {Dimensions,
	StyleSheet,
	View,
	Text,
	ScrollView,
    TouchableHighlight,
    Image
} from 'react-native';
import {DrawerNavigator, StackNavigator} from 'react-navigation';
import { Form,
    Separator,InputField, LinkField,
    SwitchField, PickerField,DatePickerField,TimePickerField
   } from 'react-native-form-generator';
import { AppLoading, Asset, Font } from 'expo';
import { FontAwesome } from '@expo/vector-icons';
import { Card } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Button from 'apsl-react-native-button';


class Guia extends Component {
    
    static navigationOptions = {
        drawerLabel: ({color = "white"}) => ('Guía de Usuario'),
        drawerIcon: ({ tintColor }) => (
            <FontAwesome
                    name = "info-circle"
                    color = "white"
                    size = {24}
            />
        )
      };      
      
    render() {
        return (<ScrollView keyboardShouldPersistTaps={"always"} style={{paddingLeft:10,paddingRight:10, height:200}}>
        <Form>
                <Text style = {styles.textTitle}> Guía de Usuario</Text>
                          
                <Card title = "¿Como utilizar las búsquedas?">
                <View alignItems = "center">
                <Image
                    alignItems="center"
                    style={styles.image}
                    resizeMode="stretch"
                    source={require('../resources/guia/guia_1.jpg')}
                />
                </View>
                <Text style={{marginBottom: 10, fontSize: 14, textAlign: 'justify'}}>
                  {'\n'}Para acceder a los diferentes tipos de busqueda disponibles por el aplicativo, está disponible
                  el menú lateral, el cual contiene los tipos de búsqueda básica, avanzada, por autor, y demás búsquedas
                  según el tipo de material.
                </Text>            
              </Card>
              <View><Text></Text></View> 
              <Card title = "¿Donde puedo encontrar enlaces de interes?">
                <View alignItems = "center">
                <Image
                    alignItems="center"
                    style={styles.image}
                    resizeMode="stretch"
                    source={require('../resources/guia/guia_2.jpg')}
                />
                </View>
                <Text style={{marginBottom: 10, fontSize: 14, textAlign: 'justify'}}>
                  {'\n'}En la sección SINBAD - Catálogo en Linea del menú, cualquier usuario puede visitar
                  los diferentes enlaces que se disponen y buscan facilitarle al usuario cualquier acción que desee realizar
                  y guiarlo en ciertas situaciones.
                </Text>            
              </Card>

              </Form>
        </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: 'white'  	
    },
    fondo2: {
        flexDirection: 'row',
        backgroundColor: '#E0E0E0',
        borderBottomWidth: 1        
    },
    text: {
		color: '#000066',
		fontSize: 20,
    },
    textTitle: {
        color: '#000066',
		fontSize: 25,
        fontWeight: 'bold',
        paddingVertical: 15
    },
    textNormal: {
        color: 'black',
		fontSize: 18,
        paddingVertical: 15
    },
	textWithIcon: {
		flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10
    },
    textMenu: {
        color: '#000066',
		fontSize: 24
    }, 
    switch: {
        backgroundColor: '#000066'
    },
    rightIcon: {
		paddingRight: 20
    },
    button: {
        flex: 1,
        paddingHorizontal: 40,
        flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderColor: 'black',
        borderBottomWidth: 3,
        backgroundColor: 'gray'
    },
    title: {
        fontSize: 38,
        backgroundColor: 'black'
      },
})

let formStyles = StyleSheet.create({
    alignRight:{
      marginTop: 7, position:'absolute', right: 10
    }
  });

export default Guia;