import { StyleSheet, Text, View } from 'react-native';

// ICONS
import { AntDesign } from '@expo/vector-icons';

// NAVEGATIONS
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


// VARIABLES
const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

// COMPONENTES
import Pokemones from './components/views/Pokemones'
import SearchPokemon from './components/views/SearchPokemon'
import DetallePokemon from './components/views/DetallePokemon'


export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator labeled={false} bordered={true} barStyle={{ backgroundColor: '#FFD700', bottom: 25, marginLeft: 20, marginRight: 20 }}>

        <Tab.Screen name="ListaPokemones"
          options={{
            tabBarIcon: ({ color }) => (
              <AntDesign name="aliwangwang-o1" size={24} color={color} />
            )
          }}
          component={DetalleStack}
        />

        <Tab.Screen name="Search"
          options={{
            tabBarIcon: ({ color }) => (
              <AntDesign name="search1" size={24} color={color} />
            )
          }}
          component={SearchScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}



const StackDetalle = createStackNavigator();

function DetalleStack() {
  return (

    <StackDetalle.Navigator>
      <StackDetalle.Screen name="Pokemones" component={Pokemones} />
      <StackDetalle.Screen name="DetallePokemon" component={DetallePokemon} />
    </StackDetalle.Navigator>

  );
}


//SCREENS
function PokemonesScreen() {
  return (
    <Pokemones />
  );
}

function SearchScreen() {
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
