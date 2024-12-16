import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const PRODUCTS = {
  Lanches: [
    { id: '1', name: 'Hambúrguer', price: 12.99 },
    { id: '2', name: 'Sanduíche', price: 8.99 },
  ],
  Bebidas: [
    { id: '3', name: 'Refrigerante', price: 4.99 },
    { id: '4', name: 'Suco', price: 5.99 },
  ],
  Sobremesas: [
    { id: '5', name: 'Sorvete', price: 6.99 },
    { id: '6', name: 'Bolo', price: 7.99 },
  ],
};

export default function ProductsScreen({ route, navigation, cart, setCart, theme }) {
  const { category } = route.params;

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, { ...product, uniqueId: Date.now().toString() }]);
  };

  return (
    <View style={[styles.container, theme === 'dark' ? styles.darkContainer : styles.lightContainer]}>
      <Text style={[styles.header, theme === 'dark' ? styles.darkHeader : styles.lightHeader]}>{category}</Text>
      <FlatList
        data={PRODUCTS[category]}
        renderItem={({ item }) => (
          <View style={[styles.item, theme === 'dark' ? styles.darkItem : styles.lightItem]}>
            <Text style={[styles.title, theme === 'dark' ? styles.darkTitle : styles.lightTitle]}>{item.name}</Text>
            <Text style={[styles.price, theme === 'dark' ? styles.darkPrice : styles.lightPrice]}>R$ {item.price.toFixed(2)}</Text>
            <TouchableOpacity style={[styles.button, theme === 'dark' ? styles.darkButton : styles.lightButton]} onPress={() => addToCart(item)}>
              <Text style={styles.buttonText}>Adicionar ao Carrinho</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity style={[styles.cartButton, theme === 'dark' ? styles.darkCartButton : styles.lightCartButton]} onPress={() => navigation.navigate('Cart')}>
        <Text style={styles.cartButtonText}>Ver Carrinho</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  lightContainer: {
    backgroundColor: '#e6f2ff',
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  lightHeader: {
    color: '#1e90ff',
  },
  darkHeader: {
    color: '#ccc',
  },
  item: {
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  lightTitle: {
    color: 'white',
  },
  darkTitle: {
    color: '#ddd',
  },
  price: {
    fontSize: 18,
    marginBottom: 10,
  },
  lightPrice: {
    color: 'white',
  },
  darkPrice: {
    color: '#ccc',
  },
  button: {
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  lightButton: {
    backgroundColor: '#ffffff',
  },
  darkButton: {
    backgroundColor: '#777',
  },
  buttonText: {
    color: '#1e90ff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  cartButton: {
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  lightCartButton: {
    backgroundColor: '#1e90ff',
  },
  darkCartButton: {
    backgroundColor: '#555',
  },
  cartButtonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
