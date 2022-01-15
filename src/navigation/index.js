import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../views/screens/login';
import Home from '../views/screens/home';
import User from '../views/screens/user';
import Webview from '../views/screens/webview';

const Stack = createNativeStackNavigator();

export function AppStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName='Login'
        >
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='User' component={User} />
            <Stack.Screen name='Webview' component={Webview} />
        </Stack.Navigator>
    );
}
