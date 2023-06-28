import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

// imagine
import { Image } from 'react-native';

// icon
import Ionicons from '@expo/vector-icons/Ionicons';

// navegation
import FavoritesNavigation from './FavoritesNavigation'


// screen
import Pokedex from '../screens/Pokedex'
import Acount from '../screens/Acount'


const Tab = createBottomTabNavigator()

export default function Navegation() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name='Favorites' 
        component={FavoritesNavigation} 
        options={{
          tabBarIcon: ({size, color}) => ( 
          <Ionicons name="heart-outline" color={color} size={size}/>
          )
        }}
      />
      <Tab.Screen 
        name='Pokedex' 
        component={Pokedex}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => renderPokebola(),
        }}
      />
      <Tab.Screen 
        name='Acount' 
        component={Acount}
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