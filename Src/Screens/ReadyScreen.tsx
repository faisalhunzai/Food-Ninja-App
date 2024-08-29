import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomButton from '../Compenets/ButtonComponent';
import {useNavigation} from '@react-navigation/native';

export default function ReadyScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Congrats!</Text>
      <Text style={styles.passwordtext}>Your Profile is Ready To Use</Text>

      <View style={styles.button}>
        <CustomButton
          title="Try Order"
          onPress={() => navigation.navigate('OrderScreen')}
          style={styles.nextbutton}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  text: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'green',
    marginTop: 240,
  },
  passwordtext: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  nextbutton: {},
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
  },
});
