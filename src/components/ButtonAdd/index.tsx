import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RectButton, RectButtonProps  } from "react-native-gesture-handler";
import { theme } from '../../global/styles/theme';
 
import { styles } from './styles';

type Props = RectButtonProps;

export function ButtonAdd({...rest} : Props) {
    return(
        <RectButton {...rest}
            style={styles.container}
        >
            <MaterialCommunityIcons 
                name="plus"
                color={theme.colors.heading}
                size={24}
            />
        </RectButton>
    )
}