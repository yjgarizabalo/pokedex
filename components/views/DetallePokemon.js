import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


const DetallePokemon = ({ navigation, route }) => {
  const [info, setInfo] = useState([]);


  useEffect(() => {
    fetchData();
  }, []);



  const fetchData = async () => {
    const options = {
      method: 'GET',
    };
    try {
      const response = await fetch(route.params.url_pok, options);
      const json = await response.json();
      setInfo(json.results)
      console.log(json);
    } catch (error) {
      console.log("error", error);
    }
  }
  return (
    <View style={styles.container}>
      <Text>Detalles pokemones</Text>
      <StatusBar style="auto" />
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

export default DetallePokemon