import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { List } from 'react-native-paper';

const titulos = [
  { nome: "Campeonato Brasileiro", anos: [1980, 1982, 1983, 1992, 2009, 2019, 2020] },
  { nome: "Copa Libertadores da América", anos: [1981, 2019, 2022] },
  { nome: "Copa do Brasil", anos: [1990, 2006, 2013, 2022, 2024] },
  { nome: "Supercopa do Brasil", anos: [2020, 2021, 2025] },
];

export default function TitulosScreen() {
  return (
    <FlatList
      data={titulos}
      keyExtractor={(item) => item.nome}
      renderItem={({ item }) => (
        <List.Accordion title={item.nome}>
          {item.anos.map((ano) => (
            <List.Item key={ano} title={ano.toString()} />
          ))}
        </List.Accordion>
      )}
    />
  );
}
