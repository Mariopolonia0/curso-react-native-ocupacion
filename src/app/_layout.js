import { Stack } from "expo-router";
import { View, Text, StyleSheet, Pressable, StatusBar } from "react-native";
import { Link } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Layout() {
    return (
        <Stack
            screenOptions={{
                headerStyle: { backgroundColor: "#000080" },
                headerTintColor: "yellow",
                headerTitle: "Lista Book",
                headerLeft: () => <View />,
                headerRight: () => (
                    <View style={styles.barTitle}>
                        <StatusBar backgroundColor="#000080" />
                        <Link href="/addBook" asChild>
                            <Pressable style={styles.buttonAdd}>
                                <Ionicons name="add-circle" size={40} color="white" />
                            </Pressable>
                        </Link>
                    </View>
                )
            }}>
        </Stack>
    )
}

/*
   <StatusBar backgroundColor="#000080" />
       <View style={styles.barTitle}>
         <Text style={styles.letraTitulo}>{"Lista de libros"}</Text>
         <Link href="/addBook" asChild>
           <Pressable style={styles.buttonAdd}>
             <Ionicons name="add-circle" size={40} color="white" />
           </Pressable>
         </Link>
       </View>
 */


const styles = StyleSheet.create({
    buttonAdd: {
        color: 'white',
        fontSize: 18,

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

/**
 * 
 * 
 * 
 * 
 *  <View >
             <View style={styles.barTitle}>
                 <StatusBar backgroundColor="#000080" />
                 <Text style={styles.letraTitulo}>{"Agregar libro"}</Text>
                 <Link style={styles.buttonAdd} href="/">
                     Back
                 </Link>
             </View>
         </View>
 * 
 */