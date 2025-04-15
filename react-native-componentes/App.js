import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import JsComponente from './components/JsComponente';
import Lista from './components/Lista';
import Atleta from './components/Atleta';

export default function App() {
  const listaJogadores = [
    {
      titulo: "Card 1",
      descricao: "Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
      imagem: "https://picsum.photos/700"
    },
    {
      titulo: "Card 2",
      descricao: "Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
      imagem: "https://picsum.photos/700"
    },
    {
      titulo: "Card 3",
      descricao: "Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
      imagem: "https://picsum.photos/700"
    },
    {
      titulo: "Card 4",
      descricao: "Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
      imagem: "https://picsum.photos/700"
    },
    
  ]
  return (
    <ScrollView>
      
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <JsComponente />
      <Lista />
      {listaJogadores.map(
        (jogador) => {
          return (
            <Atleta 
            nome = {jogador.nome}
            idade = {jogador.idade}
            imagem = {jogador.imagem}

            />
          )
        }
      )}
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
