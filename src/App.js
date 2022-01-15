import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import { AppStack } from './navigation';

const App = ({
    params,
}) => (
  <NavigationContainer>
    <StatusBar 
      translucent 
      barStyle='dark-content'
      backgroundColor="transparent" 
    />
    <AppStack />
  </NavigationContainer>
);

export default App;
