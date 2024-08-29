import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Icon} from '../Compenets/Icon';
import TextInputComponent from '../Compenets/TextInputComponent';
import CustomButton from '../Compenets/ButtonComponent';
import { useNavigation } from '@react-navigation/native';

export default function ResetPasswordScreen() {
    const navigation = useNavigation();
  const [password, setPassword] = useState<string>('');
  return (
    <View style={styles.cantainer}>
      <TouchableOpacity
        style={styles.backbutton}
        onPress={() => navigation.goBack('ForgotPassworld')}>
        <Icon.AntDesign name="left" size={30} color={'#F17808'} />
      </TouchableOpacity>

      <Text style={styles.forgottext}>Reset Password {'\n'} here</Text>

      <Text style={styles.text}>
        Select which contact details we should{'\n'} use to reset your password.
      </Text>

      <TextInputComponent
        placeholder="New password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        style={styles.input}
      />

      <TextInputComponent
        placeholder="Confirm password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        style={styles.input}
      />

      <View style={styles.button}>
        <CustomButton
          title="Next"
          style={styles.nextbutton}
          onPress={() => navigation.navigate('CongartsScreen')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cantainer: {
    flex: 1,
    alignContent: 'center',
    backgroundColor: 'black',
    padding: 20,
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
    width: 'auto',
    height: 'auto',
  },
  button: {
    flex :1,
    justifyContent :'flex-end',
    alignItems:'center',
  },
  nextbutton: {
    width :'60%',
    textAlign: 'center',
    color: '#fff',
    
  },
});
