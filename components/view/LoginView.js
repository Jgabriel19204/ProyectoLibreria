import { StyleSheet, Text, View, Button } from "react-native";
import Flatbutton5 from "../../button/buttonlogin";
const LoginView = (props) => {
	return (
		<View style={styles.container}>
			<Text style={styles.Title}>LIBRERIA MARIA AUXILIADORA</Text>
            <View styles ={styles.OptionContainer}>
               <Flatbutton5 text="LOGIN IN" onPress={()=>{
                    props.navigation.navigate('Home')
               }}
               />
            </View>
		</View>
	);
};

export { LoginView };

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#536878",
		padding: 20,
	},
	Title: {
        flex: 1,
		color: "#f8f9fa",
		fontSize: 19,
        justifyContent: "center"
	},
    OptionContainer: {
        flex: 3

    }   
});
