import { View, Text, StyleSheet, Pressable, StatusBar } from "react-native";
import { Link } from "expo-router";
import  MaterialIcons  from '@expo/vector-icons/MaterialIcons';

export function ActionBar({ title, activarButton }) {

    return (
        <View >
            <StatusBar backgroundColor="#000080" />
            <View style={styles.viewActionBar}>
                {
                    activarButton == true ? (
                        <View />
                    ) : (
                        <Link href="/" asChild>
                            <Pressable>
                                <MaterialIcons name="arrow-back" size={25} color="white" />
                            </Pressable>
                        </Link>
                    )
                }
                <Text style={styles.title}> {title} </Text>
                {
                    activarButton == true ? (
                        <Link href="/addBook" asChild>
                            <Pressable>
                                <MaterialIcons name="add-circle" size={35} color="white" />
                            </Pressable>
                        </Link>
                    ) : (
                        <View />
                    )
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewActionBar: {
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#000080",
        padding: 10,
    },
    title: {
        flex: 1,
        fontSize: 20,
        paddingLeft: 20,
        color: "white"
    }
});