import { View, FlatList} from 'react-native';
import { GuildProps } from '../../components/Guild';
import { Guild } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';

import { styles } from './styles';
type Props = {
    handleGuildSelected: (guild: GuildProps) => void
}

export function Guilds({ handleGuildSelected} : Props){
    const guilds = [
        {
            id: '1',
            name: 'Lendarios',
            icon: null,
            owner: true
        },
        {
            id: '2',
            name: 'Lendarios 2',
            icon: null,
            owner: true
        }
    ]
    return(
        <View style={styles.container}>
            <FlatList 
                data={guilds}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Guild 
                        data={item}
                        onPress={() => handleGuildSelected(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <ListDivider isCentered/>}
                ListHeaderComponent={() => <ListDivider isCentered/>}
                contentContainerStyle={ { paddingBottom: 68, paddingTop: 103}}
                style={styles.guilds}

            />
        </View>
    )
}