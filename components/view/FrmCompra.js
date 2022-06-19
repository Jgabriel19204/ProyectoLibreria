import React from 'react';

import { StyleSheet, Text, Button, View, ActivityIndicator, TextInput, ScrollView } from 'react-native';
import { CardMercancia } from '../utility/FrmMercancia';

import Flatbutton, { } from "../../button/button";

import Flatbutton2, { } from "../../button/button2";

class FrmCompra extends React.Component {
    constructor(props) {
        super();
        this.state = {}

    }
    render() {
        return (<ScrollView style={styles.container}>
            <Text style={{ color: "white", alignSelf: "center", fontSize: 25 }}>REGISTRAR COMPRAS</Text>
            <TextInput style={styles.InputStyle}
                placeholder="id Compra"
                onChangeText ></TextInput>
            <TextInput style={styles.InputStyle}
                placeholder="Fecha de Compra"
                multiline
                numberOfLines={1}
                onChangeText ></TextInput>
            <TextInput style={styles.InputStyle}
                placeholder="IdUsuario"
                multiline
                numberOfLines={1}
                onChangeText ></TextInput>
            <TextInput style={styles.InputStyle}
                placeholder="Sub Total"
                multiline
                numberOfLines={1}
                onChangeText ></TextInput>
            <TextInput style={styles.InputStyle}
                placeholder="Iva"
                multiline
                numberOfLines={1}
                onChangeText ></TextInput>
            <TextInput style={styles.InputStyle}
                placeholder="Descuento"
                multiline
                numberOfLines={1}
                onChangeText ></TextInput>
            <TextInput style={styles.InputStyle}
                placeholder="Total Compra"
                multiline
                numberOfLines={1}
                onChangeText ></TextInput>
            <TextInput style={styles.InputStyle}
                placeholder="id Proveedor"
                multiline
                numberOfLines={1}
                onChangeText ></TextInput>


            {/* Gjuardar y regresar*/}
            {/* <Button title='Guardar Compra' onPress={() => {
            }}></Button> */}


            <Flatbutton2 text='Guardar compra' onPress={() => { }} ></Flatbutton2>


            <Flatbutton text='Cancelar y Regresar' onPress={() =>
                this.props.navigation.navigate("Home")} />

        </ScrollView>)
    }
}


export { FrmCompra }
const styles = StyleSheet.create({
    InputStyle: {
        padding: 10,
        paddingLeft: 10,
        color: "white",

        backgroundColor: "white",
        margin: 10,
        borderWidth: 2,
        borderRadius: 10,
        marginLeft: 30
    }, container: {
        backgroundColor: "#536878",
    },
});