import {
    StyleSheet,
    View,
    Image,
} from "react-native";

const icon = require("../resources/SPIcon.png");

export function Logo() {
    return (
        <View style={styles.containerImage}>
            <Image
                source={icon}
                style={styles.image}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    containerImage: {
        display: "flex",
        alignItems: "center",
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: "center",
        padding: 5,
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
    }
});