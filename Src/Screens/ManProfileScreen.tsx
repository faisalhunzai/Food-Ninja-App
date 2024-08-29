import React, { useEffect, useRef } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Text,
  Image,
} from 'react-native';
import { Icon } from '../Compenets/Icon';
import ActionSheet, { ActionSheetRef, SheetManager } from "react-native-actions-sheet";
import { Colors } from 'react-native/Libraries/NewAppScreen';

const data = [
  {
    image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Spacy fresh crab',
    text: 'Waroenk Kita',
    price: '$35',
    button: 'Buy Again',
    color: 'rgba(107, 216, 126, 0.8)',
  },
  {
    image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Spacy fresh crab',
    text: 'Waroenk Kita',
    price: '$35',
    button: 'Buy Again',
    color: 'rgba(107, 216, 126, 0.8)',
  },
  {
    image: 'https://images.pexels.com/photos/1294943/pexels-photo-1294943.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Spacy fresh crab',
    text: 'Waroenk Kita',
    price: '$35',
    button: 'Buy Again',
    color: 'rgba(107, 216, 126, 0.8)',
  },
];

export default function App() {
  // const actionSheetRef = useRef<ActionSheetRef>(null);

  useEffect(() => {
    SheetManager.show("sheet")  
    // actionSheetRef.current?.show();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../Assets/Images/profile1.jpg')}
        style={{ flex: 1 }}>
        <ActionSheet id="sheet" containerStyle={styles.component} snapPoints={[50,70  ]}
        gestureEnabled
        >
            <View style={{gap :20}}>
          <View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Member Gold</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.heading}>
            <View>
              <Text style={styles.name}>Anam Wusono</Text>
              <Text style={styles.emailText}>anamwap66@gmail.com</Text>
            </View>
            <Icon.Entypo name="pencil" size={30} color="green" />
          </View>
          <View style={styles.box}>
            <Icon.MaterialIcons name="diversity-2" size={20} color="yellow" />
            <Text style={styles.text}>You Have 3 Vouchers</Text>
          </View>
          </View>

          <Text style={styles.favoriteText}>Favorite</Text>

          <View>
            {data.map((item, index) => (
              <View key={index} style={styles.card}>
                <Image source={{ uri: item.image }} style={styles.cardImage} />
                <View style={styles.cardContent}>
                    <View>
                  <Text style={styles.cardTitle}>{item.title}</Text>
                  <Text style={styles.cardText}>{item.text}</Text>
                  <Text style={styles.cardPrice}>{item.price}</Text>
                  </View>
                  <TouchableOpacity style={[styles.cardButton, { backgroundColor: item.color }]}>
                    <Text style={styles.cardButtonText}>{item.button}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </ActionSheet>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  component: {
    borderTopLeftRadius :  50,
    borderTopRightRadius : 50,
    alignItems: 'center',
    backgroundColor: 'black',
  },
  button: {
    backgroundColor: 'rgba(233, 183, 145, 0.8)',
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 13,
    color: 'rgba(234, 110, 13, 0.8)',
  },
  heading: {
    flexDirection: 'row',
    gap: 100,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  emailText: {
    fontSize: 14,
    fontWeight: '300',
    color: 'white',
  },
  box: {
    backgroundColor: '#222831',
    padding: 25,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  favoriteText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 20,
  },
  card: {
    marginTop: 20,
    backgroundColor: '#222831',
    borderRadius: 10,
    overflow: 'hidden',
    flexDirection :'row',
    justifyContent : 'center',
    alignItems :'center',
    gap : 10
  },
  cardImage: {
    padding :30,
    borderRadius : 20,
    marginLeft : 10
  },
  cardContent: {
    padding: 10,
    flexDirection :'row'
  },
  cardTitle: {
    fontSize:15,
    fontWeight: 'bold',
    color: 'white',
  },
  cardText: {
    fontSize: 13,
    fontWeight : '100',
    marginVertical: 5,
  },
  cardPrice: {
    fontSize: 16,
    color: 'green',
    fontWeight: 'bold',
  },
  cardButton: {
    marginTop: 10,
     width :100,
     height :40,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft : 20
  },
  cardButtonText: {
    color: 'white',

  }
  })