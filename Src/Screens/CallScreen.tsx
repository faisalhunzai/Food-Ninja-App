import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Icon } from '../Compenets/Icon';
import { useNavigation } from '@react-navigation/native';

const CallScreen = () => {
    const navigation= useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.imagecard}>
        <Image
          source={require('../../Assets/Images/profile.png')}
          style={styles.image}
        />
      </View>
      <Text style={styles.nametext}>Courtney Henry</Text>
      <Text style={styles.ringingText}>Ringing</Text>

      <View style={styles.icons}>
        <TouchableOpacity>
          <Icon.FontAwesome name="video-camera" size={60} color={'green'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.goBack()}>
          <Icon.AntDesign name="closecircle" size={60} color={'red'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CallScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagecard: {
    padding: 5,
    backgroundColor: 'green',
    borderRadius: 80,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 90,
  },
  nametext: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 30,
  },
  ringingText: {
    fontSize: 20,
    color: 'white',
  },
  icons: {
    flexDirection: 'row',
    marginTop :150,
    gap: 40,
  },
});
