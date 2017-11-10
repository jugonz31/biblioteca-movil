import React, { Component } from 'react';
import {Dimensions, StyleSheet, View, Text, Image, ScrollView, TouchableHighlight, Picker, 
    TextInput, CheckBox, Modal } from 'react-native';
import {DrawerNavigator, StackNavigator} from 'react-navigation';
import { Form,
    Separator,InputField, LinkField,
    SwitchField, PickerField,DatePickerField,TimePickerField
   } from 'react-native-form-generator';
import { AppLoading, Asset, Font } from 'expo';
import { FontAwesome, FontFamily } from '@expo/vector-icons';
import { Card, ListItem} from 'react-native-elements';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Button from 'apsl-react-native-button';

var color = 'white';
var textPicker = "";
var textInput = "";
var textInputClean = "";
var titulo = "";
var todos = "";
var counter = 3;

export class ChildComponent extends Component{
    render(){
    if(this.props.result){
        var res = this.props.result.map((item, i) => {
            if(textInput == item.library){
                return(
                <Card key = {i}
                    title = {item.title}
                >
                <Text style={}>ID: {item._id}</Text>
                <Text style={styles.textCard}>Datestamp: {item.datestamp}</Text>
                <Text style={styles.textCard}>Creador: {item.creator}</Text>
                <Text style={styles.textCard}>Subject: {item.subject}</Text>
                <Text style={styles.textCard}>Library: {item.library}</Text>
                <Text style={styles.textCard}>Publisher: {item.publisher}</Text>
                <Text style={styles.textCard}>Tipo: {item.type}</Text>
                <Text style={styles.textCard}>ISBN: {item.isbn}</Text>
                <Text style={styles.textCard}>Clasificación: {item.clasification}</Text>
                <Text style={styles.textCard}>Idioma: {item.language}</Text>
                <Text style={styles.textCard}>Descripción: {item.description}</Text>
                <Text style={styles.textCard}>Código Material: {item.mat_codigo}</Text>
                <Text style={styles.textCard}>ID Registro: {item.idregistro}</Text>
                <Text style={styles.textCard}>Ubicación: {item.coverage}</Text>
                <View>
                <Button 
                        style={{flex: 1,flexDirection: 'row', backgroundColor: '#000066', width: 200, height: 32, alignItems: 'center'}} 
                        textStyle={{fontSize: 20, color: 'white'}}
                        onPress={() => {this.handleFormChange("")}}
                        >
                        Registro completo
                </Button>
                </View>
            </Card>  
                )
            }})
        
        }
        return(
                <Form>
                    <ScrollView>
                        <View>
                            <Text style = {styles.textTitle}>    {counter} documentos encontrados</Text>
                        </View>
                        {res}
                    </ScrollView>
                </Form>    
                )
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
          fetch('https://my-json-server.typicode.com/jugonz31/biblioteca-movil/db')
          .then((response) => response.json())
          .then((responseJson) => {
              this.setState({
                  data: responseJson.books
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
    textCard: {
        marginBottom: 10, 
        fontSize: 18, 
        fontWeight: 'bold'
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