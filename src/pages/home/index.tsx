import React, {useState} from "react";

import {
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import {style} from "./styles";
import Menu from "../../components/menu";
import { RootStackParamList } from "../AppNavigation";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";

type NavigationProps = DrawerScreenProps<RootStackParamList>;

export default function handleHome() {
    const navigation = useNavigation<NavigationProps["navigation"]>();
    return (
        <View style={style.container}>
            <Menu />
        
            <View style={style.boxMid}>
                <TouchableOpacity style={style.button} onPress={() => navigation.navigate("RegistroReclamacao")}>
                    <Text>Cadastrar Reclamação</Text>
                </TouchableOpacity>
            </View>
            <View style={style.boxBottom}>
                <TouchableOpacity style={style.button} onPress={() => navigation.navigate("ListaReclamacao")}>
                    <Text>Listar Reclamações</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}