import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// imagen
import FavoriteScreen from '../screens/Favorites'

const Stack = createNativeStackNavigator()

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