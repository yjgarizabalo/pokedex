import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

// imagen
import FavoriteScreen from '../screens/Favorites'

const Stack = createStackNavigator()

export default function FavoritesNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Favorites'
        component={FavoriteScreen}
        options={{ title: 'Favoritos' }}
      />
    </Stack.Navigator>
  )
}