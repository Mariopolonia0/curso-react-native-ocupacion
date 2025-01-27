import { useState, useEffect } from "react";
import { getBooks } from "../lib/data-api";
import { Logo } from "./Logo";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { ActionBar } from "./ActionBar";
import { ListaBook } from "./ListaBook";

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
      <ActionBar title={"List Book"} activarButton={true} />
      {
        loading ? (
          <ActivityIndicator style={styles.indicator} color="#000080" size="large" />
        ) : (
          <ListaBook books={data} />
        )
      }
      <Logo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dddddd",
  },
  indicator: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});