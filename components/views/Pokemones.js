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
        const options = {
            method: 'GET',
        };

        const fetchData = async () => {
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0', options);
                const json = await response.json();
                setInfo(json.results)
                console.log(json);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    let inf = [];
    for (let r of info){
        inf.push(<Text style={{ FontWeight: 'bold', fontSize: '25px', marginTop: '100'}}>{r.nombre}</Text>)
    }

    return (
        

        <SafeAreaView style={styles.container}>
        {inf}
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