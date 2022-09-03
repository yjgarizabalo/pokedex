import { StyleSheet, Text, View } from 'react-native';

// ICONS
import { AntDesign } from '@expo/vector-icons';

// NAVEGATIONS
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


// VARIABLES
const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

// COMPONENTES
import Pokemones from './components/views/Pokemones'
import SearchPokemon from './components/views/SearchPokemon'

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator labeled={false} bordered={true} barStyle={{ backgroundColor: '#FFD700', bottom: 25, marginLeft: 20, marginRight: 20 }}>

        <Tab.Screen name="Home_"
          options={{
            tabBarIcon: ({ color }) => (
              <AntDesign name="aliwangwang-o1" size={24} color={color} />
            )
          }}
        >
          {() => (
            <Stack.Navigator>
              <Stack.Screen name="Pokemones" component={PokemonesScreen} />
            </Stack.Navigator>
          )}
        </Tab.Screen>

        <Tab.Screen name="Search"
          options={{
            tabBarIcon: ({ color }) => (
              <AntDesign name="search1" size={24} color={color} />
            )
          }}
        >
          {() => (
            <Stack.Navigator>
              <Stack.Screen name="Buscar Pokémon" component={BlogScreen} />
            </Stack.Navigator>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}


//SCREENS
function PokemonesScreen() {
  return (
    <Pokemones />
  );
}

function BlogScreen() {
  return (
    <SearchPokemon />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
