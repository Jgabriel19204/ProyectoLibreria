import { TabActions } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, ActivityIndicator, TextInput, ScrollView, Button } from "react-native";
import Flatbutton from "../../button/button";
import Flatbutton2 from "../../button/button2";
//Model
import { TblDetalleCompra } from "../../Model/TblDetalleCompra";
//Components
import { CardCompra } from "../utility/CardCompra";
import { CardDetalleCompra } from "../utility/CardDetalleCompra";


class DetalleCompraView extends React.Component {
	constructor(props) {
		super();
		this.props = props
		this.state = {
			isLoading: true,
			Dataset: [],

		};
		this.DetalleCompras = new TblDetalleCompra();
		this.CargarDetalleCompra();
	}
	
	CargarDetalleCompra = async (param = "") => {
		const DetalleCompras = await this.DetalleCompras.Get(param);
		this.setState({
			isLoading: false,
			Dataset: DetalleCompras,
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
				{/* <Text style={styles.Title}>Compras View</Text> */}
				<Flatbutton  text='<- Regresar' onPress={() =>
                this.props.navigation.navigate("Home")}/>
				<TextInput
					style={styles.InputStyle}
					placeholder="Buscar"
					onChangeText={(val) => this.CargarDetalleCompra(val)}
				></TextInput>
				{this.state.isLoading ? (
					<ActivityIndicator />
				) : (
					this.state.Dataset.map((detallecompra) => (
						<CardDetalleCompra key={detallecompra.iddetallecompra} 
						data={detallecompra} />
					))
				)}

			</ScrollView>
			
		);
	}

}
export { DetalleCompraView };

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