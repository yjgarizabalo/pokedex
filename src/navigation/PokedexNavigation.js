import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

// imagen
import PokemonScreen from '../screens/Pokemon'
import PokedexScreen from '../screens/Pokedex'

const Stack = createStackNavigator()

export default function PoxedexNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Pokedex'
        component={PokedexScreen}
        options={{title: "", headerTransparent: true}}
      />
      <Stack.Screen name='Pokemon' component={PokemonScreen} options={{title: "", headerTransparent: true}} />
    </Stack.Navigator>
  )
}