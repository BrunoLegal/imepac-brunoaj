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
    listBox:{
        marginBottom: 16, 
        padding: 12, 
        backgroundColor: "#eee", 
        borderRadius: 30 }
});