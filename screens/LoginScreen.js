import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function LoginScreen({ navigation, theme }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    if (email === '' || password === '') {
      setErrorMessage('Por favor, preencha todos os campos.');
    } else {
      setErrorMessage('');
      navigation.navigate('Home');
    }
  };

  return (
    <View style={[styles.container, theme === 'dark' ? styles.darkContainer : styles.lightContainer]}>
      <TextInput
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        style={[styles.input, theme === 'dark' ? styles.darkInput : styles.lightInput]}
        placeholderTextColor={theme === 'dark' ? '#aaa' : '#888'}
      />
      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={[styles.input, theme === 'dark' ? styles.darkInput : styles.lightInput]}
        placeholderTextColor={theme === 'dark' ? '#aaa' : '#888'}
      />
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      <TouchableOpacity style={[styles.button, theme === 'dark' ? styles.darkButton : styles.lightButton]} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  lightContainer: {
    backgroundColor: '#f0f8ff',
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  input: {
    height: 40,
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  lightInput: {
    borderColor: '#1e90ff',
    color: 'black',
  },
  darkInput: {
    borderColor: '#555',
    color: 'white',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 5,
    alignItems: 'center',
  },
  lightButton: {
    backgroundColor: '#1e90ff',
  },
  darkButton: {
    backgroundColor: '#555',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    marginBottom: 12,
  },
});
