import React, { Component } from 'react';
import {Dimensions,
	StyleSheet,
	View,
	Text,
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
import Button from 'apsl-react-native-button';

var color = 'white';
class Tesis_Proyectos extends Component {
    static navigationOptions = {
        drawerLabel: ({color = "white"}) => ('Tesis y proyectos'),
        drawerIcon: ({ tintColor }) => (
            <FontAwesome
                    name = "search"
                    color = "white"
                    size = {24}
            />
        )
      };
      handleFormChange(formData){
        /*
        formData will contain all the values of the form,
        in this example.
     
        formData = {
        first_name:"",
        last_name:"",
        gender: '',
        birthday: Date,
        has_accepted_conditions: bool
        }
        */
     
        this.setState({formData:formData})
        this.props.onFormChange && this.props.onFormChange(formData);
      }
      handleFormFocus(e, component){
        //console.log(e, component); 
      }
      openTermsAndConditionsURL(){
     
      }
    render() {
        return (<ScrollView keyboardShouldPersistTaps={"always"} style={{paddingLeft:10,paddingRight:10, height:200}}>
        <Form
            ref='busquedatesis_proyectos'
            onFocus={this.handleFormFocus.bind(this)}
            onChange={this.handleFormChange.bind(this)}
            label="Tesis y proyectos"
            >
            <Separator />
                    <Text style = {styles.text}>Año de edición:</Text>
                    <Text></Text>
                    <InputField ref=' busquedatesis' placeholder='(YYYY)'/>
                    <Text></Text>
                    <SwitchField 
                    label=' Limitar material a texto completo'
                    />
                    <View><Text></Text></View>
                    <View style = {{flex: 2, flexDirection: 'row', paddingHorizontal: 30, justifyContent: 'space-between',
		            alignItems: 'center'}}>
                    <Button 
                        style={{flexDirection: 'row', backgroundColor: '#000066', width: 130, height: 32}} 
                        textStyle={{fontSize: 20, color: 'white'}}>
                        Buscar
                    </Button>
                    <Button 
                        style={{flexDirection: 'row', backgroundColor: '#000066', width: 130, height: 32}} 
                        textStyle={{fontSize: 20, color: 'white'}}>
                        Borrar
                    </Button>
                    </View>
                    <View><Text></Text></View>
                    <Text style = {styles.text}>Seleccione el área en que desea realizar la búsqueda:</Text>
                    <Text></Text>
                    <PickerField ref='gender'
                        label='Escuela de Administración'
                        options={{
                            ea1: 'Administración de Negocios (pregrado)',
                            ea2: 'Especialización en Administración de Riesgos y Seguros',
                            ea3: 'Especialización en Negocios Internacionales',
                            ea4: 'Especialización en Organización Industrial y Regulación Económica',
                            ea5: 'Maestría en Administración (MBA)',
                            ea6: 'Maestría en Ciencias de la Administración',
                            ea7: 'Maestría en Desarrollo Humano Organizacional',
                            ea8: 'Maestría en Gerencia de Proyectos',
                            ea9: 'Maestría en Negocios Internacionales',
                            ea10: 'Maestría en Mercadeo',
                            ea11: 'Doctorado en Administración',
                            ea12: 'Especialización en Administración de Riesgos y Seguros',
                            ea13: 'Especialización en Administración de Riesgos y Seguros'
                    }}/>
                    <Text></Text>
                    <PickerField ref='gender'
                        label='Escuela de Ingenierías'
                        options={{
                            ei1: 'Ingeniería Civil (pregrado)',
                            ei2: 'Ingeniería de Diseño de Producto (pregrado)',
                            ei3: 'Ingeniería de Procesos (pregrado)',
                            ei4: 'Ingeniería de Producción (pregrado)',
                            ei5: 'Ingeniería de Sistemas (pregrado)',
                            ei6: 'Ingeniería Mecanica (pregrado)',
                            ei7: 'Especialización en Diseño Mecánico',
                            ei8: 'Maestría en Ingenierías',
                            ei9: 'Maestría en Ingeniería Mecanica',
                            ei10: 'Maestría en Ingeniería Informatica',
                            ei11: 'Doctorado en Ingeniería',
                            ei12: 'Especialización en Administración de Riesgos y Seguros',
                            ei13: 'Especialización en Administración de Riesgos y Seguros'
                    }}/>
                    <Text></Text>
                    <PickerField ref='gender'
                        label='Escuela de Ciencias'
                        options={{
                            ec1: 'Biología (pregrado)',
                            ec2: 'Ingeniería Física (pregrado)',
                            ec3: 'Ingeniería Matemática (pregrado)',
                            ec4: 'Geología (pregrado)',
                            ec5: 'Maestría en Matematicas Aplicadas',
                            ec6: 'Maestría en Ciencias de la Tierra',
                            ec7: 'Maestría en Física Aplicada',
                            ec8: 'Doctorado en Ingeniería Matemática',
                            ec9: 'Doctorado en Ciencias de la Tierra'
                    }}/>
                    <Text></Text>
                    <PickerField ref='gender'
                        label='Escuela de Humanidades'
                        options={{
                            eh1: 'Ciencias políticas (pregrado)',
                            eh2: 'Comunicación Social (pregrado)',
                            eh3: 'Psicología (pregrado)',
                            eh4: 'Especialización en Estudios Políticos',
                            eh5: 'Especialización en Estudios Urbanos',
                            eh6: 'Especialización en Hermenéutica Literaria',
                            eh7: 'Especialización en Lógica y Filosofía',
                            eh8: 'Maestría en Estudios Humanísticos',
                            eh9: 'Maestría en Hermenéutica Literaria',
                            eh10: 'Maestría en Música',
                            eh11: 'Maestría en Gobierno y Políticas Públicas',
                            eh12: 'Maestría en Procesos Urbanos y Ambientales',
                            eh13: 'Doctorado en Humanidades'
                    }}/>
                    <Text></Text>
                    <PickerField ref='gender'
                        label='Escuela de Derecho'
                        options={{
                            ed1: 'Derecho (pregrado)',
                            ed2: 'Maestría en Derecho Penal'
                    }}/>
                    <Text></Text>
                    <PickerField ref='gender'
                        label='Escuela de Economía y Finanzas'
                        options={{
                            eef1: 'Economía (pregrado)',
                            eef2: 'Especialización en Economía',
                            eef3: 'Maestría en Administración Financiera',
                            eef4: 'Maestría en Economía',
                            eef5: 'Maestría en Finanzas',
                            eef6: 'Maestría en Economía Aplicada'
                    }}/>
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
})

let formStyles = StyleSheet.create({
    alignRight:{
      marginTop: 7, position:'absolute', right: 10
    }
  });

export default Tesis_Proyectos;