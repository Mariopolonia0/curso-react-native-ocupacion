import { Link } from "expo-router";
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    Image,
    Button,
} from "react-native";

export function AddBook() {
    return (
        <View >
            <StatusBar backgroundColor="#000080" />
            <View style={styles.barTitle}>
                <Text style={styles.letraTitulo}>{"Agregar libro"}</Text>
                <Link style={styles.buttonAdd} href="/">
                    Back
                </Link>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonAdd: {
        color: 'white',
        fontSize: 18,
        backgroundColor: "dodgerblue",
        padding: 5,
        marginRight: 5
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
});