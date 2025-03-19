import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ScrollView} from 'react-native';

export default function App() {

  function alerta(){
    alert("GOOOOOOOL DO NEYMMAAAARRRR!!!!")
  }

  return (
    <ScrollView>
    <View style={styles.container}>
      <Image
      source = {{
        uri : 'https://i.pinimg.com/736x/ba/4b/4d/ba4b4d89ee0dcc15ac908758e0eb737a.jpg'
      }}
      style={{
        height: 200,
        width: 200
      }}
      />
      <Text style = {{fontSize: 13, fontStyle: 'italic'}} >Neymar da Silva Santos Junior</Text>
      <Text style = {{fontSize: 13, fontStyle: 'italic'}}>Nascimento: 5 de fevereiro de 1992</Text>
      <Text style = {{fontSize: 13, fontStyle: 'italic'}}>Clubes: Santos, Barcelona, PSG e Al-Hilal</Text>
      <Text style = {{fontSize: 12, fontStyle: 'italic'}}>Títulos importantes: Libertadores (2011), Champions League (2015).</Text>
      <Text style = {{fontSize: 13, fontStyle: 'italic'}}>Estilo de jogo: Habilidade e dribles rápidos</Text>
      <Image
      source={{
        uri: 'https://i.pinimg.com/736x/2b/b0/ce/2bb0ce5101b9145d744e55d7f1924fbb.jpg'
      }}
      style={{
        height: 200,
        width: 200
      }}
      />
      <Image
      source={{
        uri: 'https://i.pinimg.com/736x/bd/b4/67/bdb467afec34f016ae38a68d8aef94c4.jpg'
      }}
      style={{
        height: 200,
        width: 200
      }}
      />
      <Image
      source={{
        uri: 'https://i.pinimg.com/736x/a9/3d/b3/a93db374c965b69d561150093bfe266a.jpg'
      }}
      style={{
        height: 200,
        width: 200
      }}
      />
      <Image
      source={{
        uri: 'https://i.pinimg.com/736x/92/68/47/926847a2affbf61ec35fe7c62b9323dd.jpg'
      }}
      style={{
        height: 200,
        widt: 200
      }}
      />
     <Button title='GOL' onPress={alerta} ></Button>
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    backgroundColor: '#808080',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
