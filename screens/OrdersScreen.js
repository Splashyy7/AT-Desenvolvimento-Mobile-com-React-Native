import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import Toast from 'react-native-toast-message';

export default function OrdersScreen({ orders, setOrders, theme }) {
  useEffect(() => {
    if (orders.length > 0) {
      const lastOrder = orders[orders.length - 1];
      setTimeout(() => {
        Toast.show({
          type: 'success',
          text1: 'Pagamento aprovado e pedido em preparo!',
          text2: `Pedido #${orders.length} está sendo preparado.`,
        });
      }, 5000);
    }
  }, [orders]);

  const handleCancelOrder = (orderId) => {
    Alert.alert(
      "Cancelar Pedido",
      "Quer mesmo cancelar esse pedido?",
      [
        {
          text: "Não",
          style: "cancel"
        },
        { text: "Sim", onPress: () => setOrders(prevOrders => prevOrders.filter(order => order.id !== orderId)) }
      ]
    );
  };

  const renderItem = ({ item }) => (
    <View style={[styles.card, theme === 'dark' ? styles.darkCard : styles.lightCard]}>
      <Text style={[styles.title, theme === 'dark' ? styles.darkTitle : styles.lightTitle]}>Pedido #{orders.indexOf(item) + 1}</Text>
      <Text style={[styles.text, theme === 'dark' ? styles.darkText : styles.lightText]}>Endereço de Entrega: {item.address}</Text>
      <Text style={[styles.text, theme === 'dark' ? styles.darkText : styles.lightText]}>Método de Pagamento: {item.paymentMethod}</Text>
      <Text style={[styles.text, theme === 'dark' ? styles.darkText : styles.lightText]}>Total: R$ {item.total}</Text>
      <FlatList
        data={item.cart}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={[styles.itemText, theme === 'dark' ? styles.darkItemText : styles.lightItemText]}>{item.name}</Text>
            <Text style={[styles.itemText, theme === 'dark' ? styles.darkItemText : styles.lightItemText]}>R$ {item.price.toFixed(2)}</Text>
          </View>
        )}
        keyExtractor={(item) => item.uniqueId}
      />
      <TouchableOpacity 
        style={[styles.cancelButton, theme === 'dark' ? styles.darkCancelButton : styles.lightCancelButton]}
        onPress={() => handleCancelOrder(item.id)}
      >
        <Text style={styles.cancelButtonText}>Cancelar Pedido</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={[styles.container, theme === 'dark' ? styles.darkContainer : styles.lightContainer]}>
      <FlatList
        data={orders}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
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
  card: {
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  lightCard: {
    backgroundColor: '#1e90ff',
  },
  darkCard: {
    backgroundColor: '#555',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  lightTitle: {
    color: 'white',
  },
  darkTitle: {
    color: '#ddd',
  },
  text: {
    fontSize: 15,
    marginBottom: 5,
  },
  lightText: {
    color: 'white',
  },
  darkText: {
    color: '#ccc',
  },
  item: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemText: {
    fontSize: 18,
  },
  lightItemText: {
    color: 'white',
  },
  darkItemText: {
    color: '#ccc',
  },
  cancelButton: {
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  lightCancelButton: {
    backgroundColor: '#ff1744',
  },
  darkCancelButton: {
    backgroundColor: '#ff5555',
  },
  cancelButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
