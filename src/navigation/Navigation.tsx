import React from 'react';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import LoginScreen from '../screens/Login/LoginScreen'
import {
    NavigationContainer,
    useNavigation,
    useRoute,
    RouteProp,
} from '@react-navigation/native';
import SignUpScreen from '../screens/Login/SignUpScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import SurveyScreen from '../screens/Survey/SurveyScreen';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
    LoginScreen: undefined;
    SignUpScreen: undefined;
    HomeScreen: undefined;
    SurveyScreen: undefined;
}

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='LoginScreen'
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name='LoginScreen' component={LoginScreen} />
                <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
                <Stack.Screen name='SurveyScreen' component={SurveyScreen} />
                <Stack.Screen name='HomeScreen' component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export const useRootNavigation = <RouteName extends keyof RootStackParamList>() =>
    useNavigation<NativeStackNavigationProp<RootStackParamList, RouteName>>();

export const useRootRoute = <RouteName extends keyof RootStackParamList>() =>
    useRoute<RouteProp<RootStackParamList, RouteName>>();

export default Navigation;