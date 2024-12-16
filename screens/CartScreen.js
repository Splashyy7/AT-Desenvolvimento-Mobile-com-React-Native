import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default function CartScreen({ cart, setCart, navigation, theme }) {
  const removeFromCart = (uniqueId) => {
    setCart((prevCart) => prevCart.filter(item => item.uniqueId !== uniqueId));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <View style={[styles.container, theme === 'dark' ? styles.darkContainer : styles.lightContainer]}>
      <Text style={[styles.header, theme === 'dark' ? styles.darkHeader : styles.lightHeader]}>Carrinho de Compras</Text>
      <FlatList
        data={cart}
        renderItem={({ item }) => (
          <View style={[styles.item, theme === 'dark' ? styles.darkItem : styles.lightItem]}>
            <Text style={[styles.title, theme === 'dark' ? styles.darkTitle : styles.lightTitle]}>{item.name}</Text>
            <Text style={[styles.price, theme === 'dark' ? styles.darkPrice : styles.lightPrice]}>Preço: R$ {item.price.toFixed(2)}</Text>
            <TouchableOpacity style={[styles.removeButton, theme === 'dark' ? styles.darkRemoveButton : styles.lightRemoveButton]} onPress={() => removeFromCart(item.uniqueId)}>
              <Text style={styles.removeButtonText}>Remover</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.uniqueId}
      />
      <Text style={[styles.total, theme === 'dark' ? styles.darkTotal : styles.lightTotal]}>Total: R$ {getTotalPrice()}</Text>
      <TouchableOpacity 
        style={[styles.button, theme === 'dark' ? styles.darkButton : styles.lightButton]}
        onPress={() => navigation.navigate('Checkout', { cart, total: getTotalPrice() })}
      >
        <Text style={styles.buttonText}>Finalizar Pedido</Text>
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
    fontSize: 28,
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
  removeButton: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  lightRemoveButton: {
    backgroundColor: '#ff1744',
  },
  darkRemoveButton: {
    backgroundColor: '#ff5555',
  },
  removeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  total: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  lightTotal: {
    color: '#1e90ff',
  },
  darkTotal: {
    color: '#ccc',
  },
  button: {
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  lightButton: {
    backgroundColor: '#1e90ff',
  },
  darkButton: {
    backgroundColor: '#555',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
