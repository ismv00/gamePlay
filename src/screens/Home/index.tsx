import { View, Alert } from "react-native";
import { Profile } from "../../components/Profile";
import { styles } from "./styles";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../interfaces/RouteTypes';
import { ButtonIcon } from "../../components/ButtonIcon";

type authScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;


export function Home() {

    const navigation = useNavigation<authScreenProp>();
     
    function handleHome() {
        navigation.navigate('SignIn')
    }
    return (
        <View>
            <View style={styles.header}>
                <Profile />
            </View>

            <ButtonIcon 
                    title="Entrar com o Discord" 
                    activeOpacity={0.7}
                    onPress={handleHome}
            />
            
        </View>
    )
}