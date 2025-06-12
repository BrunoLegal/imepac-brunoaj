import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    container:{
        flex:1,
        width:"100%",
        paddingTop:0,
        justifyContent:"flex-start",
        backgroundColor:themas.colors.bgColor
    },
    title:{
        paddingTop: 20,
        fontSize: 20,
    },
    
    boxBottom:{
        alignItems:"center",
        paddingTop: 30,
        height:Dimensions.get("window").height/3,
        width:"100%"
    },
    button:{
        width:200,
        height:40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        backgroundColor: themas.colors.primary,
    },

    mainContent:{
        flex: 1,
        padding: 20,
        width: "90%",
        alignSelf: "center",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: themas.colors.lightGray
    },

    boxInput:{
        width: "100%",
        height: "auto" ,
        backgroundColor: themas.colors.white,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 10,
        flexDirection: "row",
        alignItems: "center",
    },

    


});