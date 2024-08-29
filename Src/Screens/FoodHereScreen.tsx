import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import CustomButton from '../Compenets/ButtonComponent'
import { useNavigation } from '@react-navigation/native'

export default function FoodHereScreen() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image
                source={require('../../Assets/Images/foodhere.png')}
                style={styles.foodimage}
            />
            <Text style={styles.text}>
                Find your Comfort {'\n'}Food Here
            </Text>
         
                <Text style={styles.paratext}>
                    Here you can find a chef or dish for every{'\n'} taste and color. Enjoy!
                </Text>
                <View style={styles.textContainer}>
                <CustomButton
                    onPress={() => navigation.navigate('LoginScreen')}
                    title='Next'
                    style={styles.nextbtn}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "black"
    },
    foodimage: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
    },
    text: {
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center',
        marginBottom: 15, 
    },
    textContainer: {
        flex: 1,
        justifyContent: 'flex-end', 
        alignItems: 'center',       
        marginBottom: 30, 
    },
    paratext: {
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 20,
    },
    nextbtn: {
        width: 110,
        height: 40,
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
