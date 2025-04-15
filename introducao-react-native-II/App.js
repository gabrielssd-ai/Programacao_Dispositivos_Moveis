import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';

export default function App() {
  const nome = 'gabriel';

  function alerta() {
    alert(`${nome}, clicou no botão`);
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar style="auto" />

        <Text style={styles.titulo}>{nome}</Text>

        <Image
          source={{
            uri: 'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/09/GettyImages-1668971338-e1694439970587.jpg?w=1200&h=900&crop=1'
          }}
          style={styles.imagem}
          resizeMode="contain"
        />

        <Button title="Clicar" onPress={alerta} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start', // importante para exibir o topo corretamente
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textTransform: 'capitalize', // opcional, para deixar "Gabriel" com letra maiúscula
  },
  imagem: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
});
