import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from 'styled-components';

import {AppStackRoutes} from './app.stack.routes';
import {DefaultScreen} from '../screens/DefaultScreen';
import Feather from 'react-native-vector-icons/Feather';

const {Navigator, Screen} = createBottomTabNavigator();

export function AppTabRoutes() {
  const theme = useTheme();

  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.main,
        tabBarInactiveTintColor: theme.colors.text,
        tabBarLabelPosition: 'below-icon',
        tabBarStyle: {
          height: 50,
        },
        headerShown: false,
      }}>
      <Screen
        name="Feed"
        component={AppStackRoutes}
        options={{
          tabBarIcon: ({size, color}) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Explorar"
        component={DefaultScreen}
        options={{
          tabBarIcon: ({size, color}) => (
            <Feather name="search" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Checkin"
        component={DefaultScreen}
        options={{
          tabBarIcon: ({size, color}) => (
            <Feather name="map-pin" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Notificações"
        component={DefaultScreen}
        options={{
          tabBarIcon: ({size, color}) => (
            <Feather name="bell" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Perfil"
        component={DefaultScreen}
        options={{
          tabBarIcon: ({size, color}) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}
