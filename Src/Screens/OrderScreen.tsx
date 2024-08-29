import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomButton from '../Compenets/ButtonComponent';
import {useNavigation} from '@react-navigation/native';

export default function OrderScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack('CongratsScreen')}>
        <AntDesign
          name="left"
          size={30}
          color={'#F17808'}
          style={styles.icon}
        />
      </TouchableOpacity>

      <View style={{alignItems: 'center', marginTop: 30}}>
        <View style={styles.crad}>
          <Text style={styles.text}>Special Deal For {'\n'}October</Text>
          <CustomButton onPress={()=> navigation.navigate('OrderDateils')} title="Order Now" style={styles.button} />
        </View>
      </View>

      <View style={{alignItems: 'center', marginTop: 30}}>
        <View style={styles.crad}>
          <Text style={styles.text}>Special Deal For {'\n'}October</Text>
          <CustomButton title="Order Now" style={styles.button} onPress={()=> navigation.navigate('ReduxScreen')}/>
        </View>
        <View style={styles.button1}>
          <CustomButton title="Check out" style={styles.nextbutton} onPress={()=> {}}/>
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
  icon: {
    marginLeft: 20,
    marginTop: 20,
  },
  crad: {
    width: 300,
    height: 120,
    backgroundColor: '#88D66C',
    alignItems: 'center',
    borderRadius: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 130,
    marginTop: 20,
  },
  button: {
    width: 'auto',
    height: 'auto',
    marginLeft: 80,
    marginTop: 10,
    color: 'green',
    backgroundColor: 'green',
  },
  nextbutton: {
    marginTop: 260,
  },
  button1: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
