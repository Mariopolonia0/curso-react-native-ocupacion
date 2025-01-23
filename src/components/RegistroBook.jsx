import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Button
} from "react-native";

import { postBook } from "../lib/data-api";

export function RegistroBook() {
    const [nombre, onChangeNombre] = React.useState('');
    const [nombreAutor, onChangeNombreAutor] = React.useState('');
    const [edicion, onChangeEdicion] = React.useState('');
    const [precio, onChangePrecio] = React.useState('');

    const nuevo = () => {
        onChangeNombre("")
        onChangeNombreAutor("")
        onChangeEdicion("")
        onChangePrecio("")
    }
    // .then((books) => { setData(books) })
    function guardarData() {
        postBook(nombre, nombreAutor, edicion, precio)
            .then((response) => {
                if (response.ok == true)
                    alert("Se guardo el libro")
                else
                    alert("No se guardo el libro")
            })
    }

    const eliminar = () => {
        alert("cancelar")
    }

    return (
        <View >
            <Text style={styles.text} >Nombre</Text>
            <TextInput
                style={styles.input}
                mode='outlined'
                onChangeText={onChangeNombre}
                value={nombre} />

            <Text style={styles.text}>Nombre Autor</Text>
            <TextInput
                style={styles.input}
                mode='outlined'
                onChangeText={onChangeNombreAutor}
                value={nombreAutor} />

            <Text style={styles.text}>Edicion</Text>
            <TextInput
                style={styles.input}
                mode='outlined'
                onChangeText={onChangeEdicion}
                value={edicion} />

            <Text style={styles.text} >Precio</Text>
            <TextInput
                style={styles.input}
                mode='outlined'
                keyboardType="numeric"
                onChangeText={onChangePrecio}
                value={precio} />

            <View style={styles.cardButton}>
                <Button
                    title="Nuevo"
                    onPress={nuevo}>
                </Button>

                <Button
                    title="Guardar"
                    onPress={guardarData}>
                </Button>

                <Button
                    title="Eliminar"
                    onPress={eliminar}>
                </Button>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    text: {
        fontSize: 16,
        paddingTop: 10,
        paddingLeft: 10
    },
    cardButton: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-around",
        paddingTop: 25
    }
});