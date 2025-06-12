import {Button, Dimensions, StyleSheet} from 'react-native';
import {themas} from '../../global/themes';

export const style = StyleSheet.create({
    container:{
        flex:1,
        width:"100%",
        paddingTop:0,
        justifyContent: "flex-start",
        backgroundColor:themas.colors.bgColor
    },
    boxTop:{
        paddingTop:30,
        alignItems:"center",
        justifyContent: "center",
        width:"100%"
    },
    boxMid:{
        padding:30,
        width:"100%",
        alignItems:"center",
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