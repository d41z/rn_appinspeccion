import React, {Component} from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import testRotate from './screens/testRotate'
import hometest from './screens/hometest'


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="hometest">
        <Stack.Screen name="Wtf1" component={hometest} />
        <Stack.Screen name="Wtf2" component={testRotate} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;