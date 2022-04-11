import { useState } from "react";
import { View, FlatList, Text } from "react-native";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { Profile } from "../../components/Profile";
import { ListHeader } from '../../components/ListHeader';
import { styles } from "./styles";
import { Appointments } from "../../components/Appointments";
import { ListDivider } from "../../components/ListDivider";
import { Background } from "../../components/Background";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../interfaces/RouteTypes';


type authScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;


export function Home() {
    const [category, setCategory ] = useState('');

    const navigation = useNavigation<authScreenProp>(); 

    const appointments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 ás 20:40h',
            description: 'E hoje que vamos chegar ao challenger sem perder uma partida da md10'
        },
        {
            id: '2',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 ás 20:40h',
            description: 'E hoje que vamos chegar ao challenger sem perder uma partida da md10'
        }
    ]

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    function handleAppointmentDetails() {
        navigation.navigate('AppointmentDetails')
    }

    function handleAppointmentCreate() {
        navigation.navigate('AppointmentCreate')
    }
    return (
        <Background>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd  onPress={handleAppointmentCreate}/>
            </View>
            <CategorySelect
                categorySelected={category}
                setCategory ={handleCategorySelect}
            />
            <ListHeader 
                title='Partidas agendadas'
                subtitle='Total 9'
            />

            <FlatList 
                data={appointments}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Appointments 
                        data={item} 
                        onPress={handleAppointmentDetails}
                    />
                )}
                ItemSeparatorComponent={() => <ListDivider />}
                contentContainerStyle={ { paddingBottom: 69}}
                style={styles.matches}
                showsVerticalScrollIndicator={false}
            />
        </Background>
    )
}