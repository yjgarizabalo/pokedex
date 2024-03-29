import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native'

// api
import { getPokemonsAPI, getPokemonDeatilsByUrlApi } from '../api/pokemon'

// component
import PokemonList  from '../components/PokemonList'

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([])
  const [nextUrl, setNextUrl] = useState(null)

  useEffect(() => {
    (async () => {
      await loadPokemons()
    })()
  }, [])

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsAPI(nextUrl)
      setNextUrl(response.next)

      const pokemonsArry = []
      for await (const pokemon of response.results) {
        const pokemonDetails = await getPokemonDeatilsByUrlApi(pokemon.url)
        
        pokemonsArry.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          imagen: pokemonDetails.sprites.other['official-artwork'].front_default,
        })
  
      }

      setPokemons([...pokemons, ...pokemonsArry])

    } catch (error) {
      console.error(error);
    }
  }
  return (
    <SafeAreaView>
      <PokemonList 
        pokemons={pokemons}
        loadPokemons={loadPokemons}
        isNext={nextUrl}
      />
    </SafeAreaView>
  )
}