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
		TextInput,
		CheckBox
	} from 'react-native'

	class Avanzada extends Component{
		constructor(props){
			super(props);
			this.state = {text: ''};
		}

		render(){
			return(
			<View>
			<View style = {styles.textWithIcon}>
					<Text style = {styles.text}>Búsqueda Avanzada</Text>
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

				<TextInput
					style={styles.text}
					placeholder="Ingrese los términos de búsqueda"
					onChangeText={(text) => this.setState({text})}
				/>

				<Picker
					selectedValue={this.state.language}
					onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}
					defaultValue="y">
					<Picker.Item label= "Y" value= "y" />
					<Picker.Item label= "O" value= "o" />
				</Picker>

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

				<TextInput
					style={styles.text}
					placeholder="Ingrese los términos de búsqueda"
					onChangeText={(text) => this.setState({text})}
				/>

				<Picker
					selectedValue={this.state.language}
					onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}
					defaultValue="y">
					<Picker.Item label= "Y" value= "y" />
					<Picker.Item label= "O" value= "o" />
				</Picker>

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

				<TextInput
					style={styles.text}
					placeholder="Ingrese los términos de búsqueda"
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

					<Text style = {styles.text}>Tipo de material:</Text>
					<Picker
						selectedValue={this.state.language}
						onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}
						defaultValue="todos">
						<Picker.Item label= "Todos" value= "todos" />
						<Picker.Item label= "Artículos" value= "articulos" />
						<Picker.Item label= "Archivos/Documentos Históricos" value= "historicos" />
						<Picker.Item label= "Audiovisuales (películas)" value= "audiovisuales" />
						<Picker.Item label= "CD's (música)" value= "cds" />
						<Picker.Item label= "Catálogos" value= "catalogos" />
						<Picker.Item label= "Casos" value= "casos" />
						<Picker.Item label= "E-reader" value= "e-reader" />
						<Picker.Item label= "Documento" value= "documento" />
						<Picker.Item label= "Folletos" value= "folletos" />
						<Picker.Item label= "Libros" value= "libros" />
						<Picker.Item label= "Mapas" value= "mapas" />
						<Picker.Item label= "Normas" value= "normas" />
						<Picker.Item label= "Partituras/Técnica Musical" value= "partituras" />
						<Picker.Item label= "Proyectos de grado (pregrado)" value= "proyectos" />
						<Picker.Item label= "Referencia" value= "referencia" />
						<Picker.Item label= "Revistas" value= "revistas" />
						<Picker.Item label= "Software" value= "software" />
						<Picker.Item label= "Tesis (maestría/doctorado)" value= "tesis" />
					</Picker>

					<Text style = {styles.text}>Fecha de edición:</Text>
					<TextInput
						style={styles.text}
						placeholder=""
						onChangeText={(text) => this.setState({text})}
					/>

					<Text style = {styles.text}>Ubicación/Sede:</Text>
					<Picker
						selectedValue={this.state.language}
						onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}
						defaultValue="todas">
						<Picker.Item label= "Todas" value= "todas" />
						<Picker.Item label= "Sede Medellín" value= "medellin" />
						<Picker.Item label= "Sede Medellín-Sala Patrimonial" value= "salapatrimonial" />
						<Picker.Item label= "Sede Llanogrande" value= "llanogrande" />
						<Picker.Item label= "Sede Bogotá" value= "bogota" />
						<Picker.Item label= "Sede Pereira" value= "pereira" />
					</Picker>

					<CheckBox
						label='Sólo material de texto completo'
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

export default Avanzada;
