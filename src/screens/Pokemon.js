import React, { useEffect, useState }  from 'react'
import { ScrollView } from 'react-native'

import { Ionicons } from '@expo/vector-icons';

import { getPokemonDetailsApi } from '../api/pokemon';
import Header from '../components/pokemon/Header';
import Type from '../components/pokemon/Type';
import Stats from '../components/pokemon/Stats';

export default function Pokemon(props) {
  const {
    navigation,
    route: { params }
  } = props

  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => null,
      headerLeft: () => (
        <Ionicons
          name="arrow-back"
          color="#fff"
          size={20}
          style={{ marginLeft: 20, marginBottom: 20 }}
          onPress={navigation.goBack}
        />
      ),
    });
  }, [navigation, params]);

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailsApi(params.id);
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params])

  if (!pokemon) return null;

  return (
    <ScrollView>
      <Header
        name={pokemon.name}
        order={pokemon.order}
        image={pokemon.sprites.other["official-artwork"].front_default}
        type={pokemon.types[0].type.name}
      />
      <Type types={pokemon.types} />
      <Stats stats={pokemon.stats}/>
    </ScrollView>
  );
}