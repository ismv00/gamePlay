// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Background } from '../components/Background';
import { theme } from '../global/styles/theme';

import { Home } from '../screens/Home'
import { SignIn } from '../screens/SignIn';
import { AppointmentDetails } from '../screens/AppointmentDetails';
const Stack = createNativeStackNavigator();

export function AuthRoutes() {
    return (       
        
        <Background>
            <NavigationContainer  independent={true}>
                <Stack.Navigator >
                    <Stack.Screen 
                        name="SignIn"
                        component={SignIn}
                        options={{
                            headerShown: false,
                            contentStyle: {
                                backgroundColor: theme.colors.secondary100
                            }
                        }}
                    />
                    <Stack.Screen 
                        name="Home"
                        component={Home}
                        options={{
                            headerShown: false,
                            contentStyle: {
                                backgroundColor: 'transparent'
                            }
                        }}
                    />

                    <Stack.Screen 
                        name="AppointmentDetails"
                        component={AppointmentDetails}
                        options={{
                            headerShown: false,
                            contentStyle: {
                                backgroundColor: theme.colors.secondary100
                            }
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Background>    
    )
}