import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Icon } from '../Compenets/Icon'; 
import CustomButton from '../Compenets/ButtonComponent';
import { useNavigation } from '@react-navigation/native';

export default function CreateIdScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

   
    return (
        <View style={styles.container}>
            <View style={styles.component}>
                <TouchableOpacity onPress={() => navigation.goBack('SignScreen')}>
                    <Icon.AntDesign name="left" size={30} color={'#F17808'} />
                </TouchableOpacity>

                <Text style={styles.forgottext}>
                    Fill in Your bio to get {'\n'}started
                </Text>
                <Text style={styles.text}>
                    This data will be displayed in your Account {'\n'}profile for Security
                </Text>
            </View>

            <View style={{ marginTop: 30 }}>
                <View style={styles.input}>
                 
                    <TextInput 
                        placeholder="Name" 
                        placeholderTextColor="#aaa"
                        style={styles.inputText} 
                    />
                </View>

                <View style={styles.input}>
                
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor="#aaa"
                        value={email}
                        onChangeText={setEmail}
                        style={styles.inputText}
                    />
                </View>

                <View style={styles.input}>
                  
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor="#aaa"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={true}
                        style={styles.inputText}
                    />
                </View>

            <View style={styles.button}>
                <CustomButton
                    onPress={()=> navigation.navigate('PaymentScreen')}
                    title='Next'
                    style={styles.nextbutton}
                />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
    },
    backbutton: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(196, 113, 72, 0.25)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 20,
    },
    component: {
        marginLeft: 20,
    },
    forgottext: {
        fontWeight: 'bold',
        fontSize: 24,
        color: '#fff',
        marginVertical: 20,
    },
    text: {
        fontSize: 14,
        color: '#aaa',
        marginBottom: 20,
    },
    input: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#333',
        borderRadius: 10,
        marginBottom: 15,
        paddingVertical: 10,
    },
    inputText: {
        flex: 1,
        color: '#fff',
        paddingHorizontal: 10,
    },
    nextbutton :{
        marginTop :160,
    },
    button:{
        justifyContent :'center',
        alignItems :'center'
    }
});
