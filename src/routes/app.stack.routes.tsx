import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Feed} from '../screens/Feed';
import {Album} from '../screens/Album';

const {Navigator, Screen} = createStackNavigator();

export function AppStackRoutes() {
  return (
    <Navigator initialRouteName="Feed" headerMode="none">
      <Screen name="Feed" component={Feed} options={{headerShown: false}} />
      <Screen name="Album" component={Album} />
    </Navigator>
  );
}
