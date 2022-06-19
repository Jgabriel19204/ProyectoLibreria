import React from "react";
import { StyleSheet, Text, View, ActivityIndicator, TextInput, ScrollView, Button } from "react-native";
import Flatbutton from "../../button/button";
//Model
import { TblArticulos } from "../../Model/TblArticulos";
//Components
import { CardArticulo } from "../utility/CardArticulos";


class ArticulosView extends React.Component {
	constructor(props) {
		super();
		this.props = props
		this.state = {
			isLoading: true,
			Dataset: [],

		};
		this.Articulos = new TblArticulos();
		this.CargarArticulos();
	}
	
	CargarArticulos = async (param = "") => {
		const Articulos = await this.Articulos.Get(param);
		this.setState({
			isLoading: false,
			Dataset: Articulos,
		});
	};



	render() {
		/**
		 * parte del mapeo CardCursoComp
		 * this.state.Dataset.map(curso => <CardCursosComp data ={curso} cargar ={this.CargarMatriculados}/>)
		 */
		return (
			// <View style={{ flex: 5 }}>
			<ScrollView style={styles.Container}>	
				<Text style={{color:"white",alignSelf:'center',fontSize:30,fontWeight:150}}>Articulos View</Text>
                {/* <Button title="<- Regresar" onPress={()=>{
				this.props.navigation.navigate("Home");
				}}/> */}
				<Flatbutton  text='<- Regresar' onPress={() =>
                this.props.navigation.navigate("Home")}/>

				<TextInput
					style={styles.InputStyle}
					placeholder="Buscar"
					onChangeText={(val) => this.CargarArticulos(val)}
				></TextInput>
				{this.state.isLoading ? (
					<ActivityIndicator />
				) : (
					this.state.Dataset.map((articulo) => (
						<CardArticulo key={articulo.idarticulo} 
						data={articulo} />
					))
				)}

			</ScrollView>
		);
	}

}
export { ArticulosView };

const styles = StyleSheet.create({

	Title: {
		color: "#fff",
		fontSize: 26,
        backgroundColor: "#212529",
	},
	Container: {
        backgroundColor: "#536878",
    },InputStyle: {
		color: "white",
        backgroundColor:"white",
        marginTop: 25,
		padding:8,
        borderWidth: 2,
        borderRadius: 10,
	}

    }
);