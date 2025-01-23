import React, { useState, useEffect } from "react";
import { getBooks } from "../lib/data-api";
import { Link } from "expo-router";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ActionBar,
  Image,
  Button,
  ScrollView,
} from "react-native";

const icon = require("../resources/SPIcon.png");

export function Main() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBooks()
      .then((books) => { setData(books) })
      .finally(() => setLoading(false))
  }, [loading]);
  //<Button style={styles.button} title="New Book" onPress={() =>  } />
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#000080" />
      <View style={styles.barTitle}>
        <Text style={styles.letraTitulo}>{"Lista de libros"}</Text>
        <Link style={styles.buttonAdd} href="/addBook">
          Add
        </Link>
      </View>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <ScrollView >{
          data.map((post) => {
            return (
              //asChild es para que reconosca el componente View como hijo
              <Link href= asChild>
                <View key={post.bookId} style={styles.card}>
                  <Text>{"Codigo : " + post.bookId}</Text>
                  <Text>{post.nombre}</Text>
                  <Text>{post.nombreAutor}</Text>
                  <Text>{"Precio : " + post.precio}</Text>
                </View>
              </Link>

            );
          })}
        </ScrollView>

      )}
      <View style={styles.containerImage}>
        <Image
          source={icon}
          style={styles.image}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "beige",
  },
  buttonAdd: {
    color: 'white',
    fontSize: 18,
    backgroundColor: "dodgerblue",
    padding: 5,
    marginRight: 5
  },
  containerImage: {
    display: "flex",
    alignItems: "center",
  },
  barTitle: {
    backgroundColor: "#010080",
    display: "flex",
    flexDirection: 'row',
    justifyContent: "space-between",
    padding: 5,
    alignItems: "center",
  },
  letraTitulo: {
    padding: 10,
    color: 'white',
    fontSize: 24,

  },
  card: {
    padding: 5,
    alignItems: "left",
    margin: 10,
    backgroundColor: "gray",
    display: "flex",
    flexDirection: 'column',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "center",
    padding: 5,
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  }
});