import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Atleta({ nome, idade, imagem }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Atletas</Text>
      <Text>Nome: {nome}</Text>
      <Text>Idade: {idade}</Text>

      <Image 
        source={{ uri: imagem }}
        style={styles.imagem}
      />   
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  imagem: {
    height: 300,
    width: 300,
    marginTop: 10,
    borderRadius: 10
  }
})
