import React, { Component } from 'react';
import {Dimensions, StyleSheet, View, Text, Image, ScrollView, TouchableHighlight, Picker, 
    TextInput, CheckBox, Modal } from 'react-native';
import {DrawerNavigator, StackNavigator} from 'react-navigation';
import { Form,
    Separator,InputField, LinkField,
    SwitchField, PickerField,DatePickerField,TimePickerField
   } from 'react-native-form-generator';
import { AppLoading, Asset, Font } from 'expo';
import { FontAwesome, FontFamily, Entypo, Octicons } from '@expo/vector-icons';
import { Card, ListItem} from 'react-native-elements';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Button from 'apsl-react-native-button';

var color = 'white';

export class ChildComponent extends Component{
    render(){
    if(this.props.result){
        var res = this.props.result.map((item, i) => {
           if(textPicker == "ea"){
            var str1 = "Administracion"; 
            var str2 = str1.toLowerCase();
            var str3 = item.type.toLowerCase();
            var str4 = ((item.datestamp).substring(0,4)).toLowerCase();
            if(str3.indexOf(str2) != -1 && str4.indexOf(textInput.toLowerCase()) != -1){
                count++;
                return(
                    <Card key = {i}
                    titleStyle={styles.textCardTitle}
                    title={item.title}
                    >
                    <Text style={styles.textCard}>Fecha de Edición: {item.datestamp}</Text>
                    <Text style={styles.textCard}>Catálogo: EAFIT</Text>
                    <Text style={styles.textCard}>Editor: {item.publisher}</Text>
                    <Text style={styles.textCard}>Tipo: {item.type}</Text>
                    <Text style={styles.textCard}>Clasificación: {item.clasification}</Text>
                    <Text style={styles.textCard}>Idioma: {item.language}</Text>
                    <Text style={styles.textCard}>Descripción: {item.description}</Text>
                    <Text style={styles.textCard}>Código Material: {item.matcodigo}</Text>
                    <Text style={styles.textCard}>ID Registro: {item.idregistro}</Text>
                    <Text style={styles.textCard}>Ubicación: {item.coverage}</Text>
                    <View style ={{alignItems: 'center'}}>
                    <Button 
                        style={{flex: 1,flexDirection: 'row', backgroundColor: '#000066', width: 200, height: 32, alignItems: 'center'}} 
                        textStyle={{fontSize: 20, color: 'white'}}
                        onPress={() => {this.setModalVisible1(true)}}
                        >
                        Registro completo
                    </Button>
                    </View>
                    </Card> 
                )
            }
         }else if(textPicker == "ei"){ 
            var str5 = "Ingenieria"; 
            var str6 = str1.toLowerCase();
            var str7 = item.type.toLowerCase();
            var str8 = item.datestamp.substring(0,4).toLowerCase();
            if(str7.indexOf(str6) && str8.indexOf(textInput.toLowerCase()) != -1){
                count++;
                return(
                    <Card key = {i}
                    titleStyle={styles.textCardTitle}
                    title={item.title}
                    >
                    <Text style={styles.textCard}>Fecha de Edición: {item.datestamp}</Text>
                    <Text style={styles.textCard}>Catálogo: EAFIT</Text>
                    <Text style={styles.textCard}>Editor: {item.publisher}</Text>
                    <Text style={styles.textCard}>Tipo: {item.type}</Text>
                    <Text style={styles.textCard}>Clasificación: {item.clasification}</Text>
                    <Text style={styles.textCard}>Idioma: {item.language}</Text>
                    <Text style={styles.textCard}>Descripción: {item.description}</Text>
                    <Text style={styles.textCard}>Código Material: {item.matcodigo}</Text>
                    <Text style={styles.textCard}>ID Registro: {item.idregistro}</Text>
                    <Text style={styles.textCard}>Ubicación: {item.coverage}</Text>
                    <View style ={{alignItems: 'center'}}>
                    <Button 
                        style={{flex: 1,flexDirection: 'row', backgroundColor: '#000066', width: 200, height: 32, alignItems: 'center'}} 
                        textStyle={{fontSize: 20, color: 'white'}}
                        onPress={() => {this.setModalVisible1(true)}}
                        >
                        Registro completo
                    </Button>
                    </View>
                    </Card> 
                )
            }
        } else if(textPicker == "ec"){ 
            var str9 = "Ciencia"; 
            var str10 = str1.toLowerCase();
            var str11 = item.type.toLowerCase();
            var str12 = item.datestamp.substring(0,4).toLowerCase();
            if(str11.indexOf(str10) &&str12.indexOf(textInput.toLowerCase()) != -1){
                count++;
                return(
                    <Card key = {i}
                    titleStyle={styles.textCardTitle}
                    title={item.title}
                    >
                    <Text style={styles.textCard}>Fecha de Edición: {item.datestamp}</Text>
                    <Text style={styles.textCard}>Catálogo: EAFIT</Text>
                    <Text style={styles.textCard}>Editor: {item.publisher}</Text>
                    <Text style={styles.textCard}>Tipo: {item.type}</Text>
                    <Text style={styles.textCard}>Clasificación: {item.clasification}</Text>
                    <Text style={styles.textCard}>Idioma: {item.language}</Text>
                    <Text style={styles.textCard}>Descripción: {item.description}</Text>
                    <Text style={styles.textCard}>Código Material: {item.matcodigo}</Text>
                    <Text style={styles.textCard}>ID Registro: {item.idregistro}</Text>
                    <Text style={styles.textCard}>Ubicación: {item.coverage}</Text>
                    <View style ={{alignItems: 'center'}}>
                    <Button 
                        style={{flex: 1,flexDirection: 'row', backgroundColor: '#000066', width: 200, height: 32, alignItems: 'center'}} 
                        textStyle={{fontSize: 20, color: 'white'}}
                        onPress={() => {this.setModalVisible1(true)}}
                        >
                        Registro completo
                    </Button>
                    </View>
                    </Card> 
                )
            }
        } else if(textPicker == "eh"){ 
            var str13 = "Humanidades"; 
            var str14 = str1.toLowerCase();
            var str15 = item.type.toLowerCase();
            var str16 = item.datestamp.substring(0,4).toLowerCase();
            if(str15.indexOf(str14)&&str16.indexOf(textInput.toLowerCase()) != -1){
                count++;
                return(
                    <Card key = {i}
                    titleStyle={styles.textCardTitle}
                    title={item.title}
                    >
                    <Text style={styles.textCard}>Fecha de Edición: {item.datestamp}</Text>
                    <Text style={styles.textCard}>Catálogo: EAFIT</Text>
                    <Text style={styles.textCard}>Editor: {item.publisher}</Text>
                    <Text style={styles.textCard}>Tipo: {item.type}</Text>
                    <Text style={styles.textCard}>Clasificación: {item.clasification}</Text>
                    <Text style={styles.textCard}>Idioma: {item.language}</Text>
                    <Text style={styles.textCard}>Descripción: {item.description}</Text>
                    <Text style={styles.textCard}>Código Material: {item.matcodigo}</Text>
                    <Text style={styles.textCard}>ID Registro: {item.idregistro}</Text>
                    <Text style={styles.textCard}>Ubicación: {item.coverage}</Text>
                    <View style ={{alignItems: 'center'}}>
                    <Button 
                        style={{flex: 1,flexDirection: 'row', backgroundColor: '#000066', width: 200, height: 32, alignItems: 'center'}} 
                        textStyle={{fontSize: 20, color: 'white'}}
                        onPress={() => {this.setModalVisible1(true)}}
                        >
                        Registro completo
                    </Button>
                    </View>
                    </Card> 
                )
            }
        } else if(textPicker == "ed"){ 
            var str17 = "Derecho"; 
            var str18 = str1.toLowerCase();
            var str19 = item.type.toLowerCase();
            var str20 = item.datestamp.substring(0,4).toLowerCase();
            if(str19.indexOf(str18)&&str20.indexOf(textInput.toLowerCase()) != -1){
                count++;
                return(
                    <Card key = {i}
                    titleStyle={styles.textCardTitle}
                    title={item.title}
                    >
                    <Text style={styles.textCard}>Fecha de Edición: {item.datestamp}</Text>
                    <Text style={styles.textCard}>Catálogo: EAFIT</Text>
                    <Text style={styles.textCard}>Editor: {item.publisher}</Text>
                    <Text style={styles.textCard}>Tipo: {item.type}</Text>
                    <Text style={styles.textCard}>Clasificación: {item.clasification}</Text>
                    <Text style={styles.textCard}>Idioma: {item.language}</Text>
                    <Text style={styles.textCard}>Descripción: {item.description}</Text>
                    <Text style={styles.textCard}>Código Material: {item.matcodigo}</Text>
                    <Text style={styles.textCard}>ID Registro: {item.idregistro}</Text>
                    <Text style={styles.textCard}>Ubicación: {item.coverage}</Text>
                    <View style ={{alignItems: 'center'}}>
                    <Button 
                        style={{flex: 1,flexDirection: 'row', backgroundColor: '#000066', width: 200, height: 32, alignItems: 'center'}} 
                        textStyle={{fontSize: 20, color: 'white'}}
                        onPress={() => {this.setModalVisible1(true)}}
                        >
                        Registro completo
                    </Button>
                    </View>
                    </Card> 
                )
            }
        } else if(textPicker == "eef"){ 
            var str21 = "Economia"; 
            var str22 = str1.toLowerCase();
            var str23 = item.type.toLowerCase();
            var str24 = item.datestamp.substring(0,4).toLowerCase();
            if(str23.indexOf(str22) &&str24.indexOf(textInput.toLowerCase()) != -1){
                count++;
                return(
                    <Card key = {i}
                    titleStyle={styles.textCardTitle}
                    title={item.title}
                    >
                    <Text style={styles.textCard}>Fecha de Edición: {item.datestamp}</Text>
                    <Text style={styles.textCard}>Catálogo: EAFIT</Text>
                    <Text style={styles.textCard}>Editor: {item.publisher}</Text>
                    <Text style={styles.textCard}>Tipo: {item.type}</Text>
                    <Text style={styles.textCard}>Clasificación: {item.clasification}</Text>
                    <Text style={styles.textCard}>Idioma: {item.language}</Text>
                    <Text style={styles.textCard}>Descripción: {item.description}</Text>
                    <Text style={styles.textCard}>Código Material: {item.matcodigo}</Text>
                    <Text style={styles.textCard}>ID Registro: {item.idregistro}</Text>
                    <Text style={styles.textCard}>Ubicación: {item.coverage}</Text>
                    <View style ={{alignItems: 'center'}}>
                    <Button 
                        style={{flex: 1,flexDirection: 'row', backgroundColor: '#000066', width: 200, height: 32, alignItems: 'center'}} 
                        textStyle={{fontSize: 20, color: 'white'}}
                        onPress={() => {this.setModalVisible1(true)}}
                        >
                        Registro completo
                    </Button>
                    </View>
                    </Card> 
                )
            }
        } 
        })
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

class Tesis_Proyectos extends Component {
    static navigationOptions = {
        drawerLabel: ({color = "white"}) => ('Tesis y proyectos'),
        drawerIcon: ({ tintColor }) => (
            <Octicons
                    name = "project"
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
          fetch('https://raw.githubusercontent.com/jugonz31/biblioteca-movil/master/database/tesisGrado1.json')
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
        textInput = String(formData.busquedatesis);
        textPicker = formData.area;
        count = 0;
      }
      handleFormFocus(e, component){
       
      }
      openTermsAndConditionsURL(){
     
      }
    render() {
        var textBox = <Text style = {styles.textNormal}> Limitar material a texto completo</Text>
        return (<ScrollView keyboardShouldPersistTaps={"always"} style={{paddingLeft:10,paddingRight:10, height:200}}>
        <Form
            ref='busquedatesis_proyectos'
            onFocus={this.handleFormFocus.bind(this)}
            onChange={this.handleFormChange.bind(this)}
            label="Tesis y proyectos"
            >
            <Text style = {styles.textTitle}>Tesis y proyectos</Text>
            <Text></Text> 
                    <Text style = {styles.text}>Año de edición:</Text>
                    <Text></Text>
                    <InputField ref='busquedatesis' placeholder='(YYYY)'/>
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
                    <Text></Text>
                    <SwitchField 
                    label={textBox}
                    />
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
                    <View><Text></Text></View>
                    <Text style = {styles.text}>Seleccione el área en que desea realizar la búsqueda:</Text>
                    <Text></Text>
                    <PickerField ref='area'
                        options={{
                            undefined: 'Seleccione la escuela',
                            ea: 'Escuela de Administración',
                            ei: 'Escuela de Ingenierías',
                            ec: 'Escuela de Ciencias',
                            eh: 'Escuela de Humanidades',
                            ed: 'Escuela de Derecho',
                            eef: 'Escuela de Economía y Finanzas',
                    }}/>
                    <Text></Text>
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
        color: '#000066',
		fontSize: 18,
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

export default Tesis_Proyectos;