import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

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
} from './src/screens';

import {LogBox} from 'react-native';

// handling logbox error
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const Stack = createStackNavigator();

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Welcome'}>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
