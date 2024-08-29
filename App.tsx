import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LogoScreen from './Src/Screens/LogoScreen';
import FoodHereScreen from './Src/Screens/FoodHereScreen';
import LoginScreen from './Src/Screens/LoginScreen';
import ForgotPasswordScreen from './Src/Screens/ForgotPassworld';
import ResetPasswordScreen from './Src/Screens/ResetPasswordScreen';
import CongartsScreen from './Src/Screens/CongartsScreen';
import SignScreen from './Src/Screens/SignScreen';
import CreateIdScreen from './Src/Screens/CreateIdScreen';
import PaymentScreen from './PaymentScreen';
import UploadImageScreen from './UploadImageScreen';
import ProfileScreen from './ProfileScreen';
import ReadyScreen from './Src/Screens/ReadyScreen';
import OrderScreen from './Src/Screens/OrderScreen';
import OrderDateils from './Src/Screens/OrderDateils';
import ConfirmOrder from './Src/Screens/ConfirmOrder';
import HomeScreen from './Src/Screens/HomeScreen';
import NotificationScreen from './Src/Screens/NotificationScreen';
import SectionScreen from './Src/Screens/SectionScreen';
import MassageScreen from './Src/Screens/MassageScreen';
import {BottomTabBar} from './Src/Screens/BottomTabBar';
import ManProfileScreen from './Src/Screens/ManProfileScreen';
import MapScreen from './Src/Screens/MapScreen';
import CallScreen from './Src/Screens/CallScreen';
import ReduxScreen from './Src/Screens/ReduxScreen'
import { Provider } from 'react-redux';
import stores from './Src/ReduxStore/Stores';




type RootStackParamList = {
  LogoScreen: undefined;
  FoodHereScreen: undefined;
  LoginScreen: undefined;
  ForgotPasswordScreen: undefined;
  ResetPasswordScreen: undefined;
  CongartsScreen: undefined;
  SignScreen: undefined;
  CreateIdScreen: undefined;
  PaymentScreen: undefined;
  UploadImageScreen: undefined;
  ProfileScreen: undefined;
  ReadyScreen: undefined;
  OrderScreen: undefined;
  OrderDateils: undefined;
  ConfirmOrder: undefined;
  HomeScreen: undefined;
  NotificationScreen: undefined;
  SectionScreen: undefined;
  bottomTabBar: undefined;
  MassageScreen: undefined;
  ManProfileScreen :undefined
  MapScreen :undefined;
  CallScreen :undefined;
  ReduxScreen : undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <Provider store={stores}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LogoScreen">
        <Stack.Screen
          name="LogoScreen"
          component={LogoScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FoodHereScreen"
          component={FoodHereScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="bottomTabBar"
          component={BottomTabBar}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ResetPasswordScreen"
          component={ResetPasswordScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CongartsScreen"
          component={CongartsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignScreen"
          component={SignScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateIdScreen"
          component={CreateIdScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PaymentScreen"
          component={PaymentScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UploadImageScreen"
          component={UploadImageScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ReadyScreen"
          component={ReadyScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OrderScreen"
          component={OrderScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OrderDateils"
          component={OrderDateils}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ConfirmOrder"
          component={ConfirmOrder}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NotificationScreen"
          component={NotificationScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SectionScreen"
          component={SectionScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MassageScreen"
          component={MassageScreen}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="ManProfileScreen"
          component={ManProfileScreen}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="MapScreen"
          component={MapScreen}
          options={{headerShown: false}}
        />
          <Stack.Screen
          name="CallScreen"
          component={CallScreen}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="ReduxScreen"
          component={ReduxScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

export default App;
