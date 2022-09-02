import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function Home() {
    return (
        <View style={styles.container}>
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
});