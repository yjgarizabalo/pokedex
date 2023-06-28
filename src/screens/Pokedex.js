import { SafeAreaView, Text } from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

// screen
import PokedexScreen from './Pokedex'

const Stack = createNativeStackNavigator()

export default function Pokedex() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Pokedex' component={PokedexScreen} />
    </Stack.Navigator>
  )
}