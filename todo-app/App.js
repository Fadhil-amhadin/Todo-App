import React from 'react';
import Main from './components/Main';
import 'react-native-gesture-handler';
import Detail from './components/Detail';
import {QueryClient, QueryClientProvider} from 'react-query';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const client = new QueryClient()
const Stack = createStackNavigator()

export default function App() {
  return (
    <QueryClientProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Home"
          screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen
            name="Home"
            component={Main}
          />
          <Stack.Screen
            name="Detail"
            component={Detail}
            initialParams={{ id: 1 }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}