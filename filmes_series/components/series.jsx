import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function series(props) {
    const {dados} = props
  return (
    <View>
      <Text>series</Text>
      <Text>Nome: {dados.nome} </Text>
      <Text>Ano: {dados.ano} </Text>
      <Text>Diretor: {dados.diretor} </Text>
      <Text>Temmporadas: {dados.temporadas} </Text>

      <Image 
      source={{uri: dados.capa}}
      style={{
        height: 200,
        width: 200
    }}
      />

    </View>
  )
}

const styles = StyleSheet.create({})