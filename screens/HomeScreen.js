import { View, FlatList, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';

const CATEGORIAS = [
  { id: '1', title: 'Lanches', image: require('../imagens/lanches.jpg') },
  { id: '2', title: 'Bebidas', image: require('../imagens/bebidas.jpg') },
  { id: '3', title: 'Sobremesas', image: require('../imagens/sobremesas.jpg') },
];

export default function HomeScreen({ navigation, theme }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={[styles.item, theme === 'dark' ? styles.darkItem : styles.lightItem]} onPress={() => navigation.navigate('Products', { category: item.title })}>
      <Image source={item.image} style={styles.image} />
      <Text style={[styles.title, theme === 'dark' ? styles.darkTitle : styles.lightTitle]}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, theme === 'dark' ? styles.darkContainer : styles.lightContainer]}>
      <Text style={[styles.header, theme === 'dark' ? styles.darkHeader : styles.lightHeader]}>Categorias</Text>
      <FlatList
        data={CATEGORIAS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lightContainer: {
    backgroundColor: '#e6f2ff',
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  lightHeader: {
    color: '#1e90ff',
  },
  darkHeader: {
    color: '#ccc',
  },
  list: {
    alignItems: 'center',
  },
  item: {
    padding: 20,
    marginVertical: 10,
    borderRadius: 15,
    alignItems: 'center',
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  lightItem: {
    backgroundColor: '#1e90ff',
  },
  darkItem: {
    backgroundColor: '#555',
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  lightTitle: {
    color: 'white',
  },
  darkTitle: {
    color: '#ddd',
  },
});
