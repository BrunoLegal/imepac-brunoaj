import React, {useState} from "react";
import { 
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Alert
 } from "react-native";
import {style} from './styles';
import {MaterialIcons} from '@expo/vector-icons'
import Logo from '../../assets/logo-login.png'
import { themas } from "../../global/themes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {RootStackParamList} from "../AppNavigation" 
import { DrawerScreenProps } from "@react-navigation/drawer";


type Props = DrawerScreenProps<RootStackParamList, 'Login'>;



export default function Login({navigation}:Props){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function getLogin(){
        try{
            if(!email || !senha){
                return Alert.alert("Preencha todos os campos");
            }
            //lógica de autenticação
            Alert.alert("Login realizado com sucesso!", "", [
                {text: "OK", onPress: () => navigation.navigate('Home') }
            ]);
        }catch(error){
            console.log("Erro ao fazer login: ", error);
        }
    }
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
                <TouchableOpacity style = {style.button} onPress={getLogin}>
                    <Text>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                    <Text>Não tem uma conta? Cadastre-se</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}