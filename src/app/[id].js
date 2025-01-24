import {
    Text,
    View,
    StyleSheet, Pressable
} from "react-native";
import { Link } from "expo-router"
import { useLocalSearchParams } from "expo-router"
import { Stack } from "expo-router"
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { AddBook } from "../components/AddBook";


export default function PutBook() {

    const { id } = useLocalSearchParams();
    return (
        <View>
            <Stack.Screen
                options={{
                    headerTitle: "Editar Book",
                    headerLeft: () => { },
                    headerRight: () => {}
                }}
            />
            <AddBook />
        </View >
    )
}

const styles = StyleSheet.create({

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