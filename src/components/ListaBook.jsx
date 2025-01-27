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
                                <Text style={styles.textNombre}>{books.nombre}</Text>
                                <View style={styles.viewPrecio}>
                                    <Text style={styles.textPrecio}>{books.nombreAutor}</Text>
                                    <Text style={styles.textPrecio}>{"$ " + books.precio.toString()}</Text>
                                </View>
                            </View>
                        </StyledPressable>
                    </Link>
                );
            })}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    textNombre: {
        flex: 1,
        fontSize: 18,
        color: "white"
    },
    textPrecio: {
        fontSize: 16,
        color: "white",
        paddingRight:10
    },
    viewPrecio: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
    },
    card: {
        borderRadius: 10,
        padding: 5,
        alignItems: "left",
        margin: 10,
        backgroundColor: "#898989",
        display: "flex",
        flexDirection: 'column',
    }
});