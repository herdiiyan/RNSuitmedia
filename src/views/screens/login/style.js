import { Dimensions, StyleSheet } from "react-native";
import { color, colors } from "../../../utils/Constants";

const { width: WIDTH } = Dimensions.get('window')

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 25
    },
    imageUser: {
        marginTop: 150,
        marginBottom: 50
    },
    input: {
        height: 45,
        margin: 12,
        width: WIDTH - 60,
        borderRadius: 10,
        padding: 10,
        paddingHorizontal: 20,
        backgroundColor: colors.white
    },
    button: {
        height: 45,
        margin: 12,
        width: WIDTH - 60,
        borderRadius: 10,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButton: {
        fontSize: 14,
        color: colors.white
    }
});