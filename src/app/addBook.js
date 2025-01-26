import {View} from "react-native";
import {RegistroBook} from "../components/RegistroBook";
import { ActionBar } from "../components/ActionBar";


export default function addBook() {
    return (
        <View>
            <ActionBar title="New book" />
            <RegistroBook />
        </View >
    )
}