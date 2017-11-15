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
  var textPicker = "";
  var textPicker1 = "";
  var textInput1 = "";
  var textInput = "";
  var textInputClean = "";
  var count = 0;

  export class ChildComponent extends Component{
    render(){
    if(this.props.result){
        var res = this.props.result.map((item, i) => {
            if(textPicker1 == "nodefinido1" && textInput1 == ""){
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
                        <Text style={styles.textCard}>Ubicación: {item.coverage}</Text>
                        <View style ={{alignItems: 'center'}}>
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
                        
                        <Text style={styles.textCard}>Ubicación: {item.coverage}</Text>
                        <View>
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
                        
                        <Text style={styles.textCard}>Ubicación: {item.coverage}</Text>
                        <View>
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
                        
                        <Text style={styles.textCard}>Ubicación: {item.coverage}</Text>
                        <View>
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
                        
                        <Text style={styles.textCard}>Ubicación: {item.coverage}</Text>
                        <View>
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
                        
                        <Text style={styles.textCard}>Ubicación: {item.coverage}</Text>
                        <View>
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
                        
                        <Text style={styles.textCard}>Ubicación: {item.coverage}</Text>
                        <View>
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
                        
                        <Text style={styles.textCard}>Ubicación: {item.coverage}</Text>
                        <View>
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
                        
                        
                        <Text style={styles.textCard}>Ubicación: {item.coverage}</Text>
                        <View style ={{alignItems: 'center'}}>
                        </View>
                    </Card>  
                        )
                    }
                }else if(textPicker == "todos" && textPicker1 == "medellin"){
                    var strA6 = item.subject.toLowerCase();
                    var strA7 = item.title.toLowerCase();
                    var strA8 = item.creator.toLowerCase();
                    var strA9 = item.publisher.toLowerCase();
                    var strA10 = item.datestamp.toLowerCase();
                    var strA11 = "Medellin";
                    var strA12 = strA11.toLowerCase();
                    var strA13 = item.publisher.toLowerCase();
                    if((strA6.indexOf(textInput.toLowerCase()) != -1 
                    || strA7.indexOf(textInput.toLowerCase()) != -1
                    || strA8.indexOf(textInput.toLowerCase()) != -1
                    || strA9.indexOf(textInput.toLowerCase()) != -1) 
                    && (strA10.indexOf(textInput1.toLowerCase()) != -1)
                    && (strA13.indexOf(strA12) != -1)){
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
                        
                        
                        <Text style={styles.textCard}>Ubicación: {item.coverage}</Text>
                        <View style ={{alignItems: 'center'}}>
                        </View>
                    </Card>  
                        )
                    }
                }else if(textPicker == "todos" && textPicker1 == "salapatrimonial"){
                    var strA14 = item.subject.toLowerCase();
                    var strA15 = item.title.toLowerCase();
                    var strA16 = item.creator.toLowerCase();
                    var strA17 = item.publisher.toLowerCase();
                    var strA18 = item.datestamp.toLowerCase();
                    var strA19 = "Sala Patrimonial";
                    var strA20 = strA19.toLowerCase();
                    var strA21 = item.publisher.toLowerCase();
                    if((strA14.indexOf(textInput.toLowerCase()) != -1 
                    || strA15.indexOf(textInput.toLowerCase()) != -1
                    || strA16.indexOf(textInput.toLowerCase()) != -1
                    || strA17.indexOf(textInput.toLowerCase()) != -1) 
                    && (strA18.indexOf(textInput1.toLowerCase()) != -1)
                    && (strA21.indexOf(strA20) != -1)){
                        count++;strA12
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
                        
                        
                        <Text style={styles.textCard}>Ubicación: {item.coverage}</Text>
                        <View style ={{alignItems: 'center'}}>
                        </View>
                    </Card>  
                        )
                    }
                }else if(textPicker == "todos" && textPicker1 == "llanogrande"){
                    var strA22 = item.subject.toLowerCase();
                    var strA23 = item.title.toLowerCase();
                    var strA24 = item.creator.toLowerCase();
                    var strA25 = item.publisher.toLowerCase();
                    var strA26 = item.datestamp.toLowerCase();
                    var strA27 = "Llanogrande";
                    var strA28 = strA27.toLowerCase();
                    var strA29 = item.publisher.toLowerCase();
                    if((strA22.indexOf(textInput.toLowerCase()) != -1 
                    || strA23.indexOf(textInput.toLowerCase()) != -1
                    || strA24.indexOf(textInput.toLowerCase()) != -1
                    || strA25.indexOf(textInput.toLowerCase()) != -1) 
                    && (strA26.indexOf(textInput1.toLowerCase()) != -1)
                    && (strA29.indexOf(strA28) != -1)){
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
                        
                        
                        <Text style={styles.textCard}>Ubicación: {item.coverage}</Text>
                        <View style ={{alignItems: 'center'}}>
                        </View>
                    </Card>  
                        )
                    }
                }else if(textPicker == "todos" && textPicker1 == "bogota"){
                    var strA30 = item.subject.toLowerCase();
                    var strA31 = item.title.toLowerCase();
                    var strA32 = item.creator.toLowerCase();
                    var strA33 = item.publisher.toLowerCase();
                    var strA34 = item.datestamp.toLowerCase();
                    var strA35 = "Bogota";
                    var strA36 = strA35.toLowerCase();
                    var strA37 = item.publisher.toLowerCase();
                    if((strA30.indexOf(textInput.toLowerCase()) != -1 
                    || strA31.indexOf(textInput.toLowerCase()) != -1
                    || strA32.indexOf(textInput.toLowerCase()) != -1
                    || strA33.indexOf(textInput.toLowerCase()) != -1) 
                    && (strA34.indexOf(textInput1.toLowerCase()) != -1)
                    && (strA37.indexOf(strA36) != -1)){
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
                        
                        
                        <Text style={styles.textCard}>Ubicación: {item.coverage}</Text>
                        <View style ={{alignItems: 'center'}}>
                        </View>
                    </Card>  
                        )
                    }
                }else if(textPicker == "todos" && textPicker1 == "pereira"){
                    var strA38 = item.subject.toLowerCase();
                    var strA39 = item.title.toLowerCase();
                    var strA40 = item.creator.toLowerCase();
                    var strA41 = item.publisher.toLowerCase();
                    var strA42 = item.datestamp.toLowerCase();
                    var strA43 = "Pereira";
                    var strA44 = strA43.toLowerCase();
                    var strA45 = item.publisher.toLowerCase();
                    if((strA38.indexOf(textInput.toLowerCase()) != -1 
                    || strA39.indexOf(textInput.toLowerCase()) != -1
                    || strA40.indexOf(textInput.toLowerCase()) != -1
                    || strA41.indexOf(textInput.toLowerCase()) != -1) 
                    && (strA42.indexOf(textInput1.toLowerCase()) != -1)
                    && (strA45.indexOf(strA44) != -1)){
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
                        
                        
                        <Text style={styles.textCard}>Ubicación: {item.coverage}</Text>
                        <View style ={{alignItems: 'center'}}>
                        </View>
                    </Card>  
                        )
                    }
                }else if(textPicker == "autor" && textPicker1 == "todas"){
                    var strA271 = item.subject.toLowerCase();
                    var strA272 = item.title.toLowerCase();
                    var strA273 = item.creator.toLowerCase();
                    var strA274 = item.publisher.toLowerCase();
                    var strA275 = item.datestamp.toLowerCase();
                    if((strA271.indexOf(textInput.toLowerCase()) != -1 
                    || strA272.indexOf(textInput.toLowerCase()) != -1
                    || strA273.indexOf(textInput.toLowerCase()) != -1
                    || strA274.indexOf(textInput.toLowerCase()) != -1) 
                    && strA275.indexOf(textInput1.toLowerCase()) != -1){
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
                        
                        
                        <Text style={styles.textCard}>Ubicación: {item.coverage}</Text>
                        <View style ={{alignItems: 'center'}}>
                        </View>
                    </Card>  
                        )
                    }
                }else if(textPicker == "autor" && textPicker1 == "medellin"){
                    var strA276 = item.subject.toLowerCase();
                    var strA277 = item.title.toLowerCase();
                    var strA278 = item.creator.toLowerCase();
                    var strA279 = item.publisher.toLowerCase();
                    var strA280 = item.datestamp.toLowerCase();
                    var strA281 = "Medellin";
                    var strA282 = strA281.toLowerCase();
                    var strA283 = item.publisher.toLowerCase();
                    if((strA276.indexOf(textInput.toLowerCase()) != -1 
                    || strA277.indexOf(textInput.toLowerCase()) != -1
                    || strA278.indexOf(textInput.toLowerCase()) != -1
                    || strA279.indexOf(textInput.toLowerCase()) != -1) 
                    && (strA280.indexOf(textInput1.toLowerCase()) != -1)
                    && (strA283.indexOf(strA282) != -1)){
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
                        
                        
                        <Text style={styles.textCard}>Ubicación: {item.coverage}</Text>
                        <View style ={{alignItems: 'center'}}>
                        </View>
                    </Card>  
                        )
                    }
                }else if(textPicker == "autor" && textPicker1 == "salapatrimonial"){
                    var strA284 = item.subject.toLowerCase();
                    var strA285 = item.title.toLowerCase();
                    var strA286 = item.creator.toLowerCase();
                    var strA287 = item.publisher.toLowerCase();
                    var strA288 = item.datestamp.toLowerCase();
                    var strA289 = "Sala Patrimonial";
                    var strA290 = strA289.toLowerCase();
                    var strA291 = item.publisher.toLowerCase();
                    if((strA284.indexOf(textInput.toLowerCase()) != -1 
                    || strA285.indexOf(textInput.toLowerCase()) != -1
                    || strA286.indexOf(textInput.toLowerCase()) != -1
                    || strA287.indexOf(textInput.toLowerCase()) != -1) 
                    && (strA288.indexOf(textInput1.toLowerCase()) != -1)
                    && (strA291.indexOf(strA290) != -1)){
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
                        
                        
                        <Text style={styles.textCard}>Ubicación: {item.coverage}</Text>
                        <View style ={{alignItems: 'center'}}>
                        </View>
                    </Card>  
                        )
                    }
                }else if(textPicker == "autor" && textPicker1 == "llanogrande"){
                    var strA292 = item.subject.toLowerCase();
                    var strA293 = item.title.toLowerCase();
                    var strA294 = item.creator.toLowerCase();
                    var strA295 = item.publisher.toLowerCase();
                    var strA296 = item.datestamp.toLowerCase();
                    var strA297 = "Llanogrande";
                    var strA298 = strA297.toLowerCase();
                    var strA299 = item.publisher.toLowerCase();
                    if((strA292.indexOf(textInput.toLowerCase()) != -1 
                    || strA293.indexOf(textInput.toLowerCase()) != -1
                    || strA294.indexOf(textInput.toLowerCase()) != -1
                    || strA295.indexOf(textInput.toLowerCase()) != -1) 
                    && (strA296.indexOf(textInput1.toLowerCase()) != -1)
                    && (strA299.indexOf(strA298) != -1)){
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
                        
                        
                        <Text style={styles.textCard}>Ubicación: {item.coverage}</Text>
                        <View style ={{alignItems: 'center'}}>
                        </View>
                    </Card>  
                        )
                    }
                }else if(textPicker == "autor" && textPicker1 == "bogota"){
                    var strA300 = item.subject.toLowerCase();
                    var strA301 = item.title.toLowerCase();
                    var strA302 = item.creator.toLowerCase();
                    var strA303 = item.publisher.toLowerCase();
                    var strA304 = item.datestamp.toLowerCase();
                    var strA305 = "Bogota";
                    var strA306 = strA305.toLowerCase();
                    var strA307 = item.publisher.toLowerCase();
                    if((strA300.indexOf(textInput.toLowerCase()) != -1 
                    || strA301.indexOf(textInput.toLowerCase()) != -1
                    || strA302.indexOf(textInput.toLowerCase()) != -1
                    || strA303.indexOf(textInput.toLowerCase()) != -1) 
                    && (strA304.indexOf(textInput1.toLowerCase()) != -1)
                    && (strA307.indexOf(strA306) != -1)){
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
                        
                        
                        <Text style={styles.textCard}>Ubicación: {item.coverage}</Text>
                        <View style ={{alignItems: 'center'}}>
                        </View>
                    </Card>  
                        )
                    }
                }else if(textPicker == "autor" && textPicker1 == "pereira"){
                    var strA308 = item.subject.toLowerCase();
                    var strA309 = item.title.toLowerCase();
                    var strA85 = item.creator.toLowerCase();
                    var strA86 = item.publisher.toLowerCase();
                    var strA87 = item.datestamp.toLowerCase();
                    var strA88 = "Pereira";
                    var strA89 = strA88.toLowerCase();
                    var strA90 = item.publisher.toLowerCase();
                    if((strA308.indexOf(textInput.toLowerCase()) != -1 
                    || strA309.indexOf(textInput.toLowerCase()) != -1
                    || strA85.indexOf(textInput.toLowerCase()) != -1
                    || strA86.indexOf(textInput.toLowerCase()) != -1) 
                    && (strA87.indexOf(textInput1.toLowerCase()) != -1)
                    && (strA90.indexOf(strA89) != -1)){
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
                        
                        
                        <Text style={styles.textCard}>Ubicación: {item.coverage}</Text>
                        <View style ={{alignItems: 'center'}}>
                        </View>
                    </Card>  
                        )
                    }
                }else if(textPicker == "isbn" && textPicker1 == "todas"){
                    var strA91 = item.subject.toLowerCase();
                    var strA92 = item.title.toLowerCase();
                    var strA93 = item.creator.toLowerCase();
                    var strA94 = item.publisher.toLowerCase();
                    var strA95 = item.datestamp.toLowerCase();
                    if((strA91.indexOf(textInput.toLowerCase()) != -1 
                    || strA92.indexOf(textInput.toLowerCase()) != -1
                    || strA93.indexOf(textInput.toLowerCase()) != -1
                    || strA94.indexOf(textInput.toLowerCase()) != -1) 
                    && strA95.indexOf(textInput1.toLowerCase()) != -1){
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
                        
                        
                        <Text style={styles.textCard}>Ubicación: {item.coverage}</Text>
                        <View style ={{alignItems: 'center'}}>
                        </View>
                    </Card>  
                        )
                    }
                }else if(textPicker == "isbn" && textPicker1 == "medellin"){
                    var strA96 = item.subject.toLowerCase();
                    var strA97 = item.title.toLowerCase();
                    var strA98 = item.creator.toLowerCase();
                    var strA99 = item.publisher.toLowerCase();
                    var strA100 = item.datestamp.toLowerCase();
                    var strA101 = "Medellin";
                    var strA102 = strA101.toLowerCase();
                    var strA103 = item.publisher.toLowerCase();
                    if((strA96.indexOf(textInput.toLowerCase()) != -1 
                    || strA97.indexOf(textInput.toLowerCase()) != -1
                    || strA98.indexOf(textInput.toLowerCase()) != -1
                    || strA99.indexOf(textInput.toLowerCase()) != -1) 
                    && (strA100.indexOf(textInput1.toLowerCase()) != -1)
                    && (strA103.indexOf(strA102) != -1)){
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
                        
                        
                        <Text style={styles.textCard}>Ubicación: {item.coverage}</Text>
                        <View style ={{alignItems: 'center'}}>
                        </View>
                    </Card>  
                        )
                    }
                }else if(textPicker == "isbn" && textPicker1 == "salapatrimonial"){
                    var strA104 = item.subject.toLowerCase();
                    var strA105 = item.title.toLowerCase();
                    var strA106 = item.creator.toLowerCase();
                    var strA107 = item.publisher.toLowerCase();
                    var strA108 = item.datestamp.toLowerCase();
                    var strA109 = "Sala Patrimonial";
                    var strA110 = strA109.toLowerCase();
                    var strA111 = item.publisher.toLowerCase();
                    if((strA104.indexOf(textInput.toLowerCase()) != -1 
                    || strA105.indexOf(textInput.toLowerCase()) != -1
                    || strA106.indexOf(textInput.toLowerCase()) != -1
                    || strA107.indexOf(textInput.toLowerCase()) != -1) 
                    && (strA108.indexOf(textInput1.toLowerCase()) != -1)
                    && (strA111.indexOf(strA110) != -1)){
                        count++;strA12
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
                        
                        
                        <Text style={styles.textCard}>Ubicación: {item.coverage}</Text>
                        <View style ={{alignItems: 'center'}}>
                        </View>
                    </Card>  
                        )
                    }
                }else if(textPicker == "isbn" && textPicker1 == "llanogrande"){
                    var strA112 = item.subject.toLowerCase();
                    var strA113 = item.title.toLowerCase();
                    var strA114 = item.creator.toLowerCase();
                    var strA115 = item.publisher.toLowerCase();
                    var strA116 = item.datestamp.toLowerCase();
                    var strA117 = "Llanogrande";
                    var strA118 = strA117.toLowerCase();
                    var strA119 = item.publisher.toLowerCase();
                    if((strA112.indexOf(textInput.toLowerCase()) != -1 
                    || strA113.indexOf(textInput.toLowerCase()) != -1
                    || strA114.indexOf(textInput.toLowerCase()) != -1
                    || strA115.indexOf(textInput.toLowerCase()) != -1) 
                    && (strA116.indexOf(textInput1.toLowerCase()) != -1)
                    && (strA119.indexOf(strA118) != -1)){
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
                        
                        
                        <Text style={styles.textCard}>Ubicación: {item.coverage}</Text>
                        <View style ={{alignItems: 'center'}}>
                        </View>
                    </Card>  
                        )
                    }
                }else if(textPicker == "isbn" && textPicker1 == "bogota"){
                    var strA120 = item.subject.toLowerCase();
                    var strA121 = item.title.toLowerCase();
                    var strA122 = item.creator.toLowerCase();
                    var strA123 = item.publisher.toLowerCase();
                    var strA124 = item.datestamp.toLowerCase();
                    var strA125 = "Bogota";
                    var strA126 = strA125.toLowerCase();
                    var strA127 = item.publisher.toLowerCase();
                    if((strA120.indexOf(textInput.toLowerCase()) != -1 
                    || strA121.indexOf(textInput.toLowerCase()) != -1
                    || strA122.indexOf(textInput.toLowerCase()) != -1
                    || strA123.indexOf(textInput.toLowerCase()) != -1) 
                    && (strA124.indexOf(textInput1.toLowerCase()) != -1)
                    && (strA127.indexOf(strA126) != -1)){
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
                        
                        
                        <Text style={styles.textCard}>Ubicación: {item.coverage}</Text>
                        <View style ={{alignItems: 'center'}}>
                        </View>
                    </Card>  
                        )
                    }
                }else if(textPicker == "isbn" && textPicker1 == "pereira"){
                    var strA128 = item.subject.toLowerCase();
                    var strA129 = item.title.toLowerCase();
                    var strA130 = item.creator.toLowerCase();
                    var strA131 = item.publisher.toLowerCase();
                    var strA132 = item.datestamp.toLowerCase();
                    var strA133 = "Pereira";
                    var strA134 = strA133.toLowerCase();
                    var strA135 = item.publisher.toLowerCase();
                    if((strA128.indexOf(textInput.toLowerCase()) != -1 
                    || strA129.indexOf(textInput.toLowerCase()) != -1
                    || strA130.indexOf(textInput.toLowerCase()) != -1
                    || strA131.indexOf(textInput.toLowerCase()) != -1) 
                    && (strA132.indexOf(textInput1.toLowerCase()) != -1)
                    && (strA135.indexOf(strA134) != -1)){
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
                        
                        
                        <Text style={styles.textCard}>Ubicación: {item.coverage}</Text>
                        <View style ={{alignItems: 'center'}}>
                        </View>
                    </Card>  
                        )
                    }
                }else if(textPicker == "editorial" && textPicker1 == "todas"){
                    var strA136 = item.subject.toLowerCase();
                    var strA137 = item.title.toLowerCase();
                    var strA138 = item.creator.toLowerCase();
                    var strA139 = item.publisher.toLowerCase();
                    var strA140 = item.datestamp.toLowerCase();
                    if((strA136.indexOf(textInput.toLowerCase()) != -1 
                    || strA137.indexOf(textInput.toLowerCase()) != -1
                    || strA138.indexOf(textInput.toLowerCase()) != -1
                    || strA139.indexOf(textInput.toLowerCase()) != -1) 
                    && strA140.indexOf(textInput1.toLowerCase()) != -1){
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
                        
                        
                        <Text style={styles.textCard}>Ubicación: {item.coverage}</Text>
                        <View style ={{alignItems: 'center'}}>
                        </View>
                    </Card>  
                        )
                    }
                }else if(textPicker == "editorial" && textPicker1 == "medellin"){
                    var strA141 = item.subject.toLowerCase();
                    var strA142 = item.title.toLowerCase();
                    var strA143 = item.creator.toLowerCase();
                    var strA144 = item.publisher.toLowerCase();
                    var strA145 = item.datestamp.toLowerCase();
                    var strA146 = "Medellin";
                    var strA147 = strA146.toLowerCase();
                    var strA148 = item.publisher.toLowerCase();
                    if((strA141.indexOf(textInput.toLowerCase()) != -1 
                    || strA142.indexOf(textInput.toLowerCase()) != -1
                    || strA143.indexOf(textInput.toLowerCase()) != -1
                    || strA144.indexOf(textInput.toLowerCase()) != -1) 
                    && (strA145.indexOf(textInput1.toLowerCase()) != -1)
                    && (strA148.indexOf(strA147) != -1)){
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
                        
                        
                        <Text style={styles.textCard}>Ubicación: {item.coverage}</Text>
                        <View style ={{alignItems: 'center'}}>
                        </View>
                    </Card>  
                        )
                    }
                }else if(textPicker == "editorial" && textPicker1 == "salapatrimonial"){
                    var strA149 = item.subject.toLowerCase();
                    var strA150 = item.title.toLowerCase();
                    var strA151 = item.creator.toLowerCase();
                    var strA152 = item.publisher.toLowerCase();
                    var strA153 = item.datestamp.toLowerCase();
                    var strA154 = "Sala Patrimonial";
                    var strA155 = strA154.toLowerCase();
                    var strA156 = item.publisher.toLowerCase();
                    if((strA149.indexOf(textInput.toLowerCase()) != -1 
                    || strA150.indexOf(textInput.toLowerCase()) != -1
                    || strA151.indexOf(textInput.toLowerCase()) != -1
                    || strA152.indexOf(textInput.toLowerCase()) != -1) 
                    && (strA153.indexOf(textInput1.toLowerCase()) != -1)
                    && (strA156.indexOf(strA155) != -1)){
                        count++;strA12
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
                        
                        
                        <Text style={styles.textCard}>Ubicación: {item.coverage}</Text>
                        <View style ={{alignItems: 'center'}}>
                        </View>
                    </Card>  
                        )
                    }
                }else if(textPicker == "editorial" && textPicker1 == "llanogrande"){
                    var strA157 = item.subject.toLowerCase();
                    var strA158 = item.title.toLowerCase();
                    var strA159 = item.creator.toLowerCase();
                    var strA160 = item.publisher.toLowerCase();
                    var strA161= item.datestamp.toLowerCase();
                    var strA162 = "Llanogrande";
                    var strA163 = strA162.toLowerCase();
                    var strA164 = item.publisher.toLowerCase();
                    if((strA157.indexOf(textInput.toLowerCase()) != -1 
                    || strA158.indexOf(textInput.toLowerCase()) != -1
                    || strA159.indexOf(textInput.toLowerCase()) != -1
                    || strA160.indexOf(textInput.toLowerCase()) != -1) 
                    && (strA161.indexOf(textInput1.toLowerCase()) != -1)
                    && (strA164.indexOf(strA163) != -1)){
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
                        
                        
                        <Text style={styles.textCard}>Ubicación: {item.coverage}</Text>
                        <View style ={{alignItems: 'center'}}>
                        </View>
                    </Card>  
                        )
                    }
                }else if(textPicker == "editorial" && textPicker1 == "bogota"){
                    var strA165 = item.subject.toLowerCase();
                    var strA166 = item.title.toLowerCase();
                    var strA167 = item.creator.toLowerCase();
                    var strA168 = item.publisher.toLowerCase();
                    var strA169 = item.datestamp.toLowerCase();
                    var strA170 = "Bogota";
                    var strA171 = strA170.toLowerCase();
                    var strA172 = item.publisher.toLowerCase();
                    if((strA165.indexOf(textInput.toLowerCase()) != -1 
                    || strA166.indexOf(textInput.toLowerCase()) != -1
                    || strA167.indexOf(textInput.toLowerCase()) != -1
                    || strA168.indexOf(textInput.toLowerCase()) != -1) 
                    && (strA169.indexOf(textInput1.toLowerCase()) != -1)
                    && (strA172.indexOf(strA171) != -1)){
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
                        
                        
                        <Text style={styles.textCard}>Ubicación: {item.coverage}</Text>
                        <View style ={{alignItems: 'center'}}>
                        </View>
                    </Card>  
                        )
                    }
                }else if(textPicker == "editorial" && textPicker1 == "pereira"){
                    var strA173 = item.subject.toLowerCase();
                    var strA174 = item.title.toLowerCase();
                    var strA175 = item.creator.toLowerCase();
                    var strA176 = item.publisher.toLowerCase();
                    var strA177 = item.datestamp.toLowerCase();
                    var strA178 = "Pereira";
                    var strA179 = strA178.toLowerCase();
                    var strA180 = item.publisher.toLowerCase();
                    if((strA173.indexOf(textInput.toLowerCase()) != -1 
                    || strA174.indexOf(textInput.toLowerCase()) != -1
                    || strA175.indexOf(textInput.toLowerCase()) != -1
                    || strA176.indexOf(textInput.toLowerCase()) != -1) 
                    && (strA177.indexOf(textInput1.toLowerCase()) != -1)
                    && (strA180.indexOf(strA179) != -1)){
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
                        
                        
                        <Text style={styles.textCard}>Ubicación: {item.coverage}</Text>
                        <View style ={{alignItems: 'center'}}>
                        </View>
                    </Card>  
                        )
                    }
                }else if(textPicker == "tema_materia" && textPicker1 == "todas"){
                    var strA181 = item.subject.toLowerCase();
                    var strA182 = item.title.toLowerCase();
                    var strA183 = item.creator.toLowerCase();
                    var strA184 = item.publisher.toLowerCase();
                    var strA185 = item.datestamp.toLowerCase();
                    if((strA181.indexOf(textInput.toLowerCase()) != -1 
                    || strA182.indexOf(textInput.toLowerCase()) != -1
                    || strA183.indexOf(textInput.toLowerCase()) != -1
                    || strA184.indexOf(textInput.toLowerCase()) != -1) 
                    && strA185.indexOf(textInput1.toLowerCase()) != -1){
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
                        
                        
                        <Text style={styles.textCard}>Ubicación: {item.coverage}</Text>
                        <View style ={{alignItems: 'center'}}>
                        </View>
                    </Card>  
                        )
                    }
                }else if(textPicker == "tema_materia" && textPicker1 == "medellin"){
                    var strA186 = item.subject.toLowerCase();
                    var strA187 = item.title.toLowerCase();
                    var strA188 = item.creator.toLowerCase();
                    var strA189 = item.publisher.toLowerCase();
                    var strA190 = item.datestamp.toLowerCase();
                    var strA191 = "Medellin";
                    var strA192 = strA191.toLowerCase();
                    var strA193 = item.publisher.toLowerCase();
                    if((strA186.indexOf(textInput.toLowerCase()) != -1 
                    || strA187.indexOf(textInput.toLowerCase()) != -1
                    || strA188.indexOf(textInput.toLowerCase()) != -1
                    || strA189.indexOf(textInput.toLowerCase()) != -1) 
                    && (strA190.indexOf(textInput1.toLowerCase()) != -1)
                    && (strA193.indexOf(strA192) != -1)){
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
                        
                        
                        <Text style={styles.textCard}>Ubicación: {item.coverage}</Text>
                        <View style ={{alignItems: 'center'}}>
                        </View>
                    </Card>  
                        )
                    }
                }else if(textPicker == "tema_materia" && textPicker1 == "salapatrimonial"){
                    var strA194 = item.subject.toLowerCase();
                    var strA195 = item.title.toLowerCase();
                    var strA196 = item.creator.toLowerCase();
                    var strA197 = item.publisher.toLowerCase();
                    var strA198 = item.datestamp.toLowerCase();
                    var strA199 = "Sala Patrimonial";
                    var strA200 = strA199.toLowerCase();
                    var strA201 = item.publisher.toLowerCase();
                    if((strA194.indexOf(textInput.toLowerCase()) != -1 
                    || strA195.indexOf(textInput.toLowerCase()) != -1
                    || strA196.indexOf(textInput.toLowerCase()) != -1
                    || strA197.indexOf(textInput.toLowerCase()) != -1) 
                    && (strA198.indexOf(textInput1.toLowerCase()) != -1)
                    && (strA201.indexOf(strA200) != -1)){
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
                        
                        
                        <Text style={styles.textCard}>Ubicación: {item.coverage}</Text>
                        <View style ={{alignItems: 'center'}}>
                        </View>
                    </Card>  
                        )
                    }
                }else if(textPicker == "tema_materia" && textPicker1 == "llanogrande"){
                    var strA202 = item.subject.toLowerCase();
                    var strA203 = item.title.toLowerCase();
                    var strA204 = item.creator.toLowerCase();
                    var strA205 = item.publisher.toLowerCase();
                    var strA206 = item.datestamp.toLowerCase();
                    var strA207 = "Llanogrande";
                    var strA208 = strA207.toLowerCase();
                    var strA209 = item.publisher.toLowerCase();
                    if((strA202.indexOf(textInput.toLowerCase()) != -1 
                    || strA203.indexOf(textInput.toLowerCase()) != -1
                    || strA204.indexOf(textInput.toLowerCase()) != -1
                    || strA205.indexOf(textInput.toLowerCase()) != -1) 
                    && (strA206.indexOf(textInput1.toLowerCase()) != -1)
                    && (strA209.indexOf(strA208) != -1)){
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
                        
                        
                        <Text style={styles.textCard}>Ubicación: {item.coverage}</Text>
                        <View style ={{alignItems: 'center'}}>
                        </View>
                    </Card>  
                        )
                    }
                }else if(textPicker == "tema_materia" && textPicker1 == "bogota"){
                    var strA210 = item.subject.toLowerCase();
                    var strA211 = item.title.toLowerCase();
                    var strA212 = item.creator.toLowerCase();
                    var strA213 = item.publisher.toLowerCase();
                    var strA214 = item.datestamp.toLowerCase();
                    var strA215 = "Bogota";
                    var strA216 = strA215.toLowerCase();
                    var strA217 = item.publisher.toLowerCase();
                    if((strA210.indexOf(textInput.toLowerCase()) != -1 
                    || strA211.indexOf(textInput.toLowerCase()) != -1
                    || strA212.indexOf(textInput.toLowerCase()) != -1
                    || strA213.indexOf(textInput.toLowerCase()) != -1) 
                    && (strA214.indexOf(textInput1.toLowerCase()) != -1)
                    && (strA217.indexOf(strA216) != -1)){
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
                        
                        
                        <Text style={styles.textCard}>Ubicación: {item.coverage}</Text>
                        <View style ={{alignItems: 'center'}}>
                        </View>
                    </Card>  
                        )
                    }
                }else if(textPicker == "tema_materia" && textPicker1 == "pereira"){
                    var strA218 = item.subject.toLowerCase();
                    var strA219 = item.title.toLowerCase();
                    var strA220 = item.creator.toLowerCase();
                    var strA221 = item.publisher.toLowerCase();
                    var strA222 = item.datestamp.toLowerCase();
                    var strA223 = "Pereira";
                    var strA224 = strA223.toLowerCase();
                    var strA225 = item.publisher.toLowerCase();
                    if((strA218.indexOf(textInput.toLowerCase()) != -1 
                    || strA219.indexOf(textInput.toLowerCase()) != -1
                    || strA220.indexOf(textInput.toLowerCase()) != -1
                    || strA221.indexOf(textInput.toLowerCase()) != -1) 
                    && (strA222.indexOf(textInput1.toLowerCase()) != -1)
                    && (strA225.indexOf(strA224) != -1)){
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
                        
                        
                        <Text style={styles.textCard}>Ubicación: {item.coverage}</Text>
                        <View style ={{alignItems: 'center'}}>
                        </View>
                    </Card>  
                        )
                    }
                }else if(textPicker == "titulo" && textPicker1 == "todas"){
                    var strA226 = item.subject.toLowerCase();
                    var strA227 = item.title.toLowerCase();
                    var strA228 = item.creator.toLowerCase();
                    var strA229 = item.publisher.toLowerCase();
                    var strA230 = item.datestamp.toLowerCase();
                    if((strA226.indexOf(textInput.toLowerCase()) != -1 
                    || strA227.indexOf(textInput.toLowerCase()) != -1
                    || strA228.indexOf(textInput.toLowerCase()) != -1
                    || strA229.indexOf(textInput.toLowerCase()) != -1) 
                    && strA230.indexOf(textInput1.toLowerCase()) != -1){
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
                        
                        
                        <Text style={styles.textCard}>Ubicación: {item.coverage}</Text>
                        <View style ={{alignItems: 'center'}}>
                        </View>
                    </Card>  
                        )
                    }
                }else if(textPicker == "titulo" && textPicker1 == "medellin"){
                    var strA231 = item.subject.toLowerCase();
                    var strA232 = item.title.toLowerCase();
                    var strA233 = item.creator.toLowerCase();
                    var strA234 = item.publisher.toLowerCase();
                    var strA235 = item.datestamp.toLowerCase();
                    var strA236 = "Medellin";
                    var strA237 = strA236.toLowerCase();
                    var strA238 = item.publisher.toLowerCase();
                    if((strA231.indexOf(textInput.toLowerCase()) != -1 
                    || strA232.indexOf(textInput.toLowerCase()) != -1
                    || strA233.indexOf(textInput.toLowerCase()) != -1
                    || strA234.indexOf(textInput.toLowerCase()) != -1) 
                    && (strA235.indexOf(textInput1.toLowerCase()) != -1)
                    && (strA238.indexOf(strA237) != -1)){
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
                        
                        
                        <Text style={styles.textCard}>Ubicación: {item.coverage}</Text>
                        <View style ={{alignItems: 'center'}}>
                        </View>
                    </Card>  
                        )
                    }
                }else if(textPicker == "titulo" && textPicker1 == "salapatrimonial"){
                    var strA239 = item.subject.toLowerCase();
                    var strA240 = item.title.toLowerCase();
                    var strA241 = item.creator.toLowerCase();
                    var strA242 = item.publisher.toLowerCase();
                    var strA243 = item.datestamp.toLowerCase();
                    var strA244 = "Sala Patrimonial";
                    var strA245 = strA244.toLowerCase();
                    var strA246 = item.publisher.toLowerCase();
                    if((strA239.indexOf(textInput.toLowerCase()) != -1 
                    || strA240.indexOf(textInput.toLowerCase()) != -1
                    || strA241.indexOf(textInput.toLowerCase()) != -1
                    || strA242.indexOf(textInput.toLowerCase()) != -1) 
                    && (strA243.indexOf(textInput1.toLowerCase()) != -1)
                    && (strA246.indexOf(strA245) != -1)){
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
                        
                        
                        <Text style={styles.textCard}>Ubicación: {item.coverage}</Text>
                        <View style ={{alignItems: 'center'}}>
                        </View>
                    </Card>  
                        )
                    }
                }else if(textPicker == "titulo" && textPicker1 == "llanogrande"){
                    var strA22 = item.subject.toLowerCase();
                    var strA23 = item.title.toLowerCase();
                    var strA24 = item.creator.toLowerCase();
                    var strA25 = item.publisher.toLowerCase();
                    var strA26 = item.datestamp.toLowerCase();
                    var strA27 = "Llanogrande";
                    var strA28 = strA27.toLowerCase();
                    var strA29 = item.publisher.toLowerCase();
                    if((strA22.indexOf(textInput.toLowerCase()) != -1 
                    || strA23.indexOf(textInput.toLowerCase()) != -1
                    || strA24.indexOf(textInput.toLowerCase()) != -1
                    || strA25.indexOf(textInput.toLowerCase()) != -1) 
                    && (strA26.indexOf(textInput1.toLowerCase()) != -1)
                    && (strA29.indexOf(strA28) != -1)){
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
                        
                        
                        <Text style={styles.textCard}>Ubicación: {item.coverage}</Text>
                        <View style ={{alignItems: 'center'}}>
                        </View>
                    </Card>  
                        )
                    }
                }else if(textPicker == "titulo" && textPicker1 == "bogota"){
                    var strA30 = item.subject.toLowerCase();
                    var strA31 = item.title.toLowerCase();
                    var strA32 = item.creator.toLowerCase();
                    var strA33 = item.publisher.toLowerCase();
                    var strA34 = item.datestamp.toLowerCase();
                    var strA35 = "Bogota";
                    var strA36 = strA35.toLowerCase();
                    var strA37 = item.publisher.toLowerCase();
                    if((strA30.indexOf(textInput.toLowerCase()) != -1 
                    || strA31.indexOf(textInput.toLowerCase()) != -1
                    || strA32.indexOf(textInput.toLowerCase()) != -1
                    || strA33.indexOf(textInput.toLowerCase()) != -1) 
                    && (strA34.indexOf(textInput1.toLowerCase()) != -1)
                    && (strA37.indexOf(strA36) != -1)){
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
                        
                        
                        <Text style={styles.textCard}>Ubicación: {item.coverage}</Text>
                        <View style ={{alignItems: 'center'}}>
                        </View>
                    </Card>  
                        )
                    }
                }else if(textPicker == "titulo" && textPicker1 == "pereira"){
                    var strA83 = item.subject.toLowerCase();
                    var strA84 = item.title.toLowerCase();
                    var strA85 = item.creator.toLowerCase();
                    var strA86 = item.publisher.toLowerCase();
                    var strA87 = item.datestamp.toLowerCase();
                    var strA88 = "Pereira";
                    var strA89 = strA88.toLowerCase();
                    var strA90 = item.publisher.toLowerCase();
                    if((strA83.indexOf(textInput.toLowerCase()) != -1 
                    || strA84.indexOf(textInput.toLowerCase()) != -1
                    || strA85.indexOf(textInput.toLowerCase()) != -1
                    || strA86.indexOf(textInput.toLowerCase()) != -1) 
                    && (strA87.indexOf(textInput1.toLowerCase()) != -1)
                    && (strA90.indexOf(strA89) != -1)){
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
                        
                        
                        <Text style={styles.textCard}>Ubicación: {item.coverage}</Text>
                        <View style ={{alignItems: 'center'}}>
                        </View>
                    </Card>  
                        )
                    }
                }else if(textPicker == "titulo_revista" && textPicker1 == "todas"){
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
                        
                        
                        <Text style={styles.textCard}>Ubicación: {item.coverage}</Text>
                        <View style ={{alignItems: 'center'}}>
                        </View>
                    </Card>  
                        )
                    }
                }else if(textPicker == "titulo_revista" && textPicker1 == "medellin"){
                    var strA6 = item.subject.toLowerCase();
                    var strA7 = item.title.toLowerCase();
                    var strA8 = item.creator.toLowerCase();
                    var strA9 = item.publisher.toLowerCase();
                    var strA10 = item.datestamp.toLowerCase();
                    var strA11 = "Medellin";
                    var strA12 = strA11.toLowerCase();
                    var strA13 = item.publisher.toLowerCase();
                    if((strA6.indexOf(textInput.toLowerCase()) != -1 
                    || strA7.indexOf(textInput.toLowerCase()) != -1
                    || strA8.indexOf(textInput.toLowerCase()) != -1
                    || strA9.indexOf(textInput.toLowerCase()) != -1) 
                    && (strA10.indexOf(textInput1.toLowerCase()) != -1)
                    && (strA13.indexOf(strA12) != -1)){
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
                        
                        
                        <Text style={styles.textCard}>Ubicación: {item.coverage}</Text>
                        <View style ={{alignItems: 'center'}}>
                        </View>
                    </Card>  
                        )
                    }
                }else if(textPicker == "titulo_revista" && textPicker1 == "salapatrimonial"){
                    var strA14 = item.subject.toLowerCase();
                    var strA15 = item.title.toLowerCase();
                    var strA16 = item.creator.toLowerCase();
                    var strA17 = item.publisher.toLowerCase();
                    var strA18 = item.datestamp.toLowerCase();
                    var strA19 = "Sala Patrimonial";
                    var strA20 = strA19.toLowerCase();
                    var strA246 = item.publisher.toLowerCase();
                    if((strA14.indexOf(textInput.toLowerCase()) != -1 
                    || strA15.indexOf(textInput.toLowerCase()) != -1
                    || strA16.indexOf(textInput.toLowerCase()) != -1
                    || strA17.indexOf(textInput.toLowerCase()) != -1) 
                    && (strA18.indexOf(textInput1.toLowerCase()) != -1)
                    && (strA246.indexOf(strA20) != -1)){
                        count++;strA12
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
                        
                        
                        <Text style={styles.textCard}>Ubicación: {item.coverage}</Text>
                        <View style ={{alignItems: 'center'}}>
                        </View>
                    </Card>  
                        )
                    }
                }else if(textPicker == "titulo_revista" && textPicker1 == "llanogrande"){
                    var strA247 = item.subject.toLowerCase();
                    var strA248 = item.title.toLowerCase();
                    var strA249 = item.creator.toLowerCase();
                    var strA250 = item.publisher.toLowerCase();
                    var strA251 = item.datestamp.toLowerCase();
                    var strA252 = "Llanogrande";
                    var strA253 = strA252.toLowerCase();
                    var strA254 = item.publisher.toLowerCase();
                    if((strA247.indexOf(textInput.toLowerCase()) != -1 
                    || strA248.indexOf(textInput.toLowerCase()) != -1
                    || strA249.indexOf(textInput.toLowerCase()) != -1
                    || strA250.indexOf(textInput.toLowerCase()) != -1) 
                    && (strA251.indexOf(textInput1.toLowerCase()) != -1)
                    && (strA254.indexOf(strA253) != -1)){
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
                        
                        
                        <Text style={styles.textCard}>Ubicación: {item.coverage}</Text>
                        <View style ={{alignItems: 'center'}}>
                        </View>
                    </Card>  
                        )
                    }
                }else if(textPicker == "titulo_revista" && textPicker1 == "bogota"){
                    var strA255 = item.subject.toLowerCase();
                    var strA256 = item.title.toLowerCase();
                    var strA257 = item.creator.toLowerCase();
                    var strA258 = item.publisher.toLowerCase();
                    var strA259 = item.datestamp.toLowerCase();
                    var strA260 = "Bogota";
                    var strA261 = strA260.toLowerCase();
                    var strA262 = item.publisher.toLowerCase();
                    if((strA255.indexOf(textInput.toLowerCase()) != -1 
                    || strA256.indexOf(textInput.toLowerCase()) != -1
                    || strA257.indexOf(textInput.toLowerCase()) != -1
                    || strA258.indexOf(textInput.toLowerCase()) != -1) 
                    && (strA259.indexOf(textInput1.toLowerCase()) != -1)
                    && (strA262.indexOf(strA261) != -1)){
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
                        
                        
                        <Text style={styles.textCard}>Ubicación: {item.coverage}</Text>
                        <View style ={{alignItems: 'center'}}>
                        </View>
                    </Card>  
                        )
                    }
                }else if(textPicker == "titulo_revista" && textPicker1 == "pereira"){
                    var strA263 = item.subject.toLowerCase();
                    var strA264 = item.title.toLowerCase();
                    var strA265 = item.creator.toLowerCase();
                    var strA266 = item.publisher.toLowerCase();
                    var strA267 = item.datestamp.toLowerCase();
                    var strA268 = "Pereira";
                    var strA269 = strA268.toLowerCase();
                    var strA270 = item.publisher.toLowerCase();
                    if((strA263.indexOf(textInput.toLowerCase()) != -1 
                    || strA264.indexOf(textInput.toLowerCase()) != -1
                    || strA265.indexOf(textInput.toLowerCase()) != -1
                    || strA266.indexOf(textInput.toLowerCase()) != -1) 
                    && (strA267.indexOf(textInput1.toLowerCase()) != -1)
                    && (strA270.indexOf(strA269) != -1)){
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
                        
                        
                        <Text style={styles.textCard}>Ubicación: {item.coverage}</Text>
                        <View style ={{alignItems: 'center'}}>
                        </View>
                    </Card>  
                        )
                    }
                }else if(textPicker == "serie" && textPicker1 == "todas"){
                    var stA1 = item.subject.toLowerCase();
                    var stA2 = item.title.toLowerCase();
                    var stA3 = item.creator.toLowerCase();
                    var stA4 = item.publisher.toLowerCase();
                    var stA5 = item.datestamp.toLowerCase();
                    if((stA1.indexOf(textInput.toLowerCase()) != -1 
                    || stA2.indexOf(textInput.toLowerCase()) != -1
                    || stA3.indexOf(textInput.toLowerCase()) != -1
                    || stA4.indexOf(textInput.toLowerCase()) != -1) 
                    && stA5.indexOf(textInput1.toLowerCase()) != -1){
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
                        
                        
                        <Text style={styles.textCard}>Ubicación: {item.coverage}</Text>
                        <View style ={{alignItems: 'center'}}>
                        </View>
                    </Card>  
                        )
                    }
                }else if(textPicker == "serie" && textPicker1 == "medellin"){
                    var stA6 = item.subject.toLowerCase();
                    var stA7 = item.title.toLowerCase();
                    var stA8 = item.creator.toLowerCase();
                    var stA9 = item.publisher.toLowerCase();
                    var stA10 = item.datestamp.toLowerCase();
                    var stA11 = "Medellin";
                    var stA12 = stA11.toLowerCase();
                    var stA13 = item.publisher.toLowerCase();
                    if((stA6.indexOf(textInput.toLowerCase()) != -1 
                    || stA7.indexOf(textInput.toLowerCase()) != -1
                    || stA8.indexOf(textInput.toLowerCase()) != -1
                    || stA9.indexOf(textInput.toLowerCase()) != -1) 
                    && (stA10.indexOf(textInput1.toLowerCase()) != -1)
                    && (stA13.indexOf(stA12) != -1)){
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
                        
                        <Text style={styles.textCard}>ID Registo: {item.idregistro}</Text>
                        <Text style={styles.textCard}>Ubicación: {item.coverage}</Text>
                        <View style ={{alignItems: 'center'}}>
                        </View>
                    </Card>  
                        )
                    }
                }else if(textPicker == "serie" && textPicker1 == "salapatrimonial"){
                    var stA14 = item.subject.toLowerCase();
                    var stA15 = item.title.toLowerCase();
                    var stA16 = item.creator.toLowerCase();
                    var stA17 = item.publisher.toLowerCase();
                    var stA18 = item.datestamp.toLowerCase();
                    var stA19 = "Sala Patrimonial";
                    var stA20 = stA19.toLowerCase();
                    var stA21 = item.publisher.toLowerCase();
                    if((stA14.indexOf(textInput.toLowerCase()) != -1 
                    || stA15.indexOf(textInput.toLowerCase()) != -1
                    || stA16.indexOf(textInput.toLowerCase()) != -1
                    || stA17.indexOf(textInput.toLowerCase()) != -1) 
                    && (stA18.indexOf(textInput1.toLowerCase()) != -1)
                    && (stA21.indexOf(stA20) != -1)){
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
                        
                        
                        <Text style={styles.textCard}>Ubicación: {item.coverage}</Text>
                        <View style ={{alignItems: 'center'}}>
                        </View>
                    </Card>  
                        )
                    }
                }else if(textPicker == "serie" && textPicker1 == "llanogrande"){
                    var stA22 = item.subject.toLowerCase();
                    var stA23 = item.title.toLowerCase();
                    var stA24 = item.creator.toLowerCase();
                    var stA25 = item.publisher.toLowerCase();
                    var stA26 = item.datestamp.toLowerCase();
                    var stA27 = "Llanogrande";
                    var stA28 = stA27.toLowerCase();
                    var stA29 = item.publisher.toLowerCase();
                    if((stA22.indexOf(textInput.toLowerCase()) != -1 
                    || stA23.indexOf(textInput.toLowerCase()) != -1
                    || stA24.indexOf(textInput.toLowerCase()) != -1
                    || stA25.indexOf(textInput.toLowerCase()) != -1) 
                    && (stA26.indexOf(textInput1.toLowerCase()) != -1)
                    && (stA29.indexOf(stA28) != -1)){
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
                        
                        
                        <Text style={styles.textCard}>Ubicación: {item.coverage}</Text>
                        <View style ={{alignItems: 'center'}}>
                        </View>
                    </Card>  
                        )
                    }
                }else if(textPicker == "serie" && textPicker1 == "bogota"){
                    var stA30 = item.subject.toLowerCase();
                    var stA31 = item.title.toLowerCase();
                    var stA32 = item.creator.toLowerCase();
                    var stA33 = item.publisher.toLowerCase();
                    var stA34 = item.datestamp.toLowerCase();
                    var stA35 = "Bogota";
                    var stA36 = stA35.toLowerCase();
                    var stA37 = item.publisher.toLowerCase();
                    if((stA30.indexOf(textInput.toLowerCase()) != -1 
                    || stA31.indexOf(textInput.toLowerCase()) != -1
                    || stA32.indexOf(textInput.toLowerCase()) != -1
                    || stA33.indexOf(textInput.toLowerCase()) != -1) 
                    && (stA34.indexOf(textInput1.toLowerCase()) != -1)
                    && (stA37.indexOf(stA36) != -1)){
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
                        
                        
                        <Text style={styles.textCard}>Ubicación: {item.coverage}</Text>
                        <View style ={{alignItems: 'center'}}>
                        </View>
                    </Card>  
                        )
                    }
                }else if(textPicker == "serie" && textPicker1 == "pereira"){
                    var stA38 = item.subject.toLowerCase();
                    var stA39 = item.title.toLowerCase();
                    var stA40 = item.creator.toLowerCase();
                    var stA41 = item.publisher.toLowerCase();
                    var stA42 = item.datestamp.toLowerCase();
                    var stA43 = "Pereira";
                    var stA44 = stA43.toLowerCase();
                    var stA45 = item.publisher.toLowerCase();
                    if((stA38.indexOf(textInput.toLowerCase()) != -1 
                    || stA39.indexOf(textInput.toLowerCase()) != -1
                    || stA40.indexOf(textInput.toLowerCase()) != -1
                    || stA41.indexOf(textInput.toLowerCase()) != -1) 
                    && (stA42.indexOf(textInput1.toLowerCase()) != -1)
                    && (stA45.indexOf(stA44) != -1)){
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
                        
                        
                        <Text style={styles.textCard}>Ubicación: {item.coverage}</Text>
                        <View style ={{alignItems: 'center'}}>
                        </View>
                    </Card>  
                        )
                    }
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
            textInput = String(formData.busquedaUno);
            textInput1 = String(formData.fechaEdicion);
            textPicker = formData.busquedaporUno;
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
                          nodefinido: 'Seleccione el filtro de búsqueda',
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
                      <InputField ref='fechaEdicion' 
                      placeholder='Ingrese la fecha de edición'
                      value=''/>
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
                          nodefinido1: 'Seleccione la ubicación',
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