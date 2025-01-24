import React, { useState, useEffect } from "react";
import { getBooks } from "../lib/data-api";
import { Link } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import { styled } from "nativewind"
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
  Pressable
} from "react-native";

const icon = require("../resources/SPIcon.png");
const StyledPressable = styled(Pressable)

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
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <ScrollView >{
          data.map((post) => {
            return (
              //asChild es para que reconosca el componente StyledPressable como hijo
              <Link href={`/${post}`} asChild >
                <StyledPressable className="active:opacity-70 border border-black active:border-white/50 mb-2">
                  <View key={post.bookId} style={styles.card}>
                    <Text>{"Codigo : " + post.bookId}</Text>
                    <Text>{post.nombre}</Text>
                    <Text>{post.nombreAutor}</Text>
                    <Text>{"Precio : " + post.precio}</Text>
                  </View>
                </StyledPressable>
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
    marginRight: 10
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