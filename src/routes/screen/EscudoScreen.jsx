import { StyleSheet,View } from 'react-native'
import React from 'react'
import { Card, Text } from 'react-native-paper';

export default function EscudoScreen() {
    const time = {
        nome: "Flamengo",
        escudo: "https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg",
        fundacao: "15 de novembro de 1895",
        estadio: "Maracanã",
        mascote: "Urubu",
        cores: ["Vermelho", "Preto"]
        };
  return (
    <View>
      <Card>
        <Card.Cover source={{uri: time.escudo }} style={{height: 400}} /> 
        <Card.Content>
            <Card.Title title={time.nome} />
            <Text>Fundação: {time.fundacao} </Text>
            <Text>Estadio: {time.estadio} </Text>
            <Text>Mascote: {time.mascote} </Text>
            <Text>Cores: {time.cores} </Text>
        </Card.Content>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({})