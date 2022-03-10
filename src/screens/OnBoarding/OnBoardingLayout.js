import React from 'react';

import {View, ImageBackground, StatusBar} from 'react-native';

import {images} from '../../constants';

const OnBoardingLayout = ({children}) => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      {/* Status bar */}
      <StatusBar barStyle="dark-content" backgroundColor="#F4F6FA" />
      {/* background color image */}
      <ImageBackground
        source={images.background}
        style={{
          // flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-end',
          height: '100%',
          width: '100%',
        }}>
        {/* Content / Children */}
        {children}
      </ImageBackground>
    </View>
  );
};

export default OnBoardingLayout;
