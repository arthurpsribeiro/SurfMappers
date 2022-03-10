import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {AppTabRoutes} from './app.tab.routes';

export const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <AppTabRoutes />
    </NavigationContainer>
  );
};
