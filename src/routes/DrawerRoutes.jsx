import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import EscudoScreen from './screen/EscudoScreen'
import {Ionicons} from '@expo/vector-icons'
import JogadoresScreen from './screen/JogadoresScreen'
import TitulosScreen from './screen/TitulosScreen'


const Drawer = createDrawerNavigator()

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator>
        <Drawer.Screen
        name='EscudoScreen'
        component={EscudoScreen}
        options={{
            title:"Escudo",
            drawerIcon: ({color, size}) => <Ionicons  name='home' color={color} size={size} /> 
        }}
        />

<Drawer.Screen
        name='Jogadores'
        component={JogadoresScreen}
        options={{
            title:"Jogadores",
            drawerIcon: ({color, size}) => <Ionicons  name='person' color={color} size={size} /> 
        }}
        />

<Drawer.Screen
        name='titulod'
        component={TitulosScreen}
        options={{
            title:"titulos",
            drawerIcon: ({color, size}) => <Ionicons  name='analytics-outline' color={color} size={size} /> 
        }}
        />
    </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({})