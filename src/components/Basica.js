import React, {Component} from 'react'
import{
	Dimensions,
	StyleSheet,
	View,
	Text,
	Image,
	ScrollView,
	TouchableHighlight,
	Picker
} from 'react-native'

class Basica extends Component{
    render(){
        return(
	
		<View style = {styles.textWithIcon}>
				<Text style = {styles.text}>Búsqueda básica</Text>
		</View>

		<View style = {styles.textWithIcon}>
			<Text style = {styles.text}>Búsqueda por:</Text>
			<Picker
  				selectedValue={this.state.language}
  				onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
  				<Picker.Item label= "Todos" value= "-" />
  				<Picker.Item label= "Autor" value= "-" />
				<Picker.Item label= "Clasificación" value= "-" />
				<Picker.Item label= "ISBN/ISSN" value= "-" />
				<Picker.Item label= "Editorial" value= "-" />
				<Picker.Item label= "Tema/Materias" value= "-" />
				<Picker.Item label= "Título" value= "-" />
				<Picker.Item label= "Títulos de Revistas" value= "-" />
				<Picker.Item label= "Serie" value= "-" />
			</Picker>
		</View>


        )
    }
}

const styles = StyleSheet.create({
	menu: {
		flex: 1,
		width: width,
		height: height,
		backgroundColor: "#000066"
	},
	text: {
		color: 'black',
		fontSize: 20
	},
	textWithIcon: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 20,
		borderColor: 'black',
		borderBottomWidth: 3
	}
})

export default Basica
