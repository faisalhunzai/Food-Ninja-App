import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Icon} from './Src/Compenets/Icon';
import CustomButton from './Src/Compenets/ButtonComponent';
import { useNavigation } from '@react-navigation/native';

export default function UploadImageScreen() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.component}>
        <TouchableOpacity onPress={()=> navigation.goBack('PaymentScreen')}>
          <Icon.AntDesign name="left" size={30} color={'#F17808'} />
        </TouchableOpacity>
        <Text style={styles.forgottext}>Upload Your Photo {'\n'}Profile</Text>
        <Text style={styles.text}>
          This data will be displayed in your Account {'\n'}profile for Security
        </Text>

        <View style={styles.maincard}>
          <View style={styles.card}>
            <TouchableOpacity>
              <Image
                source={require('./Assets/Images/upload.png')}
                style={styles.image}
              />
              <Text style={styles.paypaytext}>From Gallery</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.maincard}>
          <View style={styles.card}>
            <TouchableOpacity>
              <Image
                source={require('./Assets/Images/upload.png')}
                style={styles.image}
              />
              <Text style={styles.paypaytext}>From Camera</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.button}>
          <CustomButton title="Next" onPress={()=> navigation.navigate('ProfileScreen')}  style={styles.nextbutton} />
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
  backbutton: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(196, 113, 72, 0.25)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
  component: {
    justifyContent: 'center',
    alignSelf: 'center',
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
  card: {
    width: 270,
    height: 120,
    backgroundColor: '#333',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paypaytext: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  maincard: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  image: {
    width: 60,
    height: 60,
    marginLeft: 10,
  },
  nextbutton: {
    marginTop: 160,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
