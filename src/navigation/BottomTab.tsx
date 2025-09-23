import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import HomeScreen from '../screens/Home/HomeScreen';
import MyProfileScreen from '../screens/Profile/MyProfileScreen';
import OrderListScreen from '../screens/Order/OrderListScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export type BottomTabParamList = {
  Home: undefined;
  OrderList: undefined;
  MyProfile: undefined;
};

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#3B82F6',
        tabBarInactiveTintColor: '#6B7280',
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopWidth: 1,
          borderTopColor: '#E5E7EB',
          paddingBottom: 5,
          paddingTop: 5,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
        animation:'shift',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: '홈',
          tabBarIcon: ({ focused }) => (
            <Text style={{ fontSize: 20 }}>
              <Ionicons
                name="home"
                size={24}
                color={focused ? '#3B82F6' : '#6B7280'}
              />
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="OrderList"
        component={OrderListScreen}
        options={{
          tabBarLabel: '주문내역',
          tabBarIcon: ({ focused }) => (
            <Text style={{ fontSize: 20 }}>
              <Ionicons
                name="layers"
                size={24}
                color={focused ? '#3B82F6' : '#6B7280'}
              />
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="MyProfile"
        component={MyProfileScreen}
        options={{
          tabBarLabel: '마이페이지',
          tabBarIcon: ({ focused }) => (
            <Text style={{ fontSize: 20 }}>
              <Ionicons
                name="person"
                size={24}
                color={focused ? '#3B82F6' : '#6B7280'}
              />
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
