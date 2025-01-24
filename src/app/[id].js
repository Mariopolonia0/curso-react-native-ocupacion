import {
    Text,
    View,
    StyleSheet
} from "react-native";
import { Link } from "expo-router"
import { useLocalSearchParams } from "expo-router"

export default function PutBook() {

     const { id } = useLocalSearchParams();
    return (
        <View className="flex-1 justify-center items-center bg-{red}">
            <Text className="text-red font-blod mb-8 text-2xl">Detalle</Text>
            <Link href="/" className="text-blue-500">{id}</Link>
        </View>
    )
}