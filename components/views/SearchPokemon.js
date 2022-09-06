import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput, SafeAreaView, FlatList } from 'react-native';


const SearchPokemon =() => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TextInput
          style={styles.textInputStyle}
          onChangeText={(text) => searchFilterFunction(text)}
          // value={search}
          // underlineColorAndroid="transparent"
          // placeholder="Search Here"
        />
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

  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#323232',
    backgroundColor: '#FFFFFF',
  },
});

export default SearchPokemon