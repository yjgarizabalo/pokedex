import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';


const DetallePokemon = ({ navigation, route }) => {
  const [info, setInfo] = useState([]);
  const [nombrePok, setNombrePok] = useState();
  const [imgPok, setImgPok] = useState([]);


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
      setNombrePok(json.name.toUpperCase());
      setImgPok(json.sprites);
      console.log(json);
    } catch (error) {
      console.log("error", error);
    }
  }
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: imgPok.front_default}} />
      <Text style={styles.name}>{nombrePok}</Text>
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
  name: {
    fontSize: 17,
    color: '#1c1c1c',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
});

export default DetallePokemon