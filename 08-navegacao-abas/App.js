import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons'
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';

export default function App() {
  const Tab = createBottomTabNavigator()
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen 
          name='HomeScreen'
          component={HomeScreen}
          options={{
            title: 'Inicio',
            tabBarIcon:({color, size}) => <Ionicons name='home' color={color} size={30} />
          }}
          />

          <Tab.Screen 
           name='ProfileScreen'
           component={ProfileScreen}
           options={{
             title: 'Perfil',
             tabBarIcon: ({ color, size }) => <Ionicons name='person' color={color} size={size} />
           }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
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
