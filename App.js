import { StyleSheet, Text, View } from 'react-native';

// ICONS
import { AntDesign } from '@expo/vector-icons';

// NAVEGATIONS
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

// VARIABLES
const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

// COMPONENTES
import Home from './components/views/Home'
import About from './components/views/About'
import Blog from './components/views/Blog'

// HEADER STACKS
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator bordered={true} barStyle={{ backgroundColor: '#512E5F', bottom: 25, marginLeft: 20, marginRight: 20 }}>
        <Tab.Screen name="Home" component={HomeStackScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="home" size={24} color={color} />
            )
          }}
        />
        <Tab.Screen name="About" component={AboutScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="infocirlceo" size={24} color={color} />
            )
          }}
        />
        <Tab.Screen name="Blog" component={BlogScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <AntDesign name="book" size={24} color={color} />
            )
          }}
        />
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
  NavContainer: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 20,
  },
});
