import { Stack } from "expo-router";
import { View, Text, StyleSheet, Pressable, StatusBar } from "react-native";
import { Link } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Layout() {
    return (
        <Stack
            screenOptions={{
                headerStyle: { backgroundColor: "#000080" },
                headerTintColor: "white",
                headerTitle: "Lista Book",
                headerLeft: () => <View />,
                headerRight: () => (
                    <View >
                        <StatusBar backgroundColor="#000080" />
                        <Link href="/addBook" asChild>
                            <Pressable>
                                <Ionicons name="add-circle" size={40} color="white" />
                            </Pressable>
                        </Link>
                    </View>
                )
            }}>
        </Stack>
    )
}