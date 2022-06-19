import { StyleSheet, Button, Text, View} from "react-native";



const CardArticulo = (props) => {
	return (
		<View style={styles.CardStyle}>
			<Text style={styles.Title}>ARTICULOS</Text>
			<Text style={styles.Atribute}>Nombre: {props.data.nombrearticulo} </Text>
			{/* <Text style={styles.Atribute}>Fecha: {props.data.FechaCreacion} </Text> */}

			<Button 
				title="Ver Detalle"
				color="#168aad"

			></Button>
		
		

		</View>
	);
};

export { CardArticulo };

const styles = StyleSheet.create({
	CardStyle: {
		backgroundColor: "#212529",
		// height: "20%",
		padding: 20,
		margin: 15,
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
