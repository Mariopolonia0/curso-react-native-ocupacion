import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ActionBar,
  Image,
  Button,
} from "react-native";

//"https://controltarea.azurewebsites.net/api/Books"

const icon = require("./assets/SPIcon.png");
const url = "https://controltarea.azurewebsites.net/api/Books";

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [loading]);

  return (

    <View style={styles.container}>
      <StatusBar backgroundColor="#000080" />
      <View style={styles.barTitle}>
        <Text style={styles.letraTitulo}>{"Lista de libros"}</Text>
        <Button style={styles.button} title="New Book" onPress={() => alert('hola')} />
      </View>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        data.map((post) => {
          return (
            <View key={post.bookId} style={styles.card}>
              <Text>{"Codigo : " + post.bookId}</Text>
              <Text>{post.nombre}</Text>
              <Text>{post.nombreAutor}</Text>
              <Text>{"Precio : " + post.precio}</Text>
            </View>
          );
        })
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
  button: {
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