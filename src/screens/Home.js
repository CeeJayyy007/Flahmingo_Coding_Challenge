import React from 'react';
import {View, Text} from 'react-native';
import {TextButton} from '../components';
import {SIZES, FONTS} from '../constants';
import MainLayout from './MainLayout';

const Home = ({navigation}) => {
  return (
    <MainLayout>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginHorizontal: SIZES.padding,
        }}>
        <Text
          style={{
            ...FONTS.h1Ex,
          }}>
          {' '}
          Home
        </Text>
        <View
          style={{
            top: 300,
          }}>
          <TextButton
            buttonContainerStyle={{width: 250, height: 60}}
            label="Logout"
            onPress={() => navigation.navigate('Welcome')}
          />
        </View>
      </View>
    </MainLayout>
  );
};

export default Home;
