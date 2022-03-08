import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import {OnboardingStackNavigator, Tabs} from './src/navigation';

import {LogBox} from 'react-native';

// handling logbox error
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  "[Clipboard has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-clipboard/clipboard' instead of 'react-native'. See https://github.com/react-native-clipboard/clipboard",
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
        // initialRouteName={'MainLayout'}
      >
        {/* <Stack.Screen name="MainLayout" component={Tabs} /> */}
        <Stack.Screen name="Onboarding" component={OnboardingStackNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
