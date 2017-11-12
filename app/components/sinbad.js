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
    Modal,
    Linking
} from 'react-native';
import {DrawerNavigator, StackNavigator} from 'react-navigation';
import { Form,
    Separator,InputField, LinkField,
    SwitchField, PickerField,DatePickerField,TimePickerField
   } from 'react-native-form-generator';
import { AppLoading, Asset, Font } from 'expo';
import { FontAwesome, Ionicons, Foundation, MaterialIcons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Button from 'apsl-react-native-button';

var color = 'white';
var url1 = 'http://bdigital.eafit.edu.co/pagina/guiaBusquedaSinbad.pdf';
var url2 = 'http://bdigital.eafit.edu.co:8080/tutorial/index.html';
var url3 = 'http://webapps.eafit.edu.co/sinbad/';
var url4 = 'http://webapps.eafit.edu.co/sinbad/index.jsp?codigoBarras';
var url5 = 'http://www.eafit.edu.co/biblioteca/servicios/Paginas/prestamo.aspx';
var url6 = 'http://www.eafit.edu.co/biblioteca/servicios/Paginas/extraviado.aspx';
var url7 = 'http://www.eafit.edu.co/biblioteca/formacion-usuarios/Paginas/inicio.aspx';
var url8 = 'http://www.eafit.edu.co/biblioteca/recursos/Paginas/bases-de-datos-bibliograficas.aspx';
var url9 = 'http://eds.b.ebscohost.com/eds/search/basic?vid=0&sid=5248c3c2-99c9-474e-8fac-0067305f0e42%40sessionmgr103';

class Sinbad extends Component {
    static navigationOptions = {
        drawerLabel: ({color = "white"}) => ('SINBAD - Catálogo en Línea'),
        drawerIcon: ({ tintColor }) => (
            <FontAwesome
                    name = "book"
                    color = "white"
                    size = {24}
            />
        )
      };

      state = {
        modalVisible: false,
        data: null
      }
    
      setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }
      
      handleFormChange(formData){
     
        this.setState({formData:formData})
        this.props.onFormChange && this.props.onFormChange(formData);
      }
      handleFormFocus(e, component){
       
      }
      openTermsAndConditionsURL(){
     
      }
    render() {
        return (<ScrollView keyboardShouldPersistTaps={"always"} style={{paddingLeft:10,paddingRight:10, height:200}}>
        <Form
            ref='sinbad'
            onFocus={this.handleFormFocus.bind(this)}
            onChange={this.handleFormChange.bind(this)}
            label="SINBAD - Catalógo en Línea"
            >
            <Text style = {styles.textTitle}>SINBAD - Catálogo en línea</Text>
            <Text></Text>   
            <LinkField label="  Guía de Búsqueda" 
            onPress={()=>{Linking.canOpenURL(url1).then(supported => {
                        if (!supported) {
                            console.log('Can\'t handle url: ' + url1);
                        } else {
                            return Linking.openURL(url1);
                        }
                        }).catch(err => console.error('An error occurred', err))}} 
            iconLeft={<Foundation name='page-search'size={40}/>}/>
            <LinkField label="Tutorial en línea" 
            onPress={()=>{Linking.canOpenURL(url2).then(supported => {
                        if (!supported) {
                            console.log('Can\'t handle url: ' + url2);
                        } else {
                            return Linking.openURL(url2);
                        }
                        }).catch(err => console.error('An error occurred', err))}} 
            iconLeft={<MaterialIcons name='computer'size={40}/>}/>
            <LinkField label="Consulta de préstamos y sanciones" 
            onPress={()=>{Linking.canOpenURL(url3).then(supported => {
                        if (!supported) {
                            console.log('Can\'t handle url: ' + url3);
                        } else {
                            return Linking.openURL(url3);
                        }
                        }).catch(err => console.error('An error occurred', err))}} 
            iconLeft={<Entypo name='bookmarks'size={40}/>}/>
            <LinkField label="Reservar material" 
            onPress={()=>{Linking.canOpenURL(url4).then(supported => {
                        if (!supported) {
                            console.log('Can\'t handle url: ' + url4);
                        } else {
                            return Linking.openURL(url4);
                        }
                        }).catch(err => console.error('An error occurred', err))}} 
            iconLeft={<Entypo name='save'size={40}/>}/>
            <LinkField label="Servicios de préstamos" 
            onPress={()=>{Linking.canOpenURL(url5).then(supported => {
                        if (!supported) {
                            console.log('Can\'t handle url: ' + url5);
                        } else {
                            return Linking.openURL(url5);
                        }
                        }).catch(err => console.error('An error occurred', err))}} 
            iconLeft={<FontAwesome name='server'size={40}/>}/>
            <LinkField label="Reportar material extraviado" 
            onPress={()=>{Linking.canOpenURL(url6).then(supported => {
                        if (!supported) {
                            console.log('Can\'t handle url: ' + url6);
                        } else {
                            return Linking.openURL(url6);
                        }
                        }).catch(err => console.error('An error occurred', err))}} 
            iconLeft={<Entypo name='circle-with-minus'size={40}/>}/>
            <LinkField label="Formación de usuarios - COIN" 
            onPress={()=>{Linking.canOpenURL(url7).then(supported => {
                        if (!supported) {
                            console.log('Can\'t handle url: ' + url7);
                        } else {
                            return Linking.openURL(url7);
                        }
                        }).catch(err => console.error('An error occurred', err))}} 
            iconLeft={<FontAwesome name='users'size={40}/>}/>
            <LinkField label="  Bases de datos bibliográficas" 
            onPress={()=>{Linking.canOpenURL(url8).then(supported => {
                        if (!supported) {
                            console.log('Can\'t handle url: ' + url8);
                        } else {
                            return Linking.openURL(url8);
                        }
                        }).catch(err => console.error('An error occurred', err))}} 
            iconLeft={<FontAwesome name='database'size={40}/>}/>
            <LinkField label="Descubridor - Búsqueda integrada" 
            onPress={()=>{Linking.canOpenURL(url9).then(supported => {
                        if (!supported) {
                            console.log('Can\'t handle url: ' + url9);
                        } else {
                            return Linking.openURL(url9);
                        }
                        }).catch(err => console.error('An error occurred', err))}} 
            iconLeft={<MaterialCommunityIcons name='account-search'size={40}/>}/>
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

export default Sinbad;