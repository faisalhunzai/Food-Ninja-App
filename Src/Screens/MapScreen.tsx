import { ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import TextInputComponent from '../Compenets/TextInputComponent'
import { Icon } from '../Compenets/Icon'
import ActionSheet from 'react-native-actions-sheet'
import CustomButton from '../Compenets/ButtonComponent'

const MapScreen = () => {
  
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{uri: 'https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg'}}
        style={styles.backgroundImage}
      >
       <View style={styles.inputcard}>
        <View style={styles.flexcrad}>
          <Icon.Feather name='search' size={30} color={'white'} style={{marginTop: 10}}/>
          <TextInput
            placeholder='Find Your Location'          
          />
        </View>
       </View>
       
       <View style={styles.card}>
        <Text style={styles.lactointext}>Your Location</Text>
        <View style={{flexDirection :'row', gap :10}}>
          <Icon.MaterialIcons name='add-location-alt' size={30} color={"yellow"}/>
          <Text style={styles.text}>4517 Washington Ave. Manchester, {'\n'}Kentucky 39495</Text>
        </View>
       <CustomButton
        title='Set Loaction'
        style={styles.button}
       />
       </View>
       
      </ImageBackground>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', 
  
  },
  inputcard :{
    padding :10,
    margin :20,
    backgroundColor :'#222831',
    justifyContent :'center',
    borderRadius :20
  },
  flexcrad :{
    flexDirection :'row',
    justifyContent  :'space-around'
  },
  card :{
    padding : 15,
    backgroundColor :'black',
    margin :20 ,
    borderRadius : 20,
    gap :5,
    marginTop :"auto"
  },
  text :{
    fontSize :15,
    fontWeight :'bold',
    color : 'white'
  },
  button :{
    width :'auto',
    marginTop :20
  },
  lactointext :{
    fontWeight :'200'
  }
})
