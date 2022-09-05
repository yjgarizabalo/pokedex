import { StyleSheet } from 'react-native';

// ICONS
import { AntDesign } from '@expo/vector-icons';

// NAVEGATIONS
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


// VARIABLES
const Tab = createMaterialBottomTabNavigator();


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
          component={SearchStack}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


//STACK
const StackDetalle = createStackNavigator();

function DetalleStack() {
  return (
    <StackDetalle.Navigator>
      <StackDetalle.Screen name="Pokemones" component={Pokemones} />
      <StackDetalle.Screen name="Detalle" component={DetallePokemon} />
    </StackDetalle.Navigator>

  );
}

const StackSearch = createNativeStackNavigator();

function SearchStack() {
  return (
    <StackSearch.Navigator>
      <StackSearch.Screen name='SearchPokemon' component={SearchPokemon}/>
    </StackSearch.Navigator>
  );
}