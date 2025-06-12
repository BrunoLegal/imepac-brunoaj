import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./login/index";
import Cadastro from "./cadastro/index";
import Home from "./home/index";
import RegistroReclamacao from "./registro_reclamacao/index";
import ListaReclamacao from "./lista_reclamacao/index";
import FecharReclamacao from "./fechar_reclamacao";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type RootStackParamList = {
    Login: undefined;
    Cadastro: undefined;
    Home: undefined;
    RegistroReclamacao: undefined;
    ListaReclamacao: undefined;
    FecharReclamacao: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Login"
            >
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Cadastro" component={Cadastro} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="RegistroReclamacao" component={RegistroReclamacao} options={{title: "Registro Reclamação"}} />
                <Stack.Screen name="ListaReclamacao" component={ListaReclamacao} options={{title: "Lista Reclamações"}} />
                <Stack.Screen name="FecharReclamacao" component={FecharReclamacao} options={{title: "Fechar Reclamação"}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}