import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator ,TransitionPresets} from '@react-navigation/stack'
import React from 'react'
import { View, Text } from 'react-native'
import Detail from './src/screens/Detail';
import Home from './src/screens/Home';
import Tabs from './src/screens/navigation/Tabs';


const TransitionScreenOptions = {
  ...TransitionPresets.SlideFromRightIOS, // This is where the transition happens
};

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={TransitionScreenOptions}>
        <Stack.Screen name="Tabs" component={Tabs} options={{headerShown:false}}/>
        <Stack.Screen component={Detail} name="Detail" options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
