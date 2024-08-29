import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import NotificationScreen from './NotificationScreen';
import {Icon} from '../Compenets/Icon';
import ChatScreen from './ChatScreen';
import ManProfileScreen from './ManProfileScreen';

export const BottomTabBar = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
     detachInactiveScreens ={true}
      screenOptions={({ route}) => ({
        tabBarIcon: ({focused, color}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName =  'home';
          } else if (route.name === 'Profile') {
            iconName = 'user';
          } else if (route.name === 'Chat') {
            iconName =  'message1';
          } else if (route.name === 'Notif') {
            iconName =     'notification';
          }

          return (
            <View
              style={{
                backgroundColor: focused?'rgba(161, 225, 106, 0.26)':"#0000",
                padding :5,
                flexDirection:'row',
                justifyContent :'center',
                alignItems :'center',
                borderRadius :5
              }}>
              <Icon.AntDesign name={iconName} size={29} />
              {focused ? <Text>{route.name }</Text> : null}

            </View>
          );
        },
        tabBarActiveTintColor: '#874be5',
        tabBarInactiveTintColor: '#4d4d4d',
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,    
        // tabBarItemStyle: styles.tabBarItemStyle,
   
        tabBarHideOnKeyboard: true,
        tabBarLabel: () => null,
        
        
      })}>
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="Profile" component={ManProfileScreen} />
      <Tab.Screen name='Chat' component={ChatScreen} options={{tabBarBadge : "99+"}}/>
      <Tab.Screen name='Notif' component={NotificationScreen} options={{ tabBarBadge :'9+'}}/>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: '#222831',
    borderRadius: 8,
    margin :10,
    position :'absolute',
    borderBlockColor :"#222831"
  },

});
