import React from 'react';

import {View, Text, Image, ImageBackground, StatusBar} from 'react-native';

// import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {FONTS, SIZES, COLORS, images} from '../../constants';

const OnBoardingLayout = ({children}) => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      {/* <KeyboardAwareScrollView
        keyboardDismissMode="on-drag"
        contentContainerStyle={{
          flex: 1,
          paddingHorizontal: SIZES.padding,
        }}> */}
      {/* Status bar */}
      <StatusBar barStyle="dark-content" backgroundColor="#F4F6FA" />
      {/* background color image */}
      <ImageBackground
        source={images.background}
        style={{
          alignItems: 'center',
          justifyContent: 'flex-end',
          height: '100%',
          width: '100%',
        }}>
        {/* Content / Children */}
        {children}
      </ImageBackground>
      {/* </KeyboardAwareScrollView> */}
    </View>
  );
};

export default OnBoardingLayout;
