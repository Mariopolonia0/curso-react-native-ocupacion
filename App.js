import React,{useState, useEffect} from 'react';
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
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        
        data.map((post) => {
          return (
            <View>
              <Text style={styles.title}>{post.title}</Text>
              <Text>{post.bookId}</Text>
              <Text>{post.nombre}</Text>
              <Text>{post.nombreAutor}</Text>
            </View>
          );
        })
      )}
    </View>
);}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    marginBottom: 10,
    backgroundColor: "#060",
  },
});

  /* <View style={styles.container}>
      <StatusBar style="light"></StatusBar>

      <Image
        source={icon}
        style={{
          width: 100,
          height: 200,
          resizeMode: "center",
        }}
      />
      <View>
        <Text>{"HOLA :" + book}</Text>
      </View>
      <Button
        title="Bueno"
        onPress={() => {
          apiCall;
        }}
      ></Button>
    </View>
  );*/
/*
  {books.map((book) => (
        <View key={book.bookId} style={styles.card}>
          <Text>{book.nombre}</Text>
          <Text>{book.nombreAutor}</Text>
        </View>
      ))}

*/