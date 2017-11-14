import React, { Component } from 'react';
import {Dimensions, StyleSheet, View, Text, Image, ScrollView, TouchableHighlight, Picker, 
    TextInput, CheckBox, Modal } from 'react-native';
import {DrawerNavigator, StackNavigator} from 'react-navigation';
import { Form,
    Separator,InputField, LinkField,
    SwitchField, PickerField,DatePickerField,TimePickerField
   } from 'react-native-form-generator';
import { AppLoading, Asset, Font } from 'expo';
import { FontAwesome, FontFamily, Entypo } from '@expo/vector-icons';
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
            if(textPicker1 == undefined && textInput1 == undefined){
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
                        <Text style={styles.textCard}>Subject: {item.subject}</Text>
                        <Text style={styles.textCard}>Catálogo: EAFIT</Text>
                        <Text style={styles.textCard}>Editor: {item.publisher}</Text>
                        <Text style={styles.textCard}>Tipo: {item.type}</Text>
                        <Text style={styles.textCard}>ISBN: {item.isbn}</Text>
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
                 }else if(textPicker == "autor"){ 
                    var str2 = item.creator.toLowerCase();
                    if(str2.indexOf(textInput.toLowerCase()) != -1){
                        count++;
                        return(
                        <Card key = {i}
                            titleStyle={styles.textCardTitle}
                            title={item.title}
                        >
                        <Text style={styles.textCard}>Fecha de Publicación: {item.datestamp}</Text>
                        <Text style={styles.textCard}>Autor(es): {item.creator}</Text>
                        <Text style={styles.textCard}>Subject: {item.subject}</Text>
                        <Text style={styles.textCard}>Catálogo: EAFIT</Text>
                        <Text style={styles.textCard}>Editor: {item.publisher}</Text>
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
                    }
                } else if(textPicker == "isbn"){ 
                    var str3 = item.isbn.toLowerCase();
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
                        <Text style={styles.textCard}>Subject: {item.subject}</Text>
                        <Text style={styles.textCard}>Catálogo: EAFIT</Text>
                        <Text style={styles.textCard}>Editor: {item.publisher}</Text>
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
                    }
                } else if(textPicker == "editorial"){ 
                    var str4 = item.editorial.toLowerCase();
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
                        <Text style={styles.textCard}>Subject: {item.subject}</Text>
                        <Text style={styles.textCard}>Catálogo: EAFIT</Text>
                        <Text style={styles.textCard}>Editor: {item.publisher}</Text>
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
                    }
                } else if(textPicker == "tema_materia"){ 
                    var str5 = item.subject.toLowerCase();
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
                        <Text style={styles.textCard}>Subject: {item.subject}</Text>
                        <Text style={styles.textCard}>Catálogo: EAFIT</Text>
                        <Text style={styles.textCard}>Editor: {item.publisher}</Text>
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
                    }
                } else if(textPicker == "titulo"){ 
                    var str6 = item.subject.toLowerCase();
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
                        <Text style={styles.textCard}>Subject: {item.subject}</Text>
                        <Text style={styles.textCard}>Catálogo: EAFIT</Text>
                        <Text style={styles.textCard}>Editor: {item.publisher}</Text>
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
                    }
                } else if(textPicker == "titulo_revista"){ 
                    var str7 = item.description.toLowerCase();
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
                        <Text style={styles.textCard}>Subject: {item.subject}</Text>
                        <Text style={styles.textCard}>Catálogo: EAFIT</Text>
                        <Text style={styles.textCard}>Editor: {item.publisher}</Text>
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
                    }
                } else if(textPicker == "serie"){ 
                    var str8 = item.clasification.toLowerCase();
                    if(str8.indexOf(textInput.toLowerCase()) != -1){
                        count++;
                        //alert(textPicker);
                        return(
                        <Card key = {i}
                            titleStyle={styles.textCardTitle}
                            title={item.title}
                        >
                        <Text style={styles.textCard}>Fecha de Publicación: {item.datestamp}</Text>
                        <Text style={styles.textCard}>Autor(es): {item.creator}</Text>
                        <Text style={styles.textCard}>Subject: {item.subject}</Text>
                        <Text style={styles.textCard}>Catálogo: EAFIT</Text>
                        <Text style={styles.textCard}>Editor: {item.publisher}</Text>
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
                    }
                }
            }else{
                if(textPicker == "todos" && textPicker1 == "todas"){
                    var strA1 = item.subject.toLowerCase();
                    var strA2 = item.title.toLowerCase();
                    var strA3 = item.creator.toLowerCase();
                    var strA4 = item.publisher.toLowerCase();
                    var strA5 = item.datestamp.toLowerCase();
                    if((strA1.indexOf(textInput.toLowerCase()) != -1 
                    || strA2.indexOf(textInput.toLowerCase()) != -1
                    || strA3.indexOf(textInput.toLowerCase()) != -1
                    || strA4.indexOf(textInput.toLowerCase()) != -1) 
                    && strA5.indexOf(textInput1.toLowerCase()) != -1){
                        count++;
                        return(
                        <Card key = {i}
                            titleStyle={styles.textCardTitle}
                            title={item.title}
                        >
                        <Text style={styles.textCard}>Fecha de Publicación: {item.datestamp}</Text>
                        <Text style={styles.textCard}>Autor(es): {item.creator}</Text>
                        <Text style={styles.textCard}>Subject: {item.subject}</Text>
                        <Text style={styles.textCard}>Catálogo: EAFIT</Text>
                        <Text style={styles.textCard}>Editor: {item.publisher}</Text>
                        <Text style={styles.textCard}>Tipo: {item.type}</Text>
                        <Text style={styles.textCard}>ISBN: {item.isbn}</Text>
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

  class Avanzada extends Component {
      static navigationOptions = {
          drawerLabel: ({color = "white"}) => ('Avanzada'),
          drawerIcon: ({ tintColor }) => (
              <FontAwesome
                      name = "ravelry"
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
              fetch('https://raw.githubusercontent.com/jugonz31/biblioteca-movil/master/database/books1.json')
              .then((response) => response.json())
              .then((responseJson) => {
                  this.setState({
                      data: responseJson
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
            textInput = String(formData.busqueda);
            textInput1 = String(formData.fechaEdicion);
            textPicker = formData.busquedapor;
            textPicker1 = formData.ubicacion;
            count = 0;
          }
          handleFormFocus(e, component){
           
          }
          openTermsAndConditionsURL(){
         
          }
      render() {
        var textBox = <Text style = {styles.textNormal}> Sólo material de texto completo</Text>
          return (<ScrollView keyboardShouldPersistTaps={"always"} style={{paddingLeft:10,paddingRight:10, height:200}}>
          <Form
              ref='busquedaAvanzada'
              onFocus={this.handleFormFocus.bind(this)}
              onChange={this.handleFormChange.bind(this)}
              label="Búsqueda Avanzada"
              >
              <Text style = {styles.textTitle}>Búsqueda avanzada</Text>
                <Text></Text> 
              <Text style = {styles.text}>Búsqueda por:</Text>
              <Text></Text>
              <PickerField 
                          style = {styles.picker} 
                          ref='busquedaporUno'
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
                          autor: 'Autor',
                          isbn: 'ISBN / ISSN',
                          editorial: 'Editorial',
                          tema_materia: 'Tema / Materias',
                          titulo: 'Título',
                          titulo_revista: 'Títulos de Revistas',
                          serie: 'Serie',                    
                      }}/> 
                      <Text></Text>
                      <Text style = {styles.text}>Ingrese los términos de búsqueda:</Text>
                      <View><Text></Text></View>
                      <InputField ref='busquedaUno' placeholder=' Ingrese los términos de búsqueda'/>
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
                      <View><Text></Text></View>
                      <Text style = {styles.textTitle}>Limitar material a:</Text>
                      <View><Text></Text></View>
                      <Text style = {styles.text}>Fecha de edición:</Text>
                      <View><Text></Text></View>
                      <InputField ref='fechaEdicion' placeholder=' Ingrese la fecha de edición'/>
                      <View><Text></Text></View>
                      <Text style = {styles.text}>Ubicación/Sede: </Text>
                      <PickerField 
                          style = {styles.picker} 
                          ref='ubicacion'
                          iconRight={
                              <FontAwesome 
                              name='angle-right'
                              size={24}
                              style={[
                                  formStyles.alignRight,{color: '#000066'},
                                  this.props.iconStyle]}/>
                          }
                          options={{
                          undefined: 'Seleccione la ubicación',
                          todas : 'Todas',
                          medellin : 'Medellín',
                          salapatrimonial : 'Medellín - Sala Patrimonial',
                          llanogrande : 'Llanogrande',
                          bogota : 'Bogotá',
                          pereira : 'Pereira'                     
                      }}/>
                      <View><Text></Text></View>
                      <SwitchField 
                      label={textBox}
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

  export default Avanzada;