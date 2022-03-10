import React from 'react';
import {View, Text} from 'react-native';
import {FONTS, SIZES} from '../constants';
import MainLayout from './MainLayout';

const Chart = () => {
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
          Chart
        </Text>
      </View>
    </MainLayout>
  );
};

export default Chart;
