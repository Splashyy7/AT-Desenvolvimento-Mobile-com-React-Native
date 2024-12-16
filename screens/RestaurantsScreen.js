import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

const mockRestaurants = [
  { id: '1', name: 'Galeto 183', address: 'R. Santana, 183', description: "Ambiente pode ser abafado, mas a comida supera esse detalhe" },
  { id: '2', name: 'Restaurante Santo Scenarium', address: 'R. do Lavradio, 36', description: "Indico a picanha e o risoto de camarões que foram sensacionais" },
  { id: '3', name: 'Cais do Oriente', address: 'R. Visc. de Itaboraí, 8', description: "Lugar aconchegante, equipe prestativa e atenciosa, comida deliciosa." },
  { id: '4', name: 'Lilia', address: 'R. do Senado, 45', description: "As opções do menu fogem do trivial, chegando até alternativas veganas." },
  { id: '5', name: 'Hachiko', address: 'Tv. do Paço, 10', description: "comida fresca, serviço legal, ambiente reservado." },
  { id: '6', name: 'Bistrô Ouvidor', address: 'R. do Ouvidor, 52', description: "Bistrô charmosinho, com comidas saborosas e variadas." },
  { id: '7', name: 'Orla 21 Rooftop', address: 'Av. Alm. Silvio de Noronha, 365', description: "O local é excelente, comida, ambiente e atendimento impecável." },
  { id: '8', name: 'Casa Paladino', address: 'R. Uruguaiana, 224', description: "Bar tradicional, chopp gelado e uma excelente comida." },
  { id: '9', name: 'Restaurante Casa Urich', address: 'R. São José, 50 A', description: "Excelente experiência, comida com ótimo paladar, bom preço." },
  { id: '10', name: 'Giuseppe Italiano', address: 'R. Sete de Setembro, 65', description: "O ambiente é lindo, sofisticado, mas a comida deixou muito a desejar." },
];

export default function RestaurantsScreen({ navigation, theme }) {
  const renderItem = ({ item }) => (
    <View style={[styles.card, theme === 'dark' ? styles.darkCard : styles.lightCard]}>
      <Text style={[styles.title, theme === 'dark' ? styles.darkTitle : styles.lightTitle]}>{item.name}</Text>
      <Text style={[styles.address, theme === 'dark' ? styles.darkAddress : styles.lightAddress]}>{item.address}</Text>
      <TouchableOpacity
        style={[styles.button, theme === 'dark' ? styles.darkButton : styles.lightButton]}
        onPress={() => navigation.navigate('RestaurantDetails', { restaurant: item })}
      >
        <Text style={styles.buttonText}>Ver detalhes</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={[styles.container, theme === 'dark' ? styles.darkContainer : styles.lightContainer]}>
      <Image
        source={require('../imagens/mapa.png')}
        style={styles.mapImage}
      />
      <FlatList
        data={mockRestaurants}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  lightContainer: {
    backgroundColor: '#e6f2ff',
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  mapImage: {
    width: '100%',
    height: 200,
    marginBottom: 16,
    borderRadius: 10,
  },
  card: {
    padding: 16,
    marginVertical: 8,
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
    marginBottom: 5,
  },
  lightTitle: {
    color: 'white',
  },
  darkTitle: {
    color: '#ddd',
  },
  address: {
    fontSize: 16,
    marginBottom: 10,
  },
  lightAddress: {
    color: 'white',
  },
  darkAddress: {
    color: '#ccc',
  },
  button: {
    marginTop: 8,
    padding: 10,
    borderRadius: 8,
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
    fontWeight: 'bold',
    fontSize: 16,
  },
});
