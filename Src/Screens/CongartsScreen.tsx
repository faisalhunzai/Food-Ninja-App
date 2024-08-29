import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CongartsScreen() {
  return (
    <View style={styles.container}>
            <Image
             source={require('../../Assets/Images/logo.png')}
             style={styles.image}
            />

            <Text style={styles.Congrats}>Congrats</Text>
            <Text style={styles.text}>Password reset succesful</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container :{
        flex: 1,
        alignItems: 'center',
       justifyContent: 'center',
        backgroundColor: 'black',
    },
    Congrats :{
        color : 'green',
        fontSize : 35,
        fontWeight : 'bold'
    },
    image: {
       width : 150,
       height : 150
    },
    text :{
      color : 'white',
      fontSize : 20,
      fontWeight : 'bold'
    }
   
    
})