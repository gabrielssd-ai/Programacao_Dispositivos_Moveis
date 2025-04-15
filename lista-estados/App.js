import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { FlatList, ScrollView } from 'react-native-web';
import Estado from './components/Estado';

export default function App() {
  const listaEstadosMunicipios = [
    {
      nome: 'Rio de Janeiro',
      sigla: 'RJ',
      imagem: 'https://picsum.photos/700',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      municipios: [
        {
          nome: 'Rio de Janeiro',
          imagem: 'https://picsum.photos/700'
        },
        {
          nome: 'Niterói',
          imagem: 'https://picsum.photos/700'
        },
        {
          nome: 'Petrópolis',
          imagem: 'https://picsum.photos/700'
        },
        {
          nome: 'Angra dos Reis',
          imagem: 'https://picsum.photos/700'
        },
        {
          nome: 'Cabo Frio',
          imagem: 'https://picsum.photos/700'
        }
      ]
    },
    {
      nome: 'São Paulo',
      sigla: 'SP',
      imagem: 'https://picsum.photos/700',
      descricao: 'São Paulo é o estado mais populoso do Brasil, com uma economia diversificada e forte.',
      municipios: [
        {
          nome: 'São Paulo',
          imagem: 'https://picsum.photos/700'
        },
        {
          nome: 'Campinas',
          imagem: 'https://picsum.photos/700'
        },
        {
          nome: 'Santos',
          imagem: 'https://picsum.photos/700'
        },
        {
          nome: 'Sorocaba',
          imagem: 'https://picsum.photos/700'
        },
        {
          nome: 'Ribeirão Preto',
          imagem: 'https://picsum.photos/700'
        }
      ]
    },
    {
      nome: 'Minas Gerais',
      sigla: 'MG',
      imagem: 'https://picsum.photos/700',
      descricao: 'Minas Gerais é conhecido por sua rica história, culinária e belas paisagens.',
      municipios: [
        {
          nome: 'Belo Horizonte',
          imagem: 'https://picsum.photos/700'
        },
        {
          nome: 'Ouro Preto',
          imagem: 'https://picsum.photos/700'
        },
        {
          nome: 'Uberlândia',
          imagem: 'https://picsum.photos/700'
        },
        {
          nome: 'Juiz de Fora',
          imagem: 'https://picsum.photos/700'
        },
        {
          nome: 'Montes Claros',
          imagem: 'https://picsum.photos/700'
        }
      ]
    }
  ]
  return (
    <ScrollView>


    <PaperProvider>
      <View>
        <StatusBar style='auto' />
        <Text variant = 'displaySmall' >Lista de Estados</Text>
        <FlatList 
        data = {listaEstadosMunicipios}
        renderItem={({item}) => (
          <Estado   
           nome = {item.nome}
           sigla = {item.sigla}
           descricao={item.descricao}
            imagem={item.imagem}
            municipios={item.municipios}
          
          />
        )}
        />
      </View>
    </PaperProvider>
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
