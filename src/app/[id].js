import { View, StyleSheet, ActivityIndicator } from "react-native";
import { useLocalSearchParams, Stack } from "expo-router"
import { useState, useEffect } from "react";
import { RegistroBook } from "../components/RegistroBook";
import { getBooksId } from "../lib/data-api";

export default function PutBook() {

    const { id } = useLocalSearchParams();
    const [bookInfo, setBookInfo] = useState(null)

    useEffect(() => {
        getBooksId(id).then(setBookInfo)
    }, [id]);

    return (
        <View style={styles.ViewMaster}>
            <Stack.Screen
                options={{
                    headerTitle: "Editar Book",
                    headerLeft: () => { },
                    headerRight: () => { }
                }}
            />
            {
                bookInfo == null ? (
                    <ActivityIndicator style={styles.indicator} color={"000080"} size={"large"} />
                ) : (
                    <RegistroBook book={bookInfo} />
                )
            }
        </View >
    )
}

const styles = StyleSheet.create({
    ViewMaster: {
        flex: 1,
    },
    indicator: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});