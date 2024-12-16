import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import ModalSelector from 'react-native-modal-selector';

export default function CheckoutScreen({ route, navigation, setOrders, theme }) {
  const { cart, total } = route.params;
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [error, setError] = useState('');

  const handlePlaceOrder = () => {
    if (address === '' || paymentMethod === '') {
      setError('Por favor, preencha todos os campos obrigatórios.');
    } else {
      setError('');
      const newOrder = {
        id: Date.now().toString(),
        cart,
        total,
        address,
        paymentMethod,
      };
      setOrders(prevOrders => [...prevOrders, newOrder]);
      navigation.navigate('Home');
    }
  };

  const paymentMethods = [
    { key: 'dinheiro', label: 'Dinheiro' },
    { key: 'pix', label: 'Pix' },
    { key: 'cartao', label: 'Cartão de Crédito/Débito' },
  ];

  return (
    <View style={[styles.container, theme === 'dark' ? styles.darkContainer : styles.lightContainer]}>
      <Text style={[styles.header, theme === 'dark' ? styles.darkHeader : styles.lightHeader]}>Checkout</Text>
      <FlatList
        data={cart}
        renderItem={({ item }) => (
          <View style={[styles.item, theme === 'dark' ? styles.darkItem : styles.lightItem]}>
            <Text style={[styles.title, theme === 'dark' ? styles.darkTitle : styles.lightTitle]}>{item.name}</Text>
            <Text style={[styles.price, theme === 'dark' ? styles.darkPrice : styles.lightPrice]}>R$ {item.price.toFixed(2)}</Text>
          </View>
        )}
        keyExtractor={(item) => item.uniqueId}
      />
      <Text style={[styles.total, theme === 'dark' ? styles.darkTotal : styles.lightTotal]}>Total: R$ {total}</Text>
      <TextInput
        style={[styles.input, theme === 'dark' ? styles.darkInput : styles.lightInput]}
        placeholder="Endereço de Entrega"
        value={address}
        onChangeText={setAddress}
        placeholderTextColor={theme === 'dark' ? '#aaa' : '#888'}
      />
      <View style={styles.pickerWrapper}>
        <ModalSelector
          data={paymentMethods}
          initValue="Selecione um método de pagamento"
          onChange={(option) => setPaymentMethod(option.key)}
          style={[styles.picker, theme === 'dark' ? styles.darkPicker : styles.lightPicker]}
          initValueTextStyle={{ color: theme === 'dark' ? 'white' : 'black' }}
          selectTextStyle={{ color: theme === 'dark' ? 'white' : 'black' }}
        />
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TouchableOpacity 
        style={[styles.button, theme === 'dark' ? styles.darkButton : styles.lightButton]}
        onPress={handlePlaceOrder}
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
    fontSize: 20,
    marginBottom: 10,
  },
  lightPrice: {
    color: 'white',
  },
  darkPrice: {
    color: '#ccc',
  },
  total: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  lightTotal: {
    color: '#1e90ff',
  },
  darkTotal: {
    color: '#ccc',
  },
  input: {
    height: 40,
    borderWidth: 1,
    marginBottom: 15,
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
  pickerWrapper: {
    height: 50,
    justifyContent: 'center',
    marginBottom: 15,
  },
  picker: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'gray',
  },
  lightPicker: {
    borderColor: 'gray',
  },
  darkPicker: {
    borderColor: '#555',
  },
  button: {
    marginTop: 15,
    padding: 15,
    borderRadius: 10,
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
    fontSize: 20,
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    marginBottom: 15,
    textAlign: 'center',
  },
});
