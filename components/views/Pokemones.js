// import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar } from 'react-native';

const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);


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
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0', options);
            const json = await response.json();
            setInfo(json.results)
            console.log(json);
        } catch (error) {
            console.log("error", error);
        }
    };


    let i = 0;
    return (
        <SafeAreaView style={styles.container}>
            {
                info.map(({ name }) => (
                    <Text key={i++} style={{ FontWeight: 'bold', fontSize: '25px', marginTop: '100'}}>{name}</Text>
                ))
            }
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
    header: {
        fontSize: 18,
        backgroundColor: '#fff',
        fontWeight: 'bold',
    },
    title: {
        fontSize: 14,
    },
});

export default Pokemones;