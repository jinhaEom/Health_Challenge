import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import HomeScreen from '../screens/Home/HomeScreen';
import MyProfileScreen from '../screens/Profile/MyProfileScreen';
import OrderListScreen from '../screens/Order/OrderListScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
interface TabIconProps {
  focused: boolean;
  color: string;
  size: number;
}

const HomeIcon = ({ focused }: TabIconProps) => (
  <Text style={{ fontSize: 20 }}>
    <Ionicons name="home" size={24} color={focused ? '#3B82F6' : '#6B7280'} />
  </Text>
);

const OrderIcon = ({ focused }: TabIconProps) => (
  <Text style={{ fontSize: 20 }}>
    <Ionicons name="layers" size={24} color={focused ? '#3B82F6' : '#6B7280'} />
  </Text>
);

const ProfileIcon = ({ focused }: TabIconProps) => (
  <Text style={{ fontSize: 20 }}>
    <Ionicons name="person" size={24} color={focused ? '#3B82F6' : '#6B7280'} />
  </Text>
);

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
          backgroundColor: '#f9fafb',
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
        animation: 'shift',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: '홈',
          tabBarIcon: HomeIcon,
        }}
      />
      <Tab.Screen
        name="OrderList"
        component={OrderListScreen}
        options={{
          tabBarLabel: '주문내역',
          tabBarIcon: OrderIcon,
        }}
      />
      <Tab.Screen
        name="MyProfile"
        component={MyProfileScreen}
        options={{
          tabBarLabel: '마이페이지',
          tabBarIcon: ProfileIcon,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
