import { Dimensions, StyleSheet } from "react-native";
import { color, colors } from "../../../utils/Constants";

const { width: WIDTH } = Dimensions.get('window')

export const styles = StyleSheet.create({
    welcome: {
        marginHorizontal: 25,
        marginTop: 25
    },
    welcomeText: {
        fontSize: 12,
        color: colors.black
    },
    nameText: {
        fontSize: 18,
        color: colors.dark
    },
    content: {
        alignItems: 'center',
        marginTop: 80,
    },
    image: {
        backgroundColor: 'red'
    },
    imageUser: {
        width: 150,
        height: 150,
        borderRadius: 100,
        resizeMode: 'contain'
    },
    text: {
        marginVertical: 25,
        fontSize: 18,
        color: colors.gray
    },
    button: {
        marginBottom: 30,
        marginHorizontal: 25,
        height: 40,
        borderRadius: 12,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButton: {
        color: colors.white,
        fontSize: 14
    },
    textName: {
        marginVertical: 5,
        marginTop: 50,
        fontSize: 24,
        color: colors.darkGray
    },
    textEmail: {
        marginVertical: 5,
        fontSize: 18,
        color: colors.darkGray
    },
    textWebsite: {
        marginVertical: 5,
        fontSize: 18,
        color: colors.primary
    }
});
