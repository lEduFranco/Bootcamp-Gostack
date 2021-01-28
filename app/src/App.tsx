import 'react-native-gesture-handler';

import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AppProvider from './hooks';

import Routes from './routes';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#b28d9f" translucent />
    <AppProvider>
      <View style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
        <Routes />
      </View>
    </AppProvider>
  </NavigationContainer>
);

export default App;
