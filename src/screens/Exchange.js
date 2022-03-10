import React from 'react';
import {View, Text} from 'react-native';
import {TextButton} from '../components';
import {FONTS, SIZES} from '../constants';
import MainLayout from './MainLayout';

const Exchange = ({navigation}) => {
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
          Exchange
        </Text>
        <View
          style={{
            top: 300,
          }}>
          <TextButton
            buttonContainerStyle={{width: 250, height: 60}}
            label="Back"
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>
    </MainLayout>
  );
};

export default Exchange;
