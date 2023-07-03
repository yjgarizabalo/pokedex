import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

// imagen
import AcountScreen from '../screens/Acount'

const Stack = createStackNavigator()

export default function AcountNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Acount'
        component={AcountScreen}
        options={{title: 'Mi cuenta'}}
      />
    </Stack.Navigator>
  )
}