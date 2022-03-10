import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components/native';

import theme from './src/styles/theme';
import {Routes} from './src/routes';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar backgroundColor="transparent" translucent />
        <Routes />
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
