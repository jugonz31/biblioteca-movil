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
  class Avanzada extends Component {
      static navigationOptions = {
          drawerLabel: ({color = "white"}) => ('Avanzada'),
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
              ref='busquedaAvanzada'
              onFocus={this.handleFormFocus.bind(this)}
              onChange={this.handleFormChange.bind(this)}
              label="Búsqueda Avanzada"
              >
              <Separator />
              <Text style = {styles.text}> Búsqueda por:</Text>
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
                      <Text style = {styles.text}> Ingrese los términos de búsqueda:</Text>
                      <View><Text></Text></View>
                      <InputField ref=' busquedaUno' placeholder=' Ingrese los términos de búsqueda'/>
                      <View><Text></Text></View>
                      <PickerField 
                          style = {styles.picker} 
                          ref='logicaUno'
                          iconRight={
                              <FontAwesome 
                              name='angle-right'
                              size={24}
                              style={[
                                  formStyles.alignRight,{color: '#000066'},
                                  this.props.iconStyle]}/>
                          }
                          options={{
                          y : 'Y',
                          o : 'O'                    
                      }}/> 
              <Text style = {styles.text}> Búsqueda por:</Text>
              <Text></Text>
              <PickerField 
                          style = {styles.picker} 
                          ref='busquedaporDos'
                          iconRight={
                              <FontAwesome 
                              name='angle-right'
                              size={24}
                              style={[
                                  formStyles.alignRight,{color: '#000066'},
                                  this.props.iconStyle]}/>
                          }
                          options={{
                          autor: 'Autor',
                          todos: 'Todos',                          
                          isbn: 'ISBN / ISSN',
                          editorial: 'Editorial',
                          tema_materia: 'Tema / Materias',
                          titulo: 'Título',
                          titulo_revista: 'Títulos de Revistas',
                          serie: 'Serie',                    
                      }}/> 
                      <Text></Text>
                      <Text style = {styles.text}> Ingrese los términos de búsqueda:</Text>
                      <View><Text></Text></View>
                      <InputField ref=' busquedaDos' placeholder=' Ingrese los términos de búsqueda'/>
                      <View><Text></Text></View>
                      <PickerField 
                          style = {styles.picker} 
                          ref='logicaDos'
                          iconRight={
                              <FontAwesome 
                              name='angle-right'
                              size={24}
                              style={[
                                  formStyles.alignRight,{color: '#000066'},
                                  this.props.iconStyle]}/>
                          }
                          options={{
                          y : 'Y',
                          o : 'O'                    
                      }}/> 
                      <Text style = {styles.text}> Búsqueda por:</Text>
              <Text></Text>
              <PickerField 
                          style = {styles.picker} 
                          ref='busquedaporTres'
                          iconRight={
                              <FontAwesome 
                              name='angle-right'
                              size={24}
                              style={[
                                  formStyles.alignRight,{color: '#000066'},
                                  this.props.iconStyle]}/>
                          }
                          options={{
                          isbn: 'ISBN / ISSN',
                          todos: 'Todos',
                          autor: 'Autor',
                          editorial: 'Editorial',
                          tema_materia: 'Tema / Materias',
                          titulo: 'Título',
                          titulo_revista: 'Títulos de Revistas',
                          serie: 'Serie',                    
                      }}/> 
                      <Text></Text>
                      <Text style = {styles.text}> Ingrese los términos de búsqueda:</Text>
                      <View><Text></Text></View>
                      <InputField ref='busquedaTres' placeholder=' Ingrese los términos de búsqueda'/>
                      <View><Text></Text></View>
                      <PickerField 
                          style = {styles.picker} 
                          ref='logicaTres'
                          iconRight={
                              <FontAwesome 
                              name='angle-right'
                              size={24}
                              style={[
                                  formStyles.alignRight,{color: '#000066'},
                                  this.props.iconStyle]}/>
                          }
                          options={{
                          y : 'Y',
                          o : 'O'                    
                      }}/> 
                      <View><Text></Text></View>
                      <View style = {{flex: 2, flexDirection: 'row', paddingHorizontal: 30, justifyContent: 'space-between',
                  alignItems: 'center'}}>
                      <Button 
                          style={{flexDirection: 'row', backgroundColor: '#000066', width: 130, height: 32}} 
                          textStyle={{fontSize: 25, color: 'white'}}>
                          Buscar
                      </Button>
                      <Button 
                          style={{flexDirection: 'row', backgroundColor: '#000066', width: 130, height: 32}} 
                          textStyle={{fontSize: 25, color: 'white'}}>
                          Borrar
                      </Button>
                      </View>
                      <View><Text></Text></View>
                      <Text style = {styles.text}> Limitar material a:</Text>
                      <View><Text></Text></View>
                      <Text style = {styles.text}> Tipo de material: </Text>
                      <PickerField 
                          style = {styles.picker} 
                          ref='tipoMaterial'
                          iconRight={
                              <FontAwesome 
                              name='angle-right'
                              size={24}
                              style={[
                                  formStyles.alignRight,{color: '#000066'},
                                  this.props.iconStyle]}/>
                          }
                          options={{
                          todos : 'Todos',
                          articulos : 'Artículos',
                          historicos : 'Archivos/Documentos Históricos',
                          audiovisuales : 'Audiovisuales',
                          cds : 'CDs',
                          catalogos : 'Catálogos',
                          casos : 'Casos',
                          ereader : 'E-reader',
                          documento : 'Documentos',
                          folletos : 'Folletos',
                          libros : 'Libros',
                          mapas : 'Mapas',
                          normas : 'Normas',
                          partituras : 'Partituras', 
                          proyectos : 'Proyectos',
                          referencia : 'Referencia',
                          revistas : 'Revista',
                          software : 'Software',
                          tesis : 'Tesis',                     
                      }}/> 
                      <Text style = {styles.text}> Fecha de edición:</Text>
                      <View><Text></Text></View>
                      <InputField ref='fechaEdicion' placeholder=' Ingrese la fecha de edición'/>
                      <View><Text></Text></View>
                      <Text style = {styles.text}> Ubicación/Sede: </Text>
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
                          todas : 'Todas',
                          medellin : 'Medellín',
                          salapatrimonial : 'Medellín - Sala Patrimonial',
                          llanogrande : 'Llanogrande',
                          bogota : 'Bogotá',
                          pereira : 'Pereira'                     
                      }}/>
                      <View><Text></Text></View>
                      <Text style = {styles.text}> Idioma: </Text>
                      <PickerField 
                          style = {styles.picker} 
                          ref='idioma'
                          iconRight={
                              <FontAwesome 
                              name='angle-right'
                              size={24}
                              style={[
                                  formStyles.alignRight,{color: '#000066'},
                                  this.props.iconStyle]}/>
                          }
                          options={{
                          espanol : 'Español',
                          aleman : 'Alemán',
                          catalan : 'Catalán',
                          italiano : 'Italiano',
                          ingles : 'Ingles',
                          danes : 'Danés',
                          frances : 'Francés',
                          griego : 'Griego',
                          japones : 'Japones',
                          latin : 'Latín',
                          senas : 'Leng. de señas',
                          mandarin : 'Mandarín',
                          multilingue : 'Multilingue',
                          persa : 'Persa',
                          portugues : 'Portugués',
                          rumano : 'Rumano',
                          ruso : 'Ruso',
                      }}/>

                      <View><Text></Text></View>
                      <SwitchField 
                      label=' Sólo material de texto completo'
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

  export default Avanzada;