import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Feed} from '../screens/Feed';
import {Album} from '../screens/Album';

export interface IAppStackParams {
  Feed: undefined;
  Album: {
    id: number;
    album_info: {
      title: string;
      date: string;
    };
    author: string;
    gallery: string[];
  };
}

const {Navigator, Screen} = createStackNavigator<IAppStackParams>();

export function AppStackRoutes() {
  return (
    <Navigator
      initialRouteName="Feed"
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="Feed" component={Feed} />
      <Screen name="Album" component={Album} />
    </Navigator>
  );
}
