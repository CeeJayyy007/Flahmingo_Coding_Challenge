import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import CustomDrawer from "./CustomDrawer";

import {
  Welcome,
  Verify,
  Confirm,
  Password,
  Fingerprint,
  Profile,
  Assist,
  Experience,
  Gender,
  Interest,
  Investment,
  Notification,
  Ready,
  BuyStocks,
  SelectStocks,
  Exchange,
} from '../screens';

import {Tabs} from './';

const Stack = createStackNavigator();

const OnboardingStackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName={'MainLayout'}>
    <Stack.Screen name="Welcome" component={Welcome} />
    <Stack.Screen name="Verify" component={Verify} />
    <Stack.Screen name="Confirm" component={Confirm} />
    <Stack.Screen name="Password" component={Password} />
    <Stack.Screen name="Fingerprint" component={Fingerprint} />
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="Assist" component={Assist} />
    <Stack.Screen name="Experience" component={Experience} />
    <Stack.Screen name="Gender" component={Gender} />
    <Stack.Screen name="Interest" component={Interest} />
    <Stack.Screen name="Investment" component={Investment} />
    <Stack.Screen name="Notification" component={Notification} />
    <Stack.Screen name="Ready" component={Ready} />
    <Stack.Screen name="BuyStocks" component={BuyStocks} />
    <Stack.Screen name="SelectStocks" component={SelectStocks} />
    <Stack.Screen name="Exchange" component={Exchange} />
    <Stack.Screen name="MainLayout" component={Tabs} />
  </Stack.Navigator>
);

export default OnboardingStackNavigator;
