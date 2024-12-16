import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ProductsScreen from './screens/ProductsScreen';
import CartScreen from './screens/CartScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';
import RestaurantsScreen from './screens/RestaurantsScreen';
import RestaurantDetailsScreen from './screens/RestaurantDetailsScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import OrdersScreen from './screens/OrdersScreen';
import Toast from 'react-native-toast-message';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs({ orders, setOrders, theme }) {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Início"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      >
        {(props) => <HomeScreen {...props} theme={theme} />}
      </Tab.Screen>
      <Tab.Screen
        name="Perfil"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      >
        {(props) => <ProfileScreen {...props} theme={theme} />}
      </Tab.Screen>
      <Tab.Screen
        name="Restaurantes"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="silverware-fork-knife" color={color} size={size} />
          ),
        }}
      >
        {(props) => <RestaurantsScreen {...props} theme={theme} />}
      </Tab.Screen>
      <Tab.Screen
        name="Pedidos"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="clipboard-list" color={color} size={size} />
          ),
        }}
      >
        {(props) => <OrdersScreen {...props} orders={orders} setOrders={setOrders} theme={theme} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

export default function App() {
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  const [theme, setTheme] = useState('light');

  const switchTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" options={{ headerShown: false }}>
          {(props) => <LoginScreen {...props} theme={theme} />}
        </Stack.Screen>
        <Stack.Screen name="Home" options={{ headerShown: false }}>
          {(props) => <HomeTabs {...props} orders={orders} setOrders={setOrders} theme={theme} />}
        </Stack.Screen>
        <Stack.Screen name="Products">
          {props => <ProductsScreen {...props} cart={cart} setCart={setCart} theme={theme} />}
        </Stack.Screen>
        <Stack.Screen name="Cart" options={{ title: 'Carrinho' }}>
          {props => <CartScreen {...props} cart={cart} setCart={setCart} theme={theme} />}
        </Stack.Screen>
        <Stack.Screen name="Settings" options={{ title: 'Configurações' }}>
          {props => <SettingsScreen {...props} switchTheme={switchTheme} theme={theme} />}
        </Stack.Screen>
        <Stack.Screen name="RestaurantDetails" options={{ title: 'Detalhes do Restaurante' }}>
          {props => <RestaurantDetailsScreen {...props} theme={theme} />}
        </Stack.Screen>
        <Stack.Screen name="Checkout">
          {props => <CheckoutScreen {...props} cart={cart} setCart={setCart} setOrders={setOrders} theme={theme} />}
        </Stack.Screen>
      </Stack.Navigator>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </NavigationContainer>
  );
}