import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function filmes(props) {
    const {dados} = props
  return (
    <View>
        <Text>filmes</Text>
        <Text>Nome: {dados.nome} </Text>
        <Text>Lançamento: {dados.ano} </Text>
        <Text>Diretor: {dados.diretor} </Text>
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