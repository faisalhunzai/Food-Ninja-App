import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Icon} from '../Compenets/Icon';
import CustomButton from '../Compenets/ButtonComponent';
import {  useNavigation } from '@react-navigation/native';

export default function OrderDateils() {
    const navigation =useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <TouchableOpacity onPress={()=> navigation.goBack()}>
          <Icon.AntDesign name="left" size={30} color={'#F17808'} style={styles.backicon}/>
        </TouchableOpacity>
        <Text style={styles.text}>Order details</Text>

        <View style={styles.containercard}>
          <View style={styles.crad}>
            <View>
              <Image
                source={require('../../Assets/Images/image1.jpg')}
                style={styles.image}
              />
            </View>
            <View>
              <Text style={styles.cardtext}>Spacy fresh crab</Text>
              <Text style={styles.paratext}>Waroenk Kita</Text>
              <Text style={styles.pricetext}>$ 35</Text>
            </View>

            <View style={styles.icons}>
              <Icon.AntDesign name="minussquareo" size={20} color={'green'} />
              <Text style={styles.plus}>1</Text>
              <Icon.AntDesign name="plussquareo" size={20} color={'green'} />
            </View>
          </View>

          <View style={styles.crad}>
            <View>
              <Image
                source={require('../../Assets/Images/image2.jpg')}
                style={styles.image}
              />
            </View>
            <View>
              <Text style={styles.cardtext}>Spacy fresh crab</Text>
              <Text style={styles.paratext}>Waroenk Kita</Text>
              <Text style={styles.pricetext}>$ 35</Text>
            </View>

            <View style={styles.icons}>
              <Icon.AntDesign name="minussquareo" size={20} color={'green'} />
              <Text style={styles.plus}>1</Text>
              <Icon.AntDesign name="plussquareo" size={20} color={'green'} />
            </View>
          </View>

          <View style={styles.crad}>
            <View>
              <Image
                source={require('../../Assets/Images/image3.jpg')}
                style={styles.image}
              />
            </View>
            <View>
              <Text style={styles.cardtext}>Spacy fresh crab</Text>
              <Text style={styles.paratext}>Waroenk Kita</Text>
              <Text style={styles.pricetext}>$ 35</Text>
            </View>

            <View style={styles.icons}>
              <Icon.AntDesign name="minussquareo" size={20} color={'green'} />
              <Text style={styles.plus}>1</Text>
              <Icon.AntDesign name="plussquareo" size={20} color={'green'} />
            </View>
          </View>
        </View>

        <View style={styles.footercard}>
          <View style={styles.flex}>
            <Text style={styles.cardtext}>Sub-Totl </Text>
            <Text style={styles.cardtext}> 20$</Text>
          </View>
          <View style={styles.flex}>
            <Text style={styles.cardtext}>Delivery Charge</Text>
            <Text style={styles.cardtext}>10$</Text>
          </View>

          <View style={styles.flex}>
            <Text style={styles.cardtext}>Discount</Text>
            <Text style={styles.cardtext}>20$</Text>
          </View>

          <View>
            <CustomButton title="Place My Oder" onPress={()=> navigation.navigate('ConfirmOrder')} style={styles.button} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    gap: 10,
  },
  container1 :{
    justifyContent :'center',
    alignItems :'center',
    alignSelf :'center'
  },
  crad: {
    width: 300,
    height: 100,
    backgroundColor: '#222831',
    borderRadius: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    marginTop: 20,
    marginLeft: 30,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight :150,
    marginTop :30
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginTop: 20,
  },
  containercard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cardtext: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 20,
  },
  backicon:{
   marginRight :200
  },
  paratext: {
    fontSize: 14,
    fontWeight: '100',
  },
  pricetext: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
  },
  plus: {
    fontSize: 20,
  },
  icons: {
    flexDirection: 'row',
    gap: 10,
  },
  footercard: {
    width : 300,
    height :200,
    backgroundColor: '#32E0C4',
    borderRadius: 20,
    marginTop : 80
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: 'auto',
    backgroundColor: '#EEEDEB',
    marginTop: 20,
  },
});
