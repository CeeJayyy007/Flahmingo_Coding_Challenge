import React from 'react';
import {View, Text} from 'react-native';
import {FONTS, SIZES} from '../constants';
import MainLayout from './MainLayout';

const UserProfile = () => {
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
          Profile
        </Text>
      </View>
    </MainLayout>
  );
};

export default UserProfile;
