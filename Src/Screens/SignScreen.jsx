import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Image} from 'react-native';
import {Icon} from '../Compenets/Icon';
import CustomCheckbox from '../Compenets/CheckBoxComponent';
import CustomButton from '../Compenets/ButtonComponent';
import { useNavigation } from '@react-navigation/native';

const SignScreen = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isChecked, setIsChecked] = useState(false);
  const [isCheckeds, setIsCheckeds] = useState(false);

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../Assets/Images/logo.png')}
      />
      <Text style={styles.foodtext}>FoodNinja</Text>
      <Text style={styles.text}>Deliver Favorite Food</Text>
      <Text style={styles.Signtext}>Sign Up For Free</Text>

      <View style={{marginTop: 30}}>
        <View style={styles.input}>
          <Icon.Entypo
            name="add-user"
            size={20}
            color={'green'}
            style={{marginLeft: 20}}
          />
          <View style={styles.viatext}>
            <TextInput placeholder="Name" style={{color: '#fff'}} />
          </View>
        </View>

        <View style={styles.input}>
          <Icon.MaterialCommunityIcons
            name="email"
            size={20}
            color={'green'}
            style={{marginLeft: 20}}
          />
          <View style={styles.viatext}>
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              style={{color: '#fff'}}
            />
          </View>
        </View>

        <View style={styles.input}>
          <Icon.FontAwesome
            name="lock"
            size={20}
            color={'green'}
            style={{marginLeft: 20}}
          />
          <View style={styles.viatext}>
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
              style={{color: '#fff'}}
            />
          </View>
        </View>
      </View>
      <View style={{marginTop: 10}}>
      <View style={styles.checkboxContainer}>
        <CustomCheckbox
          label="Keep Me Signed In                      "
          checked={isChecked}
          onChange={setIsChecked}
        />
      </View>

     
      <View style={styles.checkboxContainer}>
        <CustomCheckbox
          label="Email Me About Special pricing"
          checked={isCheckeds}
          onChange={setIsCheckeds}
          style={styles.inputpara}
        />
      </View>
      </View>

      <CustomButton title="Create Account" onPress={()=> navigation.navigate('CreateIdScreen')} style={styles.createbutton}/>

      <TouchableOpacity>
        <Text style={{color: '#41B06E', marginTop: 10}}>
          already have an account
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  foodtext: {
    color: '#41B06E',
    fontSize: 40,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },
  Signtext: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 50,
    color: '#fff',
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#222831',
    borderRadius: 10,
    padding: 5,
    marginBottom: 7,
    width: 300,
    height: 60,
  },
  viatext: {
    marginLeft: 10,
    flex: 1,
  },
  checkboxContainer: {
    marginRight: 130,
  },
  createbutton: {
    marginTop : 30,
    width :'auto',
    height :"auto"
  },
});

export default SignScreen;
