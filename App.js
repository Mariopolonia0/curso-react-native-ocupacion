import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
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
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.letraTitulo}
      >{"Lista de libros"}</Text>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        data.map((post) => {
          return (
            <View style={styles.card}>
              <Text>{"Codigo : "+post.bookId}</Text>
              <Text>{post.nombre}</Text>
              <Text>{post.nombreAutor}</Text>
            </View>
          );
        })
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "left",
    justifyContent: "left",
    padding: 25,
  },
  letraTitulo:{
    paddingTop:50,
    paddingBottom: 10
  },
  card: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#D1D1D1",
  },
});