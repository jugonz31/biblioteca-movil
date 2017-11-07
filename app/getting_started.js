import React, { Component } from 'react';
import { AppRegistry, Alert, Modal } from 'react-native';
import AppIntro from 'react-native-app-intro';
import Inicio from './index.js';
 
class GettingStarted extends Component {
  onSkipBtnHandle = (index) => {
      <Inicio/>
  }

  doneBtnHandle = () => {
   
  }

  nextBtnHandle = (index) => {
    
  }
  onSlideChangeHandle = (index, total) => {
    
  }

  render() {
    const pageArray = [{
      title: 'Filtros de búsqueda',
      description: 'Selecciona en el menú lateral el tipo de búsqueda que deseas realizar. ',
      backgroundColor: '#000066',
      fontColor: '#fff',
      level: 0,
    }, {
      title: 'Enlaces de ayuda',
      description: 'Ingrese a la opción:\n \'SINBAD - Catálogo en Linea\' desde el menú de navegación para consultar los diferentes enlaces de interes disponibles.',
      backgroundColor: '#02be93',
      fontColor: '#fff',
      level: 10,
    }];
    return (
      <AppIntro
        onNextBtnClick={this.nextBtnHandle}
        onDoneBtnClick={this.doneBtnHandle}
        onSkipBtnClick={this.onSkipBtnHandle}
        onSlideChange={this.onSlideChangeHandle}
        pageArray={pageArray}
      />
    );
  }
}
 
export default GettingStarted;