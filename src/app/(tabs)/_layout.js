import React from 'react';
import { Tabs } from 'expo-router/tabs';
import { Feather } from '@expo/vector-icons';
import { View, StyleSheet } from 'react-native';

export default function TabNavigator() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: 'black', // Cor do ícone/texto ativo
        tabBarInactiveTintColor: 'white', // Cor do ícone/texto inativo
        tabBarStyle: {
          backgroundColor: '#0097B2', // Cor de fundo da barra de abas
          height: 100, // Altura da barra
          borderTopWidth: 0, // Remove a borda superior
          padding: 35
        },
        tabBarLabelStyle: {
          fontSize: 12, // Tamanho do texto da aba
          fontWeight: 'bold', // Peso do texto
        },
        headerShown: false, // Remove o cabeçalho padrão
        tabBarIcon: ({ color, focused }) => {
          // Define o ícone para cada aba
          let iconName;

          if (route.name === 'home') {
            iconName = 'map';
          } else if (route.name === 'profile') {
            iconName = 'user';
          }

          return (
            <View
              style={[
                focused && styles.activeTabContainer, // Estiliza o contêiner se a aba estiver ativa
              ]}
            >
              <Feather name={iconName} size={30} color={color} />
            </View>
          );
        },
      })}
    >
      <Tabs.Screen name="home" options={{ title: '' }} />
      <Tabs.Screen name="profile" options={{ title: '' }} />
      <Tabs.Screen name="inserirLocal" options={{ title: '' }} />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  activeTabContainer: {
    backgroundColor: 'white', // Fundo branco para a aba ativa
    borderRadius: 35, // Bordas arredondadas
    padding: 10, // Espaçamento interno
    justifyContent: 'center', // Centraliza o conteúdo verticalmente
    alignItems: 'center', // Centraliza o conteúdo horizontalmente
    paddingHorizontal: 70
  },
});
