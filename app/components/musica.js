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
class Musica extends Component {
    static navigationOptions = {
        drawerLabel: ({color = "white"}) => ('Música'),
        drawerIcon: ({ tintColor }) => (
            <FontAwesome
                    name = "music"
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
            ref='musica'
            onFocus={this.handleFormFocus.bind(this)}
            onChange={this.handleFormChange.bind(this)}
            label="Audiovisuales - Música"
            >
            <Text style = {styles.textTitle}>Audiovisuales - Música</Text>
            <Text></Text> 
            <Text style = {styles.text}>Búsqueda por:</Text>
            <Text></Text>
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
                        undefined: 'Seleccione el filtro de búsqueda',
                        todos: 'Todos',
                        director: 'Director',
                        clasificacion: 'Clasificación',
                        tema_materia: 'Tema / Materias',
                        titulo: 'Título'     
                    }}/> 
                    <Text></Text>
                    <Text style = {styles.text}>Ingrese los términos de búsqueda:</Text>
                    <View><Text></Text></View>
                    <InputField ref=' busqueda' placeholder=' Ingrese los términos de búsqueda'/>
                    <View><Text></Text></View>
                    <Text style = {styles.text}>País:</Text>
                    <Text></Text>
                    <PickerField 
                        style = {styles.picker} 
                        ref='pais'
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
                        aleman: 'Alemania',
                        argentino: 'Argentina',
                        brasilero: 'Brasil',
                        colombia: 'Colombia',           
                        cuba: 'Cuba',
                        espana: 'España',
                        usa: 'Estados Unidos',
                        finlandia: 'Finlandia',
                        francia: 'Francia',
                        guatemala: 'Guatemala',
                        ingla: 'Inglaterra',
                        ita: 'Italia',
                        japon: 'Japón',
                        mexico: 'México',
                        panama: 'Panamá',
                        peru: 'Perú',
                        rusia: 'Rusia',
                        uru: 'Uruguay',
                        vene: 'Venezuela',
                        musipais: '...Músicos por país...',
                        alemanes: 'Alemanes',
                        argentinos: 'Argentinos',
                        chilenos: 'Chilenos',
                        colombianos: 'Colombianos',
                        cubanos: 'Cubanos',
                        espanoles: 'Españoles',
                        italianos: 'Italianos',

                    }}/> 
                    <Text></Text>
                    <Text style = {styles.text}>Géneros:</Text>
                    <Text></Text>
                    <PickerField 
                        style = {styles.picker} 
                        ref='genero'
                        iconRight={
                            <FontAwesome 
                            name='angle-right'
                            size={24}
                            style={[
                                formStyles.alignRight,{color: '#000066'},
                                this.props.iconStyle]}/>
                        }
                        options={{
                        undefined: 'Seleccione el genero',
                        todos: 'Todos',
                        blues: 'Blues',
                        contemporanea: 'Contemporánea',
                        folk: 'Folk',
                        folclorica: 'Folclórica',
                        heavymetal: 'Heavy Metal',
                        jazz: 'Jazz',
                        musicaclasica: 'Música Clásica',
                        opera: 'Opera',  
                        pop: 'Pop',  
                        punk: 'Punk',                      
                        rock: 'Rock',  
                        tango: 'Tango'
                    }}/> 
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

export default Musica;