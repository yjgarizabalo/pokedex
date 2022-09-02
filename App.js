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
import Home from './components/views/Home'
import About from './components/views/About'
import Blog from './components/views/Blog'

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator labeled={false} bordered={true} barStyle={{ backgroundColor: '#512E5F', bottom: 25, marginLeft: 20, marginRight: 20 }}>

        <Tab.Screen name="Home_"
          options={{
            tabBarIcon: ({ color }) => (
              <AntDesign name="home" size={20} color={color} />
            )
          }}
        >
          {() => (
            <Stack.Navigator>
              <Stack.Screen name="Pokemones" component={HomeScreen} />
            </Stack.Navigator>
          )}
        </Tab.Screen>

        <Tab.Screen name="About_"
          options={{
            tabBarIcon: ({ color }) => (
              <AntDesign name="infocirlceo" size={20} color={color} />
            )
          }}
        >
          {() => (
            <Stack.Navigator>
              <Stack.Screen name="Informacion" component={AboutScreen} />
            </Stack.Navigator>
          )}
        </Tab.Screen>

        <Tab.Screen name="Blog_"
          options={{
            tabBarIcon: ({ color }) => (
              <AntDesign name="book" size={20} color={color} />
            )
          }}
        >
          {() => (
            <Stack.Navigator>
              <Stack.Screen name="Pokebola" component={BlogScreen} />
            </Stack.Navigator>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}


//SCREENS
function HomeScreen() {
  return (
    <Home />
  );
}

function AboutScreen() {
  return (
    <About />
  );
}

function BlogScreen() {
  return (
    <Blog />
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
