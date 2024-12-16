import { View, Text, StyleSheet } from 'react-native';

export default function RestaurantDetailsScreen({ route }) {
  const { restaurant } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{restaurant.name}</Text>
      <Text style={styles.address}>{restaurant.address}</Text>
      <Text style={styles.description}>{restaurant.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6f2ff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e90ff',
    marginBottom: 8,
    textAlign: 'center',
  },
  address: {
    fontSize: 20,
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
  },
});
