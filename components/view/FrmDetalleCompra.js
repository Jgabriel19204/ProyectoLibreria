import React from 'react';

import { StyleSheet, Text, Button, View, ActivityIndicator, TextInput, ScrollView } from 'react-native';
import { CardMercancia } from '../utility/FrmMercancia';

import Flatbutton, { } from "../../button/button";

import Flatbutton2, { } from "../../button/button2";
import { TblDetalleCompra } from '../../Model/TblDetalleCompra';

class FrmDetalleCompra extends React.Component {
    constructor(props) {
        super();
		this.props = props;
        this.Detalle = new TblDetalleCompra();
        this.state = {
            Id: "",
            articulo: ""
        }
        this.GuardarDetalleCompra = this.props.route.params.GuardarDetalleCompra;
        this.flag = true;
    }

    GuardarArticulo = async (key, Name) => {
    
        this.setState({
            Id: key,
            articulo: Name
        });

        this.Detalle.idarticulo = key.toString();
    }
    render() {
        return (<ScrollView style={styles.container}>
            <Text style={{ color: "white", alignSelf: "center", fontSize: 25 }}>REGISTRAR DETALLE</Text>
            
            <View style = { styles.Frm }>
           
                <View style = { styles.box_row }>
                    <TextInput style = {styles.InputStyle}
                        placeholder='Articulo'
                        value = { this.state.articulo }
                        disabled />

                    <TextInput style = {styles.subitem_2}
                        placeholder = 'ID'
                        value = { this.state.Id }
                        disabled />

            <Button title = "+" onPress= { async () => {
                this.props.navigation.navigate("ArticulosView", {
                    GuardarArticulo: this.GuardarArticulo ,
                    selecct: true
                });
            }} />
                </View>
            </View>
            
            
            <TextInput style={styles.InputStyle}
                placeholder="Precio Compra"
                multiline
                onChangeText={(val) => this.Detalle.preciocompra = val}>
                </TextInput>
            <TextInput style={styles.InputStyle}
                placeholder="Cantidad Compra"
                multiline
                onChangeText={(val) => this.Detalle.cantidadcompra = val}>
            </TextInput>
            <TextInput style={styles.InputStyle}
                placeholder="Descuento"
                multiline
                onChangeText={(val) => this.Detalle.descuentocompra = val}>
            </TextInput>


            {/* Gjuardar y regresar*/}
            {/* <Button title='Guardar Compra' onPress={() => {
            }}></Button> */}


            <Flatbutton2 text='Finalizar Compra' onPress={async () => {
                await this.GuardarDetalleCompra(this.Detalle); 
            }} />
            <Flatbutton text='Cancelar y Regresar' onPress={() =>
                this.props.navigation.navigate("ArticulosView")} />

        </ScrollView>)
    }
}


export { FrmDetalleCompra }
const styles = StyleSheet.create({
    InputStyle: {
        marginBottom: 4,
        marginTop: 4,
        flex: 1,
        padding: 4,
        margin: 2,  
        borderWidth: 2,
        borderRadius: 5,
        backgroundColor: "white",
    }, container: {
        backgroundColor: "#536878",
    }, Frm: {
        display: 'flex',
        flexDirection: 'column',
        padding: 4,
        marginTop: 4,
        marginBottom: 4,
        marginLeft: 4,
        marginRight: 4,

        borderWidth: 2,
        borderRadius: 4,
        borderColor: "black"
    },
    box_row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },    
    subitem_2: {
        padding: 4,
        margin: 2,
        width: 60,
        backgroundColor: "white",
        borderWidth: 2,
        borderRadius: 5,
        borderColor: "#999"
    },
});