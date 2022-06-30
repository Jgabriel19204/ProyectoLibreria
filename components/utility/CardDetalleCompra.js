import { StyleSheet, Button, Text, View} from "react-native";



const CardDetalleCompra = (props) => {
	return (
		<View style={styles.CardStyle}>
			<Text style={styles.Title}>Detalle de la compra</Text>
			<Text style={styles.Atribute}>Id Compra: {props.data.idcompra} </Text>
			<Text style={styles.Atribute}>Id Articulo: {props.data.idarticulo} </Text>
            <Text style={styles.Atribute}>Precio Compra: {props.data.preciocompra} </Text>
			<Text style={styles.Atribute}>Cantidad Compra: {props.data.cantidadcompra} </Text> 		

		</View>
	);
};

export { CardDetalleCompra };

const styles = StyleSheet.create({
	CardStyle: {
		backgroundColor: "#212529",
		// height: "20%",
		padding: 20,
		borderRadius: 10
	},
	Title: {
		color: "#f8f9fa",
		fontSize: 25,
	},
	Atribute: {
		color: "#e9ecef",
		fontSize: 16,
	},
	Resumen: {
		color: "#e9ecef",
		fontSize: 12,
	},button: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 4,
		elevation: 3,
		backgroundColor: 'black',
	  },
	 
});
