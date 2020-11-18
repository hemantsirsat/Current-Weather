import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WeatherHome from './src/screens/WeatherHome';
import ResultDisplay from './src/screens/ResultDisplay';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={WeatherHome}
          options={{ title: 'Weather' }}
        />
        <Stack.Screen
          name="Result"
          component={ResultDisplay}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;