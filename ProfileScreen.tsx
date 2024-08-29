import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Icon} from './Src/Compenets/Icon';
import CustomButton from './Src/Compenets/ButtonComponent';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.component}>
        <TouchableOpacity onPress={()=> navigation.goBack('UploadImageScreen')}>
          <Icon.AntDesign name="left" size={30} color={'#F17808'} />
        </TouchableOpacity>
        <Text style={styles.forgottext}>Upload Your Photo {'\n'}Profile</Text>
        <Text style={styles.text}>
          This data will be displayed in your Account {'\n'}profile for Security
        </Text>

        <View style={styles.imageContainer}>
          <Image
            source={require('./Assets/Images/profile.png')}
            style={styles.image}
          />
        </View>

        <View style={styles.button}>
          <CustomButton title="Next"  onPress={()=> navigation.navigate('ReadyScreen') } style={styles.nextbutton} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  component: {
    marginLeft: 30,
    marginBottom: 30,
  },
  forgottext: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#fff',
    marginVertical: 20,
  },
  text: {
    fontSize: 14,
    color: '#aaa',
    marginBottom: 20,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 300,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    borderWidth: 3,
    marginTop: 50,
    marginRight: 10,
  },
  nextbutton: {
    marginTop: 160,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
