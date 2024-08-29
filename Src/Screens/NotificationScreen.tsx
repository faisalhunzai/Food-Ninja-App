import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icon } from '../Compenets/Icon';
import { useNavigation } from '@react-navigation/native';

export default function NotificationScreen() {
  const navigation =useNavigation();
  return (
    <View style={styles.container}>
          <TouchableOpacity onPress={()=> navigation.navigate('HomeScreen')} style={styles.icon}>
          <Icon.AntDesign name="left" size={30} color={'#F17808'}/>
        </TouchableOpacity>
        <Text style={styles.text}>Notification</Text>

        <View style={styles.card}>
            
              <Icon.FontAwesome name='sticky-note' size={30} color={'green'}/>
              <View>
              <Text style={styles.titletext}>Your order has been taken by{'\n'}the driver </Text>
              <Text style={styles.paratext}>Recently</Text>
            </View>
        </View>

        <View style={styles.card}>
            
              <Icon.FontAwesome name='dollar' size={30} color={'#FFA823'}/>
              <View>
              <Text style={styles.titletext}>Topup for $100 was Susscessful </Text>
              <Text style={styles.paratext}>10.00 Am</Text>
            </View>
        </View>

        <View style={styles.card}>
              <Icon.AntDesign name='closecircle' size={30} color={'red'}/>
              <View>
              <Text style={styles.titletext}>your order has been canceled</Text>
              <Text style={styles.paratext}>22 juny 2021</Text>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      
        alignItems :'center',
        backgroundColor: 'black',
        gap : 20
      },
      text: {
        fontSize: 20,
        fontWeight: 'bold',
        marginRight :150,
        marginTop :30
      },
      card :{
        width : '89%',
        height : 100,
        backgroundColor :"#222831",
        borderRadius : 10,
        justifyContent: 'center',
        alignItems :'center',
        flexDirection :'row',
        gap :20
      },
      titletext :{
        fontSize: 13,
        fontWeight: 'bold',
        color :'white'
      },
      paratext :{
        fontWeight :'100',
        marginTop :10
      },
      icon :{
        alignSelf :'flex-start',
        marginLeft :25
      }
})