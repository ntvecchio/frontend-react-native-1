import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';

export default function SportsSelection() {
  const router = useRouter();
  const [sports, setSports] = useState([]);
  const [loading, setLoading] = useState(true);

  // Função para buscar as modalidades do backend
  const fetchSports = async () => {
    try {
      const response = await fetch('http://localhost:5000/modalidades'); // URL backend
      const data = await response.json();
      setSports(data); // Atualiza o estado com as modalidades
      setLoading(false); // Desativa o carregamento após obter os dados
    } catch (error) {
      console.error('Erro ao buscar modalidades:', error);
      setLoading(false); // Desativa o carregamento em caso de erro
    }
  };

  useEffect(() => {
    fetchSports(); // Chama a função para buscar as modalidades quando o componente for montado
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0097B2" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Lista de modalidades */}
      <View style={styles.listContainer}>
        {sports.map((sport, index) => (
          <TouchableOpacity key={index} style={styles.sportButton}>
            <Text style={styles.sportText}>{sport.nome}</Text> {/* Exibe o nome da modalidade */}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  listContainer: {
    margin: 16,
  },
  sportButton: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  sportText: {
    fontSize: 16,
    color: '#333',
  },
});
