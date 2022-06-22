import { TabActions } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, ActivityIndicator, TextInput, ScrollView, Button } from "react-native";
//Components
import { CardDetalleCompra } from "../utility/CardDetalleCompra";


class DetalleCompraView extends React.Component {
	constructor(props) {
		super();
		this.props = props;
		this.state = {
			DetalleComp: this.props.route.params.DetalleComp,
			Dataset: this.props.route.params.Dataset ?? []
		}
	}


	render() {
		return (
			<ScrollView style={styles.Container}>
				<Text style={styles.Title}> Bloques Vista </Text>
				<Flatbutton  text='<- Regresar' onPress={() =>
                this.props.navigation.navigate("CompraView")} />
				{
					this.state.Dataset.map(detalle => {
						return (
						<ScrollView style={styles.Container}>
						<CardDetalleCompra key={detalle.iddetallecompra}
							data={detalle} />
						</ScrollView>)
					})
				}
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
	}, InputStyle: {
		color: "white",
		backgroundColor: "white",
		marginTop: 25,
		padding: 8,
		borderWidth: 2,
		borderRadius: 10,
	}
}
);