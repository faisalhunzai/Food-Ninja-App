import React, {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import TextInputComponent from '../Compenets/TextInputComponent';
import CustomButton from '../Compenets/ButtonComponent';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {

    const navigation = useNavigation();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../Assets/Images/logo.png')}
      />
      <Text style={styles.foodtext}>FoodNinja</Text>
      <Text style={styles.text}>Deliver Favorite Food</Text>

      <View style={{marginTop :60}}>
        <TextInputComponent
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInputComponent
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
      </View>
      <Text style={styles.paratext}>Or Continue with</Text>

      <View style={styles.buttons}>
        <Image
          source={require('../../Assets/Images/facebook.png')}
          style={styles.facebookimage}
        />
        <CustomButton title="facebook"  style={styles.facebookbtn}/>

        <Image
          source={require('../../Assets/Images/email.png')}
          style={styles.facebookimage}
        />
        <CustomButton title="Gmail" onPress={()=> navigation.navigate('SignScreen')} style={styles.facebookbtn} />
      </View>

      <CustomButton
      onPress={()=> navigation.navigate('ForgotPasswordScreen')}
       title='Forgot your password?'
       style={styles.forgotbutton}
      />
      <CustomButton
      onPress={()=> navigation.navigate('bottomTabBar')}
       title='Login'
       style={styles.loginbutton}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    gap :10
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  foodtext: {
    color: '#41B06E',
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 10,
  },
  paratext: {
    fontWeight: 'bold',
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  facebookimage: {
    width: 20,
    height: 20,
    left :20,
    marginTop :10
  },
  facebookbtn:{
    width : 120,
    backgroundColor :'#222831'
  },
  forgotbutton :{
    backgroundColor : 'transparent',
    color :'#41B06E'
  },
  loginbutton :{
   fontSize : 15,
   fontWeight :'bold',
    borderRadius :10,
  
  }
});
