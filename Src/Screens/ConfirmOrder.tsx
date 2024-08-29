import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import {Icon} from '../Compenets/Icon';
import {TextInput} from 'react-native';
import {useState} from 'react';
import CustomButton from '../Compenets/ButtonComponent';
import {useNavigation} from '@react-navigation/native';

export default function ConfirmOrder() {
  const navigation = useNavigation();
  const [number, setnumber] = useState();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Icon.AntDesign name="left" size={30} color={'#F17808'} />
      </TouchableOpacity>
      <Text style={styles.text}>Order details</Text>

      <View style={styles.containerCard}>
        <View style={styles.card}>
          <View style={styles.flexcard}>
            <Text>Deliver TO</Text>
            <TouchableOpacity>
              <Text>Edit</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.cardInfo}>
            <Icon.Entypo
              name="location"
              size={40}
              color={'yellow'}
              style={{marginLeft: 30}}
            />
            <Text style={styles.locationtext}>
              4517 Washington Ave.Manches{'\n'}.Kentucky
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.containerCard}>
        <View style={styles.card}>
          <View style={styles.flexcard}>
            <Text>Deliver TO</Text>
            <TouchableOpacity>
              <Text>Edit</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.cardInfo}>
            <Text style={styles.locationtext}>PayPal</Text>
            <TextInput
              value={number}
              placeholder="212163528464******"
              onChange={number}
            />
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
          <CustomButton
            title="Place My Oder"
            onPress={() => navigation.navigate('MapScreen')}
            style={styles.button}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // alignSelf: 'center',
    backgroundColor: 'black',
    gap: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    margin: 30,
  },
  backButton: {
    alignSelf: 'flex-start',
  },

  containerCard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  flexcard: {
    flexDirection: 'row',
    backgroundColor:"red",
    justifyContent: 'space-between',
  },
  card: {
    // alignItems: 'center',
    padding: 20,
    backgroundColor: '#222831',
    borderRadius: 10,
    flex: 1,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  cardInfo: {
    flexDirection: 'row',
    gap: 80,
    marginTop: 20,
  },
  cardText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
  },
  locationtext: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 15,
  },
  quantity: {
    fontSize: 20,
    marginHorizontal: 10,
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
    width: 300,
    height: 200,
    backgroundColor: '#32E0C4',
    borderRadius: 20,
    marginTop: 80,
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
  cardtext: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 20,
  },
});
