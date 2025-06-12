import { StyleSheet, TextInput } from "react-native"; 
import { themas } from "../../global/themes";
export const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
        backgroundColor: themas.colors.lightGray
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 30,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        marginTop: 15,
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: themas.colors.lightGray,
        borderRadius: 10,
        paddingHorizontal: 10,
        backgroundColor:themas.colors.white
    },
    input:{
        flex: 1,
        height: 40,
         marginRight: 10,
    },
    button: {
        marginTop: 20,
        backgroundColor: "#007bff",
        padding: 10,
        borderRadius: 10,
        alignItems: "center"
    },
    buttonText: {
        color: themas.colors.white,
        fontSize: 16,
        fontWeight:"bold"
    }
})