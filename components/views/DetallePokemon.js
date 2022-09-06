import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';


const DetallePokemon = ({ navigation, route }) => {
  const [info, setInfo] = useState([]);
  const [nombrePok, setNombrePok] = useState();
  const [exp, setExp] = useState([]);
  const [imgPok, setImgPok] = useState([]);
  const [peso, setPeso] = useState();
  const [altura, setAltura] = useState();

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
      setNombrePok(json.name);
      setExp(json.base_experience);
      setImgPok(json.sprites);
      setPeso(json.weight)
      setAltura(json.height)
      console.log(json);
    } catch (error) {
      console.log("error", error);
    }
  }
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: '#f2f2f2', paddingLeft: 20, paddingBottom: 20 }}>
      <View style={{ alignItems: 'center'}}>        
        <Image style={styles.image} source={{ uri: imgPok.front_default }} />
      </View>

        <View style={{paddingTop: 20}}>
          <Text style={styles.title}>Nombre</Text>
          <Text style={styles.name}>{nombrePok}</Text>
        </View>

        <View style={{paddingTop: 20}}>
          <Text style={styles.title}>Experience</Text>
          <Text style={styles.name}>{exp}</Text>
        </View>
        <View style={{paddingTop: 20}}>
          <Text style={styles.title}>Peso</Text>
          <Text style={styles.name}>{peso} lb</Text>
        </View>

        <View style={{paddingTop: 20}}>
          <Text style={styles.title}>Altura</Text>
          <Text style={styles.name}>{altura} ft</Text>
        </View>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    padding: 40,
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#777777'
  },
  name: {
    fontSize: 17,
    color: '#1c1c1c',
    textAlign: 'left',
  },
  image: {
    width: 170,
    height: 170,
    resizeMode: "contain",
  },
});

export default DetallePokemon