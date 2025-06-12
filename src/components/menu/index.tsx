import { useNavigation } from "@react-navigation/native";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { RootStackParamList } from "../../pages/AppNavigation";
import { TouchableOpacity } from "react-native";
import {style } from "./styles";
import {View, Text} from "react-native";

type NavigationProps = DrawerScreenProps<RootStackParamList>;

export default function Menu() {
    const navigation = useNavigation<NavigationProps["navigation"]>();

    return (
        <View style={style.menuContainer}>
            <TouchableOpacity
                
                onPress={() => navigation.navigate("Home")}
            >
                <Text style={style.menuItem}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
                
                onPress={() => navigation.navigate("Login")}
            >
                <Text style={style.menuItem}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                
                onPress={() => navigation.navigate("Cadastro")}
            >
                <Text style={style.menuItem}>Cadastro</Text>
            </TouchableOpacity>
            
        </View>
        
    );
}