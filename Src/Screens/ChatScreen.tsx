import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Icon } from '../Compenets/Icon'; 
import { useNavigation } from '@react-navigation/native';

const data = [
  { 
    image: 'https://images.pexels.com/photos/838413/pexels-photo-838413.jpeg?auto=compress&cs=tinysrgb&w=600',
    name: 'Anamwp',
    time: '20.00',
    title: 'Your Order Just Arrived',
    onPress: (navigation) => navigation.navigate('MassageScreen')
  },
  {
    image: 'https://images.pexels.com/photos/3779760/pexels-photo-3779760.jpeg?auto=compress&cs=tinysrgb&w=600',
    name: 'Guy Hawkins',
    time: '20.00',
    title: 'Your Order Just Arrived',
  },
  {
    image: 'https://images.pexels.com/photos/1031081/pexels-photo-1031081.jpeg?auto=compress&cs=tinysrgb&w=600',
    name: 'Leslie Alexander',
    time: '20.00',
    title: 'Your Order Just Arrived',
  },
];

export default function ChatScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon.AntDesign name="left" size={30} color={'#F17808'}/>
      </TouchableOpacity>
      <Text style={styles.headerText}>Chat</Text>
      <View>
        {data.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.chatCard} 
            onPress={() => item.onPress && item.onPress(navigation)} 
          >
            <Image
              source={{ uri: item.image }}
              style={styles.image}
            />
            <View style={{ flex: 1 }}>
              <Text style={styles.nameText}>{item.name}</Text>
              <Text style={styles.timeText}>{item.title}</Text>
            </View>
            <Text style={styles.messageText}>{item.time}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    paddingHorizontal: 16,
    gap: 20,
  },
  backButton: {
    backgroundColor: 'rgba(196, 113, 72, 0.25)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 7,
    alignSelf: 'flex-start',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F17808',
    alignSelf: 'flex-start',
  },
  chatCard: {
    width: '100%',
    backgroundColor: '#222831',
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 10,
    marginRight: 10,
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  timeText: {
    fontSize: 12,
    color: '#b0b0b0',
  },
  messageText: {
    color: '#b0b0b0',
  },
});
