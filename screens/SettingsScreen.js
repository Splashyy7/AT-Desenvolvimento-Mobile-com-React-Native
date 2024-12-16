import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function SettingsScreen({ switchTheme, theme }) {
  return (
    <View style={[styles.container, theme === 'dark' ? styles.darkContainer : styles.lightContainer]}>
      <Text style={[styles.text, theme === 'dark' ? styles.darkText : styles.lightText]}>Configurações</Text>
      <TouchableOpacity style={[styles.button, theme === 'dark' ? styles.darkButton : styles.lightButton]} onPress={switchTheme}>
        <Text style={styles.buttonText}>Alternar Tema</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  lightContainer: {
    backgroundColor: '#e6f2ff',
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  text: {
    fontSize: 25,
  },
  lightText: {
    color: '#1e90ff',
  },
  darkText: {
    color: '#ccc',
  },
  button: {
    marginTop: 20,
    padding: 10,
    borderRadius: 8,
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
});
