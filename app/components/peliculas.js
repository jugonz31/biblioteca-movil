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
var count = 0;

export class ChildComponent extends Component{
    render(){
    if(this.props.result){
        var res = this.props.result.map((item, i) => {
           if(textPicker == "todos"){ 
            var strt1 = item.subject.toLowerCase();
            var strt2 = item.title.toLowerCase();
            var strt3 = item.creator.toLowerCase();
            var strt4 = item.publisher.toLowerCase();
            if(strt1.indexOf(textInput.toLowerCase()) != -1 
            || strt2.indexOf(textInput.toLowerCase()) != -1
            || strt3.indexOf(textInput.toLowerCase()) != -1
            || strt4.indexOf(textInput.toLowerCase()) != -1){
                count++;
                return(
                <Card key = {i}
                    titleStyle={styles.textCardTitle}
                    title={item.title}
                >
                <Text style={styles.textCard}>Fecha de Publicación: {item.datestamp}</Text>
                <Text style={styles.textCard}>Autor(es): {item.creator}</Text>
                <Text style={styles.textCard}>Temas: {item.subject}</Text>
                <Text style={styles.textCard}>Catálogo: EAFIT</Text>
                <Text style={styles.textCard}>Editor: {item.publisher}</Text>
                <Text style={styles.textCard}>Tipo: {item.type}</Text>
                <Text style={styles.textCard}>Clasificación: {item.identifier}</Text>
                <Text style={styles.textCard}>Idioma: {item.language}</Text>
                <Text style={styles.textCard}>Resumen: {item.abstract}</Text>
                <Text style={styles.textCard}>Ubicación: {item.coverage}</Text>
                <View style ={{alignItems: 'center'}}>
                </View>
            </Card>  
                )
            }
         }else if(textPicker == "director"){ 
            var str2 = item.creator.toLowerCase();
            if(str2.indexOf(textInput.toLowerCase()) != -1){
                count++;
                //alert(textPicker);
                return(
                <Card key = {i}
                    titleStyle={styles.textCardTitle}
                    title={item.title}
                >
                <Text style={styles.textCard}>Fecha de Publicación: {item.datestamp}</Text>
                <Text style={styles.textCard}>Autor(es): {item.creator}</Text>
                <Text style={styles.textCard}>Temas: {item.subject}</Text>
                <Text style={styles.textCard}>Catálogo: EAFIT</Text>
                <Text style={styles.textCard}>Editor: {item.publisher}</Text>
                <Text style={styles.textCard}>Tipo: {item.type}</Text>
                <Text style={styles.textCard}>Clasificación: {item.identifier}</Text>
                <Text style={styles.textCard}>Idioma: {item.language}</Text>
                <Text style={styles.textCard}>Resumen: {item.abstract}</Text>
                <Text style={styles.textCard}>Ubicación: {item.coverage}</Text>
                <View>
                </View>
            </Card>  
                )
            }
        } else if(textPicker == "clasificacion"){ 
            var str3 = item.identifier.toLowerCase();
            if(str3.indexOf(textInput.toLowerCase()) != -1){
                count++;
                //alert(textPicker);
                return(
                <Card key = {i}
                    titleStyle={styles.textCardTitle}
                    title={item.title}
                >
                <Text style={styles.textCard}>Fecha de Publicación: {item.datestamp}</Text>
                <Text style={styles.textCard}>Autor(es): {item.creator}</Text>
                <Text style={styles.textCard}>Temas: {item.subject}</Text>
                <Text style={styles.textCard}>Catálogo: EAFIT</Text>
                <Text style={styles.textCard}>Editor: {item.publisher}</Text>
                <Text style={styles.textCard}>Tipo: {item.type}</Text>
                <Text style={styles.textCard}>Clasificación: {item.identifier}</Text>
                <Text style={styles.textCard}>Idioma: {item.language}</Text>
                <Text style={styles.textCard}>Resumen: {item.abstract}</Text>
                <Text style={styles.textCard}>Ubicación: {item.coverage}</Text>
                <View>
                </View>
            </Card>  
                )
            }
        } else if(textPicker == "tema_materia"){ 
            var str4 = item.subject.toLowerCase();
            if(str4.indexOf(textInput.toLowerCase()) != -1){
                count++;
                //alert(textPicker);
                return(
                <Card key = {i}
                    titleStyle={styles.textCardTitle}
                    title={item.title}
                >
                <Text style={styles.textCard}>Fecha de Publicación: {item.datestamp}</Text>
                <Text style={styles.textCard}>Autor(es): {item.creator}</Text>
                <Text style={styles.textCard}>Temas: {item.subject}</Text>
                <Text style={styles.textCard}>Catálogo: EAFIT</Text>
                <Text style={styles.textCard}>Editor: {item.publisher}</Text>
                <Text style={styles.textCard}>Tipo: {item.type}</Text>
                <Text style={styles.textCard}>Clasificación: {item.identifier}</Text>
                <Text style={styles.textCard}>Idioma: {item.language}</Text>
                <Text style={styles.textCard}>Resumen: {item.abstract}</Text>
                <Text style={styles.textCard}>Ubicación: {item.coverage}</Text>
                <View>
                </View>
            </Card>  
                )
            }
        } else if(textPicker == "titulo"){ 
            var str5 = item.title.toLowerCase();
            if(str5.indexOf(textInput.toLowerCase()) != -1){
                count++;
                //alert(textPicker);
                return(
                <Card key = {i}
                    titleStyle={styles.textCardTitle}
                    title={item.title}
                >
                <Text style={styles.textCard}>Fecha de Publicación: {item.datestamp}</Text>
                <Text style={styles.textCard}>Autor(es): {item.creator}</Text>
                <Text style={styles.textCard}>Temas: {item.subject}</Text>
                <Text style={styles.textCard}>Catálogo: EAFIT</Text>
                <Text style={styles.textCard}>Editor: {item.publisher}</Text>
                <Text style={styles.textCard}>Tipo: {item.type}</Text>
                <Text style={styles.textCard}>Clasificación: {item.identifier}</Text>
                <Text style={styles.textCard}>Idioma: {item.language}</Text>
                <Text style={styles.textCard}>Resumen: {item.abstract}</Text>
                <Text style={styles.textCard}>Ubicación: {item.coverage}</Text>
                <View>
                </View>
            </Card>  
                )
            }
        } else if(textPicker == "pais"){ 
            var str6 = item.publisher.toLowerCase();
            if(str6.indexOf(textInput.toLowerCase()) != -1){
                count++;
                //alert(textPicker);
                return(
                <Card key = {i}
                    titleStyle={styles.textCardTitle}
                    title={item.title}
                >
                <Text style={styles.textCard}>Fecha de Publicación: {item.datestamp}</Text>
                <Text style={styles.textCard}>Autor(es): {item.creator}</Text>
                <Text style={styles.textCard}>Temas: {item.subject}</Text>
                <Text style={styles.textCard}>Catálogo: EAFIT</Text>
                <Text style={styles.textCard}>Editor: {item.publisher}</Text>
                <Text style={styles.textCard}>Tipo: {item.type}</Text>
                <Text style={styles.textCard}>Clasificación: {item.identifier}</Text>
                <Text style={styles.textCard}>Idioma: {item.language}</Text>
                <Text style={styles.textCard}>Resumen: {item.abstract}</Text>
                <Text style={styles.textCard}>Ubicación: {item.coverage}</Text>
                <View>
                </View>
            </Card>  
                )
            }
        } else if(textPicker == "genero"){ 
            var str7 = item.subject.toLowerCase();
            if(str7.indexOf(textInput.toLowerCase()) != -1){
                count++;
                //alert(textPicker);
                return(
                <Card key = {i}
                    titleStyle={styles.textCardTitle}
                    title={item.title}
                >
                <Text style={styles.textCard}>Fecha de Publicación: {item.datestamp}</Text>
                <Text style={styles.textCard}>Autor(es): {item.creator}</Text>
                <Text style={styles.textCard}>Temas: {item.subject}</Text>
                <Text style={styles.textCard}>Catálogo: EAFIT</Text>
                <Text style={styles.textCard}>Editor: {item.publisher}</Text>
                <Text style={styles.textCard}>Tipo: {item.type}</Text>
                <Text style={styles.textCard}>Clasificación: {item.identifier}</Text>
                <Text style={styles.textCard}>Idioma: {item.language}</Text>
                <Text style={styles.textCard}>Resumen: {item.abstract}</Text>
                <Text style={styles.textCard}>Ubicación: {item.coverage}</Text>
                <View>
                </View>
            </Card>  
                )
            }
        }

        })
        //count = 0;
        }
        return(
                <Form>
                    <ScrollView>
                        <View style ={{alignItems: 'center'}}>
                            <Text style = {styles.textTitle}> {count} documentos encontrados</Text>
                        </View>
                        {res}
                    </ScrollView>
                </Form>    
                )
            }
}

