import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    menuContainer:{
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "#ddd",
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#aaa",
    },
    menuItem: {
        fontSize: 16,
        fontWeight: "bold",
    },
    menuTitle:{
        fontSize: 20,
        fontWeight: "bold",
        color: themas.colors.primary,
        textAlign: "center",
        marginBottom: 10,
    }
});