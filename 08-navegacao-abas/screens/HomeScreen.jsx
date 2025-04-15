import { StyleSheet, View, ViewBase } from 'react-native'
import { Card, Paragraph, Text, Title } from 'react-native-paper'
import React from 'react'

export default function HomeScreen() {
  return (
    <View style={styles.container} >
        <Text variant='headlineLarge' style={{textAlign: 'center', color: 'black'}} > Tela de Ínicio</Text>
        <Card style={{width: '90%'}} >
            <Card.Content>
         <Title>Um titulo</Title>
         <Paragraph>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</Paragraph>
         </Card.Content>
         <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
        </Card>

        <Card>
          
        </Card>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'fff',
      flex: 1,
      alignItems: 'center',
      paddingTop: 10
    }
  })