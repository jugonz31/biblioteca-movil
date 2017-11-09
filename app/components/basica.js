import React, { Component } from 'react';
import {Dimensions, StyleSheet, View, Text, Image, ScrollView, TouchableHighlight, Picker, 
    TextInput, CheckBox, Modal } from 'react-native';
import {DrawerNavigator, StackNavigator} from 'react-navigation';
import { Form,
    Separator,InputField, LinkField,
    SwitchField, PickerField,DatePickerField,TimePickerField
   } from 'react-native-form-generator';
import { AppLoading, Asset, Font } from 'expo';
import { FontAwesome } from '@expo/vector-icons';
import { Card, ListItem, Button2 } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Button from 'apsl-react-native-button';

var color = 'white';
var textPicker = "";
var textInput = "";
var textInputClean = "";
var titulo = "";
var todos = "";
var counter;

export class ChildComponent extends Component{
    render(){
        if(this.props.result){
            
            var res1 = this.props.result.map((item, i) => {
                if(textInput == item.title){
                return(
                    <Text 
                    style = {styles.textNormal}
                    key = {i}>{item.title}</Text>
                )
               
            }
            counter++;
        })
            var res2 = this.props.result.map((item, i) => {
                if(textInput == item.title){
                return(
                    <Text 
                    style = {styles.textNormal}
                    key = {i}>{item.releaseYear}</Text>
                )
            }})
       
    }

        return(
                <Form>
                <Text style = {styles.textTitle}> {counter} Documentos encontrados</Text>
                          
                <Card
                title={res1}
                >
                <Text style={{marginBottom: 10, fontSize: 25}}>
                  Año: {res2}
                </Text>
                <Button2
                  icon={{name: 'code'}}
                  backgroundColor='#000066'
                  buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                  title='Registro completo' />
              </Card>
              </Form>    
        );
    }
}

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

      state = {
        modalVisible: false,
        data: null
      }

      componentDidMount(){
          fetch('https://facebook.github.io/react-native/movies.json')
          .then((response) => response.json())
          .then((responseJson) => {
              this.setState({
                  data: responseJson.movies
              })
          })
      }
    
      setModalVisible(visible) {
        if(textInput != ""){
            this.setState({modalVisible: visible});
        }else{
            this.setState({modalVisible: !visible});
            alert("El campo está vacío.");
        }
      }
      
      handleFormChange(formData){
     
        this.setState({formData:formData})
        this.props.onFormChange && this.props.onFormChange(formData);
        textInput = formData.busqueda;
        textPicker = formData.busquedapor;
        titulo = formData.Título;
        todos = formData.Todos;
      }
      handleFormFocus(e, component){
       
      }
      openTermsAndConditionsURL(){
     
      }
      
    render() {
        var textBox = <Text style = {styles.textNormal}> Sólo material de texto completo</Text>
        return (<ScrollView keyboardShouldPersistTaps={"always"} style={{paddingLeft:10,paddingRight:10, height:200}}>
        <Form
            ref='busquedaBasica'
            onFocus={this.handleFormFocus.bind(this)}
            onChange={this.handleFormChange.bind(this)}
            label="Búsqueda Básica"
            >
			<Text style = {styles.textTitle}>Búsqueda básica</Text>
            <Text></Text>      
            <Text style = {styles.text}>Búsqueda por:</Text>
            <Text></Text>
            <PickerField 
                        style = {styles.picker}
                        iconRight={<FontAwesome name='angle-right'size={25}/>} 
                        ref='busquedapor'
                        options={{
                        todos: 'Todos',
                        autor: 'Autor',
                        isbn: 'ISBN / ISSN',
                        editorial: 'Editorial',
                        tema_materia: 'Tema / Materias',
                        titulo: 'Título',
                        titulo_revista: 'Títulos de Revistas',
                        serie: 'Serie'                    
                    }}/>
                    <Text></Text>
                    <Text style = {styles.text}>Ingrese los términos de búsqueda:</Text>
                    <View><Text></Text></View>
                    <InputField
                    style = {styles.textNormal} 
                    ref='busqueda' 
                    placeholder='Ingrese los términos de búsqueda'/>
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {this.setModalVisible(!this.state.modalVisible)}}
                        >
                        <Form>
                         <ChildComponent 
                         result = {this.state.data}
                         />
                        </Form>
                    </Modal>
                    <View><Text></Text></View>
                    <View style = {{flex: 2, flexDirection: 'row', paddingHorizontal: 30, justifyContent: 'space-between',
		            alignItems: 'center'}}>
                    <View>
                        <View>
                        <Button 
                            style={{flexDirection: 'row', backgroundColor: '#000066', width: 130, height: 32}} 
                            textStyle={{fontSize: 20, color: 'white'}}
                            onPress={() => {this.setModalVisible(true)}}>
                            Buscar
                        </Button>
                        </View>
                    </View>
                    <Button 
                        style={{flexDirection: 'row', backgroundColor: '#000066', width: 130, height: 32}} 
                        textStyle={{fontSize: 20, color: 'white'}}
                        onPress={() => {this.handleFormChange("")}}
                        >
                        Borrar
                    </Button>
                    </View>
                    <View><Text></Text></View>
                    <Text style = {styles.text}>Limitar material a:</Text>
                    <View><Text></Text></View>
                    <SwitchField 
                    label= {textBox}
                    />
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
    title: {
        fontSize: 38,
        backgroundColor: 'black'
      },
      button1: {
        marginRight: 10
      }
})

let formStyles = StyleSheet.create({
    alignRight:{
      marginTop: 7, position:'absolute', right: 10
    }
  });

export default Basica;