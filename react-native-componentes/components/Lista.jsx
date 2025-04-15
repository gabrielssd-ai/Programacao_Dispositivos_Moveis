import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Lista() {
    const lista = ["banana", "uva", "maçã", "laranja"]
  return (
    <View>
      {lista.map((fruta)=> <Text> {fruta} </Text> )}
    
      {lista.map(
        (fruta) => {
            return (
                <View>
                   <Text> {fruta} </Text>    
                 </View>
            )
        }
      )}
       
    </View>
  )
}

const styles = StyleSheet.create({})