import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./login/index";
import Cadastro from "./cadastro/index";
import Home from "./home/index";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type RootStackParamList = {
    Login: undefined;
    Cadastro: undefined;
    Home: undefined
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
            </Stack.Navigator>
        </NavigationContainer>
    );
}