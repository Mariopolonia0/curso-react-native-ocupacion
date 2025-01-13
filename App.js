import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { getBooks } from "./lib/data-api";

const icon = require("./assets/SPIcon.png");

export default function App() {
  const [books, setGames] = useState([]);

  useEffect(() => {
    getBooks().then((books) => {
      setGames(books);
    });
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light"></StatusBar>
      <Image
        source={icon}
        style={{
          width: 100,
          height: 200,
          resizeMode: "center",
        }}
      />
      <Button title="Bueno" onPress={() => alert(books.length)}></Button>

      {books.map((book) => (
        <View key={book.bookId} style={styles.card}>
          <Text>{book.nombre}</Text>
          <Text>{book.nombreAutor}</Text>
        </View>
      ))}
    </View>
  );
}

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
