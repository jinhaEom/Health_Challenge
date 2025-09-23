import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import LoginScreen from '../screens/Login/LoginScreen';
import {
  NavigationContainer,
  useNavigation,
  useRoute,
  RouteProp,
} from '@react-navigation/native';
import SignUpScreen from '../screens/Login/SignUpScreen';
import SurveyScreen from '../screens/Survey/SurveyScreen';
import ProductDetailScreen from '../screens/Home/ProductDetailScreen';
import BottomTab from './BottomTab';
import BasketScreen from '../screens/Basket/BasketScreen';
import PurchaseScreen from '../screens/Purchase/PurchaseScreen';
const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
  SurveyScreen: undefined;
  MainTabs: undefined;
  ProductDetailScreen: { id: string };
  BasketScreen: undefined;
  PurchaseScreen: {
    items: Array<{ id: number; quantity: number; price: number; name: string }>;
    totalPrice: number;
  };
};

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="SurveyScreen" component={SurveyScreen} />
        <Stack.Screen name="MainTabs" component={BottomTab} />
        <Stack.Screen
          name="ProductDetailScreen"
          component={ProductDetailScreen}
        />
        <Stack.Screen name="BasketScreen" component={BasketScreen} />
        <Stack.Screen name="PurchaseScreen" component={PurchaseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export const useRootNavigation = <
  RouteName extends keyof RootStackParamList,
>() =>
  useNavigation<NativeStackNavigationProp<RootStackParamList, RouteName>>();

export const useRootRoute = <RouteName extends keyof RootStackParamList>() =>
  useRoute<RouteProp<RootStackParamList, RouteName>>();

export default Navigation;
