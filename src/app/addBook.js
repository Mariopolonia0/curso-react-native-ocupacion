import { AddBook } from "../components/AddBook"

import {
    Text,
    View,
    StyleSheet, Pressable, Button
} from "react-native";
import { Link } from "expo-router"
import { useLocalSearchParams } from "expo-router"
import { Stack } from "expo-router"
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

//onPress={() => onPressLetter(index)}

export default function addBook() {
    return (
        <View>
            <Stack.Screen
                options={{
                    headerTitle: "New Book",
                    headerLeft: () => { },
                    headerRight: () => { }
                }}
            />
            < AddBook />
        </View >
    )
}