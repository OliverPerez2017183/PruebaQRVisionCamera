import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenScann from '../src/Pages/ScreenScann';
import HomeView from '../src/Pages/Home.view';
import ScannedCodeView from '../src/Pages/Scanned-Code.view';

const Stack = createStackNavigator();

const Navegador = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeView} />
          <Stack.Screen name="ScreenScann" component={ScreenScann} />
          <Stack.Screen name='Scanned' component={ScannedCodeView} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Navegador;