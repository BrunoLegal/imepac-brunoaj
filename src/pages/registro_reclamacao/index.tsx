import React, {useState} from "react";
import{
    Text,
    View,
    TextInput,
    Button,
    TouchableOpacity,
    Alert
} from "react-native";
import {style} from "./styles";
import Menu from "../../components/menu";
import {MaterialIcons} from "@expo/vector-icons";
import { RootStackParamList } from "../AppNavigation";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { themas } from "../../global/themes";

type Props = DrawerScreenProps<RootStackParamList>;

export default function RegistroReclamacao({navigation}: Props) {
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");

    function handleRegistro() {
        try {
            if (!titulo || !descricao) {
                return Alert.alert("Preencha todos os campos");
            }
            Alert.alert("Reclamação registrada com sucesso!", "", [
                { text: "OK", onPress: () => navigation.navigate('Home') }
            ]);
        } catch (error) {
            console.log("Erro ao registrar reclamação: ", error);
        }
    }

    return (
        <View style={style.container}>
            <Menu />
            <View style={style.mainContent}>
                <Text style={style.title}>Registro de Reclamação</Text>
            
                {/* Campo Título */}
                <Text style={style.title}>Título</Text>
                <View style={style.boxInput}>
                    <MaterialIcons name="title" size={20} color="gray" />
                    <TextInput
                        multiline={false}
                        value={titulo}
                        onChangeText={(text) => setTitulo(text)}
                        placeholder="Digite o título da reclamação"
                    />
                    
                </View>

                {/* Campo Descrição */}
                <Text style={style.title}>Descrição</Text>
                <View style={style.boxInput}>
                    <MaterialIcons name="description" size={20} color="gray" />
                    <TextInput
                        multiline={true}
                        value={descricao}
                        onChangeText={(text) => setDescricao(text)}
                        placeholder="Descreva sua reclamação"
                    />
                    
                </View>
                <View style={style.boxBottom}>
                {/* Botão Registrar Reclamação */}
                <TouchableOpacity style={style.button} onPress={handleRegistro}>
                    <Text>Registrar Reclamação</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}