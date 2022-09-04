// import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, ScrollView } from 'react-native';

const Pokemones = () => {
    const [info, setInfo] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const options = {
            method: 'GET',
        };
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=24&offset=0', options);
            const json = await response.json();
            setInfo(json.results)
            console.log(json);
        } catch (error) {
            console.log("error", error);
        }
    };



    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {
                    info.map(({ name }) => {
                        return (
                            <View style={styles.item}>
                                <Text style={styles.title}>Nombre</Text>
                                <Text style={styles.name}>{name}</Text>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 16,
    },
    item: {
        backgroundColor: '#ececec',
        padding: 24,
        marginVertical: 8,
    },
    title: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#777777'
    },
    name: {
        fontSize: 17,
        color: '#1c1c1c'
    }
});

export default Pokemones;