import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Pressable
} from "react-native";
import { Link } from "expo-router";
import { styled } from "nativewind"

export function ListaBook({ books }) {
    const StyledPressable = styled(Pressable)
    
    return (
        <ScrollView >{
            books.map((books) => {
                return (
                    //asChild es para que reconosca el componente StyledPressable como hijo
                    <Link key={books.bookId} href={`/${books.bookId}`} asChild >
                        <StyledPressable >
                            <View style={styles.card}>
                                <Text>{"Codigo : " + books.bookId.toString()}</Text>
                                <Text>{books.nombre}</Text>
                                <Text>{books.nombreAutor}</Text>
                                <Text>{"Precio : " + books.precio.toString()}</Text>
                            </View>
                        </StyledPressable>
                    </Link>
                );
            })}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    card: {
        padding: 5,
        alignItems: "left",
        margin: 10,
        backgroundColor: "gray",
        display: "flex",
        flexDirection: 'column',
    }
});