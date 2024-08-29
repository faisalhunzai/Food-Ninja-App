import { StyleSheet, View, Image, Text } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function LogoScreen() {
    const navigation = useNavigation()
    useEffect(() => {
        setTimeout(() => {
          navigation.navigate('FoodHereScreen');
        }, 2000);   
      }, [navigation]);
  return (
       
    

    <View style={styles.container}>

      <Image
        style={styles.image}
        source={require('../../Assets/Images/logo.png')}
        />
        <Text style={styles.foodtext}>
            FoodNinja
        </Text>
        <Text style={styles.text}>
            Deliever Favrite Food
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor :"black",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
   
  },
  foodtext :{
    color :'#41B06E',
    fontSize : 30,
    fontWeight :'bold',
    
  },
  text:{
    fontSize : 10,
  }
});
