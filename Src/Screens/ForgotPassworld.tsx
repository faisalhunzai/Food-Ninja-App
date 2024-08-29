import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Icon } from '../Compenets/Icon';
import CustomButton from '../Compenets/ButtonComponent';
import { TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backbutton} onPress={() => navigation.goBack('LoginScreen')}>
        <Icon.AntDesign name="left" size={30} color={'#F17808'} />
      </TouchableOpacity>

      <Text style={styles.forgottext}>Forgot Password?</Text>

      <Text style={styles.text}>
        Select which contact details we should use to reset your password.
      </Text>

      <View style={styles.input}>
        <Icon.AntDesign
          name="message1"
          size={30}
          color={'green'}
          style={{ marginLeft: 30 }}
        />
        <View style={styles.viatext}>
          <Text>Via SMS</Text>
          <TextInput placeholder="**** **** *** 3452" />
        </View>
      </View>

      <View style={styles.input}>
        <Icon.AntDesign
          name="mail"
          size={30}
          color={'green'}
          style={{ marginLeft: 30 }}
        />
        <View style={styles.viatext}>
          <Text>Via Email</Text>
          <TextInput placeholder="example@email.com" />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <CustomButton title="Next" style={styles.nextbutton} onPress={() => navigation.navigate('ResetPasswordScreen')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10,
    
  },
  backbutton: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(196, 113, 72, 0.25)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
   
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
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#222831',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  viatext: {
    marginLeft: 20,
    color: '#fff',
  },
  buttonContainer: {
    flex :1,
    alignItems: 'center',
    justifyContent: 'flex-end', 
    paddingBottom: 20, 
  },
  nextbutton: {
    width: '60%', 
    color: '#fff',
  },
});
