import React, {useState} from "react";
import { 
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity
 } from "react-native";
import {style} from './styles';
import {MaterialIcons} from '@expo/vector-icons'
import Logo from '../../assets/logo-login.png'
import { themas } from "../../global/themes";
export default function Login(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    return(
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image source={Logo}/>
                <Text>Bem Vindo!!!</Text>
            </View>
            <View style={style.boxMid}>
                <Text style={style.title}>Email</Text>
                <View style={style.boxInputEmail}>
                    <TextInput 
                    style={style.input}
                    value = {email}
                    onChangeText={(e) => setEmail(e)}
                    />
                    <MaterialIcons name="email" size={20} color={themas.colors.gray} />
                </View>
                <Text style={style.title}>Coloque sua senha</Text>
                <View style={style.boxInputSenha}>
                    <TextInput 
                    style={style.input}
                    value = {senha}
                    onChangeText={(e) => setSenha(e)}
                    />
                    <MaterialIcons name="password" size={20} color={themas.colors.gray} />
                </View>
            </View>
            <View style={style.boxBottom}>
                <TouchableOpacity style = {style.button}>
                    <Text>Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}