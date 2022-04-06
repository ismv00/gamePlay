import { ImageBackground, Text, View } from "react-native";
import { Background } from "../../components/Background";
import { Fontisto } from "@expo/vector-icons";
import { BorderlessButton, FlatList } from "react-native-gesture-handler";
import { Header } from "../../components/Header";
import { theme } from "../../global/styles/theme";
import BannerImg  from '../../assets/banner.png';
import { styles } from './styles';
import { ListHeader } from "../../components/ListHeader";
import { Member } from "../../components/Member";
import { ListDivider } from "../../components/ListDivider";

export function AppointmentDetails(){

    const members =[
        {
            id: '1',
            username: 'Igor',
            avatar_url: 'https://github.com/ismv00.png',
            status: 'OnLine'
        },
        {
            id: '2',
            username: 'Igor',
            avatar_url: 'https://github.com/ismv00.png',
            status: 'OffLine'
        }
    ]
    return(
        <Background>
            <Header 
                title='Detalhes'
                action={
                    <BorderlessButton>
                        <Fontisto 
                            name="share"
                            size={24}
                            color={theme.colors.primary}
                        />
                    </BorderlessButton>
                }
            />

            <ImageBackground 
                source={BannerImg}
                style={styles.banner}
                resizeMode="cover"
            >
                <View style={styles.bannerContent}>
                    <Text 
                        style={styles.title}
                    >
                        Lendários
                    </Text>
                    <Text
                        style={styles.subtitle}
                    >
                        É hoje que vamos chegar ao challenger sem perder uma partida md10
                    </Text>
                </View>
                
            </ImageBackground>

            <ListHeader 
                title='Jogadores'
                subtitle='Total 3'
            />

            <FlatList 
                data={members}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Member data={item} />
                )}
                ItemSeparatorComponent={() => <ListDivider />}
            />
        </Background>
    )
}