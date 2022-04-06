import { Alert, Image, Text, View } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../interfaces/RouteTypes';

import illustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';

import { Background } from '../../components/Background';


type authScreenProp = StackNavigationProp<RootStackParamList, 'SignIn'>;

export function SignIn() {

    const navigation = useNavigation<authScreenProp>();
    function HandleTeste() {
        navigation.navigate('Home')
    }

    return (
        <Background>
            <View style={styles.container} >
                
                <Image source={illustrationImg} style={styles.image} resizeMode='stretch' />
                <View style={styles.content}>
                    <Text style={styles.title}>
                        Conecte-se{'\n'}
                        e organize suas {'\n'}
                        jogatinas
                    </Text>

                    <Text style={styles.subtitle}>
                        Crie grupos para jogar seus games {'\n'}
                        favoritos com seus amigos
                    </Text>

                    <ButtonIcon 
                        title="Entrar com o Discord" 
                        onPress={HandleTeste}   
                    />
                </View>
            </View>
        </Background>
    )
}