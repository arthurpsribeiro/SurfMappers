import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components/native';

import theme from './src/styles/theme';
import {Routes} from './src/routes';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor="transparent"
        translucent
      />
      <SafeAreaView />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
