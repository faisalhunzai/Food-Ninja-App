import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Icon} from '../Compenets/Icon';
import {useNavigation} from '@react-navigation/native';

export default function MassageScreen() {
  const [message, setMessage] = useState('');
  const navigation = useNavigation();

  const handleSend = () => {
    if (message.trim()) {
      console.log('Message sent:', message);
      setMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={()=> navigation.goBack('ChatScreen')}>
        <Icon.AntDesign name="left" size={30} color={'#F17808'} />
      </TouchableOpacity>

      <View style={styles.chatCard}>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/838413/pexels-photo-838413.jpeg?auto=compress&cs=tinysrgb&w=600',
          }}
          style={styles.image}
        />
        <View style={{flex: 1}}>
          <Text style={styles.nameText}>Anamwp</Text>
          <Text style={styles.messageText}>online</Text>
        </View>

        <TouchableOpacity onPress={()=> navigation.navigate('CallScreen')}>
          <Icon.Feather name="phone-call" size={30} color={'white'} />
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Type a message"
          placeholderTextColor="#b0b0b0"
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Icon.Feather name="send" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  backButton: {
    backgroundColor: 'rgba(196, 113, 72, 0.25)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 7,
    alignSelf: 'flex-start',
  },
  chatCard: {
    width: '100%',
    backgroundColor: '#222831',
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    marginBottom: 20,
    marginTop: 40,
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
  messageText: {
    fontSize: 14,
    color: '#b0b0b0',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#222831',
    borderRadius: 25,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 'auto',
  },
  textInput: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
    paddingHorizontal: 10,
  },
  sendButton: {
    padding: 10,
    backgroundColor: '#F17808',
    borderRadius: 20,
  },
});
