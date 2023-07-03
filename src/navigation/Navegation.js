import React from 'react';
// imagine
import { Image } from 'react-native';

//  tabNavigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// icon
import Ionicons from '@expo/vector-icons/Ionicons';

// screen
import FavoritiesNaigation from '../navigation/FavoritesNavigation'
import PokedexNavigation from '../navigation/PokedexNavigation'
import AcountNavigation from '../navigation/AcountNavigation'


const Tab = createBottomTabNavigator()

export default function Navegation() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name='Favorites' 
        component={FavoritiesNaigation} 
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({size, color}) => ( 
          <Ionicons name="heart-outline" color={color} size={size}/>
          )
        }}
      />
      <Tab.Screen 
        name='Pokedex' 
        component={PokedexNavigation}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => renderPokebola(),
        }}
      />
      <Tab.Screen 
        name='Acount' 
        component={AcountNavigation}
        options={{
          tabBarLabel: "Mi cuenta",
          tabBarIcon: ({color, size}) => (
            <Ionicons name="person-outline" color={color} size={size}/>
          )
        }}
      />
    </Tab.Navigator>
  )
}

function renderPokebola() {
  return (
    <Image 
      source={require('../assets/pokebola.png')}
      style={{width: 75, height: 75, top: -15}}
    />
  )
}