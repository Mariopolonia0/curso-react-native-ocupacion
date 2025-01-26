import { View, StyleSheet, ActivityIndicator } from "react-native";
import { useLocalSearchParams } from "expo-router"
import { useState, useEffect } from "react";
import { RegistroBook } from "../components/RegistroBook";
import { getBooksId } from "../lib/data-api";
import { ActionBar } from "../components/ActionBar";

export default function PutBook() {

    const { id } = useLocalSearchParams();
    const [bookInfo, setBookInfo] = useState(null)

    useEffect(() => {
        getBooksId(id).then(setBookInfo)
    }, [id]);

    return (
        <View>
            <ActionBar title="Editar book" />
            {
                bookInfo == null ? (
                    <ActivityIndicator style={styles.indicator} color="000080" size="large" />
                ) : (
                    <RegistroBook book={bookInfo} />
                )
            }
        </View >
    )
}

const styles = StyleSheet.create({
    indicator: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});