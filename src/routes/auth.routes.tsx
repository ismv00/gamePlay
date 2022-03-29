// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Background } from '../components/Background';

import { Home } from '../screens/Home'
import { SignIn } from '../screens/SignIn';

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
                                backgroundColor: 'transparent'
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
                </Stack.Navigator>
            </NavigationContainer>
        </Background>    
    )
}