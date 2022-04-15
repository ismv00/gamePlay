import { ActivityIndicator, Alert, Image, Text, View } from 'react-native';
import { styles } from './styles';

import illustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';

import { Background } from '../../components/Background';
import { useAuth } from '../../hooks/auth';
import { theme } from '../../global/styles/theme';

export function SignIn() {
    const { loading, signIn } = useAuth();

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

                    {
                        loading ? <ActivityIndicator color={theme.colors.primary}/>
                        :
                        <ButtonIcon 
                        title="Entrar com o Discord" 
                        onPress={HandleSignIn}   
                        />
                    }

                </View>
            </View>
        </Background>
    )
}