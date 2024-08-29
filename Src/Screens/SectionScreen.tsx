import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Icon} from '../Compenets/Icon';
import {TextInput} from 'react-native';
import CustomButton from '../Compenets/ButtonComponent';

export default function SectionScreen() {
  const [section, setSection] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Find Your{'\n'}Favorite Food</Text>
        <TouchableOpacity style={styles.iconbutton}>
          <Icon.Ionicons
            name="notifications-outline"
            size={30}
            color={'green'}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <Icon.AntDesign name="search1" size={30} color={'white'} />

        <TextInput
          value={section}
          onChangeText={setSection}
          style={styles.input}
          placeholder="What do you want to order?"
          placeholderTextColor="#888"
        />
        <TouchableOpacity>
          <Icon.FontAwesome name="list-ul" size={30} color={'white'} />
        </TouchableOpacity>
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

        <View style={styles.button}>
          <CustomButton title="Procces" style={styles.btn}/>
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

        <View style={styles.button}>
          <CustomButton title="Procces" style={styles.btn}/>
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

        <View style={styles.button}>
          <CustomButton title="Procces" style={styles.btn}/>
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

        <View style={styles.button}>
          <CustomButton title="Procces" style={styles.btn}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent :'center',
    gap :20,
    paddingHorizontal: 16,
  },
  iconbutton: {
    width: 50,
    height: 50,
    backgroundColor: '#222831',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 33,
    fontWeight: 'bold',
    color: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#222831',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 10,
    width: '100%',
    justifyContent: 'space-between',
  },
  input: {
    height: 40,
    paddingHorizontal: 10,
    color: 'white',
    width: '70%',
  },
  crad: {
    width: 'auto',
    height: 100,
    backgroundColor: '#222831',
    borderRadius: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
 
    gap : 20
  },
  cardtext: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 20,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginTop: 20,
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
  button: {
    flexDirection: 'row',

  },
  btn :{
   width :80,
   height : 35,
   borderRadius :50
  }
});
