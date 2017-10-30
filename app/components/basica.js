import React, { Component } from 'react';
import {Dimensions,
	StyleSheet,
	View,
	Text,
	Button,
	Image,
	ScrollView,
    TouchableHighlight,
    Picker,
	TextInput,
    CheckBox,
} from 'react-native';

import { Form,
    Separator,InputField, LinkField,
    SwitchField, PickerField,DatePickerField,TimePickerField
   } from 'react-native-form-generator';

import { AppLoading, Asset, Font } from 'expo';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native-elements';

var color = 'white';
class Basica extends Component {
    static navigationOptions = {
        drawerLabel: ({color = "white"}) => ('Básica'),
        drawerIcon: ({ tintColor }) => (
            <FontAwesome
                    name = "search"
                    color = "white"
                    size = {24}
            />
        )
      };
    render() {
        return (
            <View style = {styles.fondo}>
                
                <View style = {styles.textWithIcon}>
				    <Text style = {styles.textTitle}> Búsqueda básica</Text>
		        </View>
                <View>
                    <Text style = {styles.text}> Búsqueda por:</Text>
                </View>
                <View><Text></Text></View>
                <View>
                <View style = {styles.fondo2}></View>
                    <PickerField 
                        style = {styles.picker} 
                        ref='busquedapor'
                        iconRight={
                            <FontAwesome 
                            name='angle-right'
                            size={24}
                            style={[
                                formStyles.alignRight,{color: '#000066'},
                                this.props.iconStyle]}/>
                        }
                        options={{
                        todos: 'Todos',
                        autor: 'Autor',
                        isbn: 'ISBN / ISSN',
                        editorial: 'Editorial',
                        tema_materia: 'Tema / Materias',
                        titulo: 'Título',
                        titulo_revista: 'Títulos de Revistas',
                        serie: 'Serie',                    
                    }}/> 
                </View>
                <View style = {styles.fondo2}></View>
                    <View>
                        <Text style = {styles.text}> Ingrese los términos de búsqueda:</Text>
                    </View>
                    <View><Text></Text></View>
                    <View>
                        <InputField ref=' busqueda' placeholder=' Ingrese los términos de búsqueda'/>
                    </View>
                    <View><Text></Text></View>
                    <View style = {styles.fondo2}>
                                    <Button
                                    backgroundColor = '#000066'
                                    title='BUTTON' />
                    </View>
                <View style = {styles.textWithIcon}>
                                
                </View>

                <View>
                    <Text style = {styles.text}> Limitar material a:</Text>
                </View>
                <View><Text></Text></View>
                <View style = {styles.fondo2}></View>
                <View>
                    <SwitchField 
                    label=' Sólo material de texto completo'
                    />
                </View>
                <View style = {styles.fondo2}></View>
                <View style = {styles.textWithIcon}>
                </View>

            </View>
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
		fontSize: 20,
        fontWeight: 'bold'
    },
	textWithIcon: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 20,
		borderColor: '#000066',
		borderBottomWidth: 3
    },
    textMenu: {
        color: '#000066',
		fontSize: 24
    }, 
    picker: {
        borderColor: '#000066'
    },
    switch: {
        backgroundColor: '#000066'
    },
    rightIcon: {
		paddingRight: 20
	}
})

let formStyles = StyleSheet.create({
    alignRight:{
      marginTop: 7, position:'absolute', right: 10
    }
  });

export default Basica;