class Peliculas extends Component {
    static navigationOptions = {
        drawerLabel: ({color = "white"}) => ('Películas'),
        drawerIcon: ({ tintColor }) => (
            <MaterialIcons
                    name = "movie"
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
          fetch('https://biblioteca-eafit.herokuapp.com/eafit/videos')
          .then((response) => response.json())
          .then((responseJson) => {
              this.setState({
                  data: responseJson
              })
          })
      }
    
      setModalVisible(visible) {
        if(textPicker == undefined){
            alert("Seleccione un filtro de búsqueda");
        }
        else if(textInput != ""){
            this.setState({modalVisible: visible});
        }else{
            this.setState({modalVisible: !visible});
            alert("El campo está vacío.");
        }
      }
      
      handleFormChange(formData){
     
        this.setState({formData:formData})
        this.props.onFormChange && this.props.onFormChange(formData);
        textInput = String(formData.busqueda);
        textPicker = formData.busquedapor;
        count = 0;
      }
      handleFormFocus(e, component){
       
      }
      openTermsAndConditionsURL(){
     
      }
      
    render() {
        return (<ScrollView keyboardShouldPersistTaps={"always"} style={{paddingLeft:10,paddingRight:10, height:200}}>
        <Form
            ref='peliculas'
            onFocus={this.handleFormFocus.bind(this)}
            onChange={this.handleFormChange.bind(this)}
            label="Audiovisuales - Cine"
            >
            <Text style = {styles.textTitle}>Audiovisuales - Cine</Text>
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
                        titulo: 'Título',
                        pais: 'País',
                        genero: 'Género'     
                    }}/> 
                    <Text></Text>
                    <Text style = {styles.text}>Ingrese los términos de búsqueda:</Text>
                    <View><Text></Text></View>
                    <InputField ref='busqueda' placeholder=' Ingrese los términos de búsqueda'/>
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

export default Peliculas;