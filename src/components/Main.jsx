import { useState, useEffect } from "react";
import { getBooks } from "../lib/data-api";
import { Link } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import { styled } from "nativewind"
import { Logo } from "./Logo";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable
} from "react-native";

const StyledPressable = styled(Pressable)

export function Main() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBooks()
      .then((books) => { setData(books) })
      .finally(() => setLoading(false))
  }, [loading]);

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <ScrollView >{
          data.map((post) => {
            return (
              //asChild es para que reconosca el componente StyledPressable como hijo
              <Link href={`/${post.bookId}`} asChild >
                <StyledPressable className="active:opacity-70 border border-black active:border-white/50 mb-2">
                  <View key={post.bookId} style={styles.card}>
                    <Text>{"Codigo : " + post.bookId}</Text>
                    <Text>{post.nombre}</Text>
                    <Text>{post.nombreAutor}</Text>9722
                    <Text>{"Precio : " + post.precio}</Text>
                  </View>
                </StyledPressable>
              </Link>
            );
          })}
        </ScrollView>
      )}
      <Logo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "beige",
  },
  card: {
    padding: 5,
    alignItems: "left",
    margin: 10,
    backgroundColor: "gray",
    display: "flex",
    flexDirection: 'column',
  }
});