import { Image, Text, View, StatusBar } from 'react-native';
import { styles } from './style';

import illustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';

export function SignIn() { //usar sem o export default para que seja possivel desestrutrar a improtacao no outro arquivo
    return (
        <View style={styles.container} >
            <StatusBar 
                barStyle='light-content' 
                backgroundColor='transparente'
                translucent
            />
            <Image source={illustrationImg} style={styles.image} resizeMode='stretch' />
            <View style={styles.content}>
                <Text style={styles.title}>
                    Organize{`\n`}
                    suas jogatinas{`\n`}
                    facilmente
                </Text>

                <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games {`\n`}
                    favoritos com seus amigos
                </Text>

                <ButtonIcon 
                    title="Entrar com o Discord" 
                    activeOpacity={0.7}
                />
            </View>
        </View>
    )
}