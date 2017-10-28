import React, {Component} from 'react'
import{
	Dimensions,
	StyleSheet,
	View,
	Text,
	Button,
	Image,
	ScrollView,
	TouchableHighlight,
	Picker,
	TextInput
} from 'react-native'

class Basica extends Component{

	constructor(props){
		super(props);
		this.state = {text: ''};
	}

    render(){
        return(
		<View>
		<View style = {styles.textWithIcon}>
				<Text style = {styles.text}>Búsqueda básica</Text>
		</View>

		<View style = {styles.textWithIcon}>
			<Text style = {styles.text}>Búsqueda por:</Text>
			<Picker
				selectedValue={this.state.language}
				onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}
				defaultValue="titulo">
				<Picker.Item label= "Todos" value= "todos" />
				<Picker.Item label= "Autor" value= "autor" />
				<Picker.Item label= "Clasificación" value= "clasificacion" />
				<Picker.Item label= "ISBN/ISSN" value= "isbn" />
				<Picker.Item label= "Editorial" value= "editorial" />
				<Picker.Item label= "Tema/Materias" value= "tema" />
				<Picker.Item label= "Título" value= "titulo" />
				<Picker.Item label= "Títulos de Revistas" value= "revistas" />
				<Picker.Item label= "Serie" value= "serie" />
			</Picker>

			<Text style = {styles.text}>Ingrese los términos de búsqueda</Text>
			<TextInput
          		style={styles.text}
          		placeholder=""
          		onChangeText={(text) => this.setState({text})}
        	/>
			<Button
  				onPress={onPressLearnMore}
  				title="Buscar"
  				color="#841584"
  				accessibilityLabel="Ver más..."
			/>
			<Button
  				onPress={onPressLearnMore}
  				title="Borrar"
  				color="#841584"
  				accessibilityLabel="Ver más..."
			/>
		</View>
		
		<View style = {styles.textWithIcon}>
				<Text style = {styles.text}>Limitar material a:</Text>

				<CheckBox
					label='Label'
					checked={true}
					onChange={(checked) => console.log('Confirmado', checked)}
				/>
				<Text style = {styles.text}>Sólo material de texto completo</Text>
		</View>

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
