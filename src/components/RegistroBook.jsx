import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Button,
    Pressable,
    Alert
} from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { deleteBook, postBook, putBook } from "../lib/data-api";

export function RegistroBook({ book }) {
    const [bookId, onChangeBookId] = React.useState('0');
    const [nombre, onChangeNombre] = React.useState('');
    const [nombreAutor, onChangeNombreAutor] = React.useState('');
    const [edicion, onChangeEdicion] = React.useState('');
    const [precio, onChangePrecio] = React.useState('0');

    useEffect(() => {
        if (book != null) {
            onChangeBookId(book.bookId.toString())
            onChangeNombre(book.nombre)
            onChangeNombreAutor(book.nombreAutor)
            onChangeEdicion(book.edicion)
            onChangePrecio(book.precio.toString())
        }
    }, []);

    const nuevo = () => {
        onChangeBookId('0')
        onChangeNombre("")
        onChangeNombreAutor("")
        onChangeEdicion("")
        onChangePrecio("0")
    }

    function guardarData() {

        if (bookId == 0) {
            postBook(nombre, nombreAutor, edicion, precio)
                .then((response) => {
                    if (response.ok == true)
                        alert("Se guardo el libro")
                    else
                        alert("No se guardo el libro")
                })
        } else {
            putBook(bookId, nombre, nombreAutor, edicion, precio)
                .then((response) => {
                    if (response.ok == true)
                        alert("Se guardo el libro")
                    else
                        alert("No se guardo el libro")
                })
        }

    }

    const eliminar = () => {
        Alert.alert('Eliminar Libro', 'se eliminara el libro con Id :' + bookId, [
            {
                text: "cancelar",
                onPress: () => { console.log('OK Pressed') },
                style: 'cancelar'
            },
            {
                text: 'Yes',
                onPress: () => {
                    deleteBook(bookId)
                        .then((resp) => {
                            if (resp.ok == true) {
                                nuevo()
                                alert("Se elimino el libro")
                            }
                            else
                                alert("No se elimino el libro")
                        })
                }
            },
        ]);
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
                <Pressable onPress={nuevo} >
                    <MaterialIcons name="fiber-new" size={50} color="#000080" paddingRight="10" />
                </Pressable>

                <Pressable onPress={guardarData}>
                    <MaterialIcons name="save" size={50} color="#000080" paddingRight="10" />
                </Pressable>

                <Pressable onPress={eliminar} >
                    <MaterialIcons name="delete" size={50} color="#000080" />
                </Pressable>
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