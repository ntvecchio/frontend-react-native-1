import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function SignUp() {
  const router = useRouter(); // Hook do Expo Router para navegação

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleSignUp = () => {
    // Aqui você pode adicionar lógica para envio do formulário
    console.log('Form Data:', form);
    alert('Cadastro realizado com sucesso!');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>SPORT'S MAP</Text>
      </View>

      {/* Form */}
      <View style={styles.formContainer}>
        <Feather name="user" size={50} color="#0097B2" style={styles.icon} />
        <Text style={styles.title}>Crie Sua Conta</Text>
        <Text style={styles.subtitle}>
          Crie sua conta para adicionar pontos esportivos ao nosso App!
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={form.name}
          onChangeText={(value) => handleInputChange('name', value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={form.email}
          onChangeText={(value) => handleInputChange('email', value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Telefone"
          keyboardType="phone-pad"
          value={form.phone}
          onChangeText={(value) => handleInputChange('phone', value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={form.password}
          onChangeText={(value) => handleInputChange('password', value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirmar Senha"
          secureTextEntry
          value={form.confirmPassword}
          onChangeText={(value) => handleInputChange('confirmPassword', value)}
        />

        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          Já tem uma conta?{' '}
          <Text
            style={styles.link}
            onPress={() => router.push('/login')} // Navegação com Expo Router
          >
            Entrar
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: '#f2f2f2',
    },
    header: {
      backgroundColor: '#0097B2',
      width: '100%',
      height: '50%',
      alignItems: 'center',
      position: 'absolute',
    },
    headerText: {
      color: '#fff',
      fontSize: 40,
      fontWeight: 'bold',
      marginTop: 40
    },
    formContainer: {
      backgroundColor: '#fff',
      width: '90%',
      borderRadius: 10,
      padding: 20,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 4,
      marginTop: '30%', // Para posicionar o formulário logo abaixo do header azul
      alignSelf: 'center',
    },
    icon: {
      marginBottom: 10,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 8,
    },
    subtitle: {
      fontSize: 14,
      color: '#555',
      textAlign: 'center',
      marginBottom: 20,
    },
    input: {
      width: '100%',
      height: 50,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 12,
      fontSize: 16,
    },
    button: {
      backgroundColor: '#0097B2',
      width: '100%',
      padding: 15,
      borderRadius: 5,
      alignItems: 'center',
      marginTop: 10,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    footerText: {
      fontSize: 14,
      color: '#333',
      marginTop: 15,
    },
    link: {
      color: '#0097B2',
      fontWeight: 'bold',
    },
  });
  
  
