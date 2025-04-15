import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Card, PaperProvider, Paragraph, Title } from 'react-native-paper';
import { FlatList } from 'react-native-web';

export default function App() {
  const lista = [
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

    <PaperProvider>
      <View>
        <StatusBar style='auto'/>
        <FlatList 
         horizontal
         data = {lista}
         renderItem={({item}) => (
          <Card>
            <Card.Content>
              <Title> {item.titulo} </Title>
              <Paragraph> {item.descricao} </Paragraph>
            </Card.Content>
            <Card.Cover source={{uri: item.imagem}} />
          </Card>
         )}
        />
         <FlatList
          data={lista}
          renderItem={({ item }) => (
            <Card>
              <Card.Content>
                <Title>{item.titulo}</Title>
                <Paragraph>{item.descricao}</Paragraph>
              </Card.Content>
              <Card.Cover source={{ uri: item.imagem }} />
            </Card>
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
