import { createStackNavigator } from '@react-navigation/stack';

const StackNavigator = createStackNavigator();

import Home from '../screens/Home';
import Login from '../screens/Login';

export default function RequestStack() {
    return (
        <StackNavigator.Navigator>
            <StackNavigator.Screen name="Home" component={Home} options={
                {
                    headerTitle: 'Home',
                    headerShown: false
                }
            } />
            <StackNavigator.Screen
                name="Login"
                component={Login}
                options={{
                    headerTitle: "Login"
                }}
            />
        </StackNavigator.Navigator>
    );
}