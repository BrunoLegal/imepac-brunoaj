import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    container:{
        flex:1,
        width:"100%",
        paddingTop:50,
        justifyContent:"center",
        backgroundColor:themas.colors.bgColor
    },
    title:{
        marginLeft: 40,
    },
    boxTop:{
        alignItems:"center",
        justifyContent: "center",
        height:Dimensions.get("window").height/3,
        width:"100%"
    },
    boxMid:{
        height:Dimensions.get("window").height/3,
        width:"100%",
        marginLeft:20
    },
    boxBottom:{
        alignItems:"center",
        height:Dimensions.get("window").height/3,
        width:"100%"
    },
    boxInput:{
        backgroundColor: themas.colors.white,
        marginRight:40
    },
    boxInputEmail:{
        width:"90%",
        height:40,
        backgroundColor:themas.colors.bgColor,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    boxInputSenha:{
        width:"90%",
        height:40,
        backgroundColor:themas.colors.bgColor,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:10,
    },
    input:{
        borderRadius:40,
        height:'100%',
        width:"90%",
        backgroundColor:themas.colors.lightGray,
    },
    button:{
        width:200,
        height:40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        backgroundColor: themas.colors.primary,
    }
})