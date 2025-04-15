import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function JsComponente() {
    const nome = "gabriel"
    const  idade = 22

    function checaridade(){
        if(idade >= 18){
            return "maior idade"
        } else{
            return "menor idade"
        }
    }

  return (
    <View>
      <Text>Java Script Componentes</Text>
      <Text>Nome: {nome} </Text>
      <Text>Idade: {idade} </Text>
      <Text> 18+: {checaridade()} </Text>
    </View>
  )
}

const styles = StyleSheet.create({})