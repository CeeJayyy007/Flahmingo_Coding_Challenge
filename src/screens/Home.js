import React from 'react';
import {View, Text} from 'react-native';
import {SIZES, FONTS} from '../constants';
import MainLayout from './MainLayout';

const Home = () => {
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
      </View>
    </MainLayout>
  );
};

export default Home;
