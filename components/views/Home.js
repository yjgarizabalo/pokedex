import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// NAVIGATIONS
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// VARIABLE
const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <View style={styles.HeaderHomme}>
            <StatusBar style="auto" />
            <Text>Home</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    HeaderHomme: {
        height: 45,
        backgroundColor: '#efefef'
    }
});