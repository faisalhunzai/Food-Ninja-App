import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Icon} from './Src/Compenets/Icon';
import CustomButton from './Src/Compenets/ButtonComponent';
import { useNavigation } from '@react-navigation/native';

export default function PaymentScreen() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.component}>
        <TouchableOpacity onPress={()=> navigation.goBack('CreateIdScreen')}>
          <Icon.AntDesign name="left" size={30} color={'#F17808'} />
        </TouchableOpacity>
        <Text style={styles.forgottext}>Payment Method</Text>
        <Text style={styles.text}>
          This data will be displayed in your Account {'\n'}profile for Security
        </Text>

        <View style={styles.maincard}>
          <View style={styles.card}>
            <Icon.MaterialIcons name="payment" size={25} color={'white'} />
            <Text style={styles.paypaytext}>PayPay</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.paypaytext}>VISA</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.paypaytext}>PaYoneer</Text>
          </View>
        </View>

       
        <View style={styles.button}>
                <CustomButton
                    onPress={()=> navigation.navigate('UploadImageScreen')}
                    title='Next'
                    style={styles.nextbutton}
                />
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
    width: 'auto',
    height: 80,
    backgroundColor: '#333',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  paypaytext: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  maincard :{
    gap: 14
  },
  nextbutton :{
    marginTop :160,
},
button:{
    justifyContent :'center',
    alignItems :'center'
}
});
