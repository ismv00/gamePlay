import { Alert, Image, Text, View } from 'react-native';
import { styles } from './styles';

import illustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';

import { Background } from '../../components/Background';
import { useAuth } from '../../hooks/auth';

export function SignIn() {
    const { user, signIn } = useAuth();

    async function HandleSignIn() {
        try {
            await signIn();
        } catch (error) {
            Alert.alert(error)
        }
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
                        onPress={HandleSignIn}   
                    />
                </View>
            </View>
        </Background>
    )
}