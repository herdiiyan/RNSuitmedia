import { Dimensions, StyleSheet } from "react-native";
import { color, colors } from "../../../utils/Constants";

const { width: WIDTH, height: HIGHT } = Dimensions.get('window')

export const styles = StyleSheet.create({
    container: { 
        transform: [{ scaleY: 1 }]
    },
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    flatList: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderBottomWidth: 0.2,
        marginHorizontal: 25,
        marginVertical: 5,
        borderBottomColor: colors.gray,
    },
    image: {
        // backgroundColor: 'red',
        marginHorizontal: 18,
        marginVertical: 5,
        marginBottom: 15,
        width: 60,
        height: 60
    },
    imageUser: {
        resizeMode: 'contain',
        width: 60,
        height: 60,
        borderRadius: 100
    },
    data: {
        height: 45,
        width: WIDTH / 2,
        // backgroundColor: 'yellow'
    },
    name: {
        marginBottom: 5,
        fontSize: 16,
        color: colors.dark
    },
    email: {
        fontSize: 10,
        color: colors.dark
    }
});