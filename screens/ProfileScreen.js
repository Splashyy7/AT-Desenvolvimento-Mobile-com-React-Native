import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const mockUserData = {
  name: 'João Pedro Oliveira',
  email: 'joao.pedro@gmail.com',
};

export default function ProfileScreen({ navigation, theme }) {
  const handleLogout = () => {
    navigation.navigate('Login');
  };

  const handleSettings = () => {
    navigation.navigate('Settings');
  };

  return (
    <View style={[styles.container, theme === 'dark' ? styles.darkContainer : styles.lightContainer]}>
      <Text style={[styles.label, theme === 'dark' ? styles.darkLabel : styles.lightLabel]}>Nome:</Text>
      <Text style={[styles.value, theme === 'dark' ? styles.darkValue : styles.lightValue]}>{mockUserData.name}</Text>
      <Text style={[styles.label, theme === 'dark' ? styles.darkLabel : styles.lightLabel]}>Email:</Text>
      <Text style={[styles.value, theme === 'dark' ? styles.darkValue : styles.lightValue]}>{mockUserData.email}</Text>
      <TouchableOpacity style={[styles.button, theme === 'dark' ? styles.darkButton : styles.lightButton]} onPress={handleSettings}>
        <Text style={styles.buttonText}>Configurações</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.logoutButton, theme === 'dark' ? styles.darkLogoutButton : styles.lightLogoutButton]} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
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
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  lightLabel: {
    color: '#1e90ff',
  },
  darkLabel: {
    color: '#ccc',
  },
  value: {
    fontSize: 18,
    marginBottom: 15,
  },
  lightValue: {
    color: '#333',
  },
  darkValue: {
    color: '#ddd',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  lightButton: {
    backgroundColor: '#1e90ff',
  },
  darkButton: {
    backgroundColor: '#555',
  },
  logoutButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  lightLogoutButton: {
    backgroundColor: '#ff1744',
  },
  darkLogoutButton: {
    backgroundColor: '#ff5555',
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
