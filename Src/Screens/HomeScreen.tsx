import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Icon} from '../Compenets/Icon';
import CustomButton from '../Compenets/ButtonComponent';
import {useNavigation} from '@react-navigation/native';

const data = [
  {
    image:
      'https://images.pexels.com/photos/1625235/pexels-photo-1625235.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Vegan Resto',
    Description: '12 mins',
  },
  {
    image:
      'https://images.pexels.com/photos/1309583/pexels-photo-1309583.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Healthy Food',
    Description: '8 mins',
  },
  {
    image:
      'https://images.pexels.com/photos/1625235/pexels-photo-1625235.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Vegan Resto',
    Description: '12 mins',
  },
];

const datas = [
  {
    image:
      'https://images.pexels.com/photos/1343504/pexels-photo-1343504.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Vegan Resto',
    Description: '12 mins',
  },
  {
    image:
      'https://images.pexels.com/photos/25904476/pexels-photo-25904476/free-photo-of-table-with-main-courses-and-cakes.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Healthy Food',
    Description: '8 mins',
  },
  {
    image:
      'https://images.pexels.com/photos/14913583/pexels-photo-14913583.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Good Food',
    Description: '12 mins',
  },
  {
    image:
      'https://images.pexels.com/photos/1625235/pexels-photo-1625235.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Vegan Resto',
    Description: '12 mins',
  },
  {
    image:
      'https://images.pexels.com/photos/1309583/pexels-photo-1309583.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Healthy Food',
    Description: '8 mins',
  },
  {
    image:
      'https://images.pexels.com/photos/1625235/pexels-photo-1625235.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Vegan Resto',
    Description: '12 mins',}
];

export default function HomeScreen() {
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const navigation = useNavigation();

  const handleSearch = (text) => {
    setSearch(text);
    if (text) {
      const newData = data.filter((item) => {
        return item.title.toLowerCase().includes(text.toLowerCase());
      });
      setFilteredData(newData);
    } else {
      setFilteredData(data);
    }
  };

  const renderItem = ({item}) => (
    <View style={styles.renderCard}>
      <Image
        source={{uri: item.image}}
        style={styles.imageCard}
        resizeMode={'contain'}
      />
      <Text style={styles.titleText}>{item.title}</Text>
      <Text style={styles.description}>{item.Description}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Find Your{'\n'}Favorite Food</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('NotificationScreen')}
          style={styles.iconButton}>
          <Icon.Ionicons
            name="notifications-outline"
            size={30}
            color={'green'}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <Icon.AntDesign name="search1" size={30} color={'white'} />
        <TextInput
          value={search}
          onChangeText={handleSearch}
          style={styles.input}
          placeholder="What do you want to order?"
          placeholderTextColor="#888"
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('SectionScreen')}
          style={styles.iconButton}>
          <Icon.FontAwesome name="list-ul" size={30} color={'white'} />
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <Image
          source={require('../../Assets/Images/ice-cream.png')}
          style={styles.image}
        />
        <View style={styles.flexCard}>
          <Text style={styles.cardText}>Special Deal For {'\n'}October</Text>
          <CustomButton title="Buy Now" style={styles.button} onPress={()=>{}} />
        </View>
      </View>
      <View style={styles.heading}>
        <Text style={styles.head}>Nearby Restaurants</Text>
        <TouchableOpacity>
          <Text style={{color: '#C5705D'}}>View More</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        horizontal={true}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
      />

      <View style={styles.heading}>
        <Text style={styles.head}>Popular Restaurants</Text>
      </View>
      <FlatList
        data={datas}
        renderItem={renderItem}
        contentContainerStyle={{flexDirection: 'row', flexWrap: 'wrap'}}
        horizontal={false}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 16,
  },
  iconButton: {
    width: 50,
    height: 50,
    backgroundColor: '#222831',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 33,
    fontWeight: 'bold',
    color: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#222831',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 10,
    width: '100%',
    justifyContent: 'space-between',
  },
  input: {
    height: 40,
    paddingHorizontal: 10,
    color: 'white',
    width: '70%',
  },
  card: {
    width: '100%',
    height: 150,
    backgroundColor: '#32E0C4',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
  },
  titleText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  image: {
    width: 80,
    height: 80,
  },
  cardText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  button: {
    width: 'auto',
    height: 'auto',
    marginTop: 10,
  },
  flexCard: {
    flexDirection: 'column',
    marginLeft: 30,
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
  head: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  renderCard: {
    backgroundColor: '#222831',
    borderRadius: 8,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 7,
    elevation: 2,
    alignItems: 'center',
    width: 150,
  },
  imageCard: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
  },
});
