import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router'

export default function SportsSelection() {
  const router = useRouter();

  const sports = ['Vôlei', 'Basquete', 'Futebol', 'Tênis de Mesa'];

  return (
    <View style={styles.container}>
      {/* List of Sports */}
      <View style={styles.listContainer}>
        {sports.map((sport, index) => (
          <TouchableOpacity key={index} style={styles.sportButton}>
            <Text style={styles.sportText}>{sport}</Text>
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
  header: {
    backgroundColor: '#0097B2',
    paddingHorizontal: 16,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 10,
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    flexShrink: 1,
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
