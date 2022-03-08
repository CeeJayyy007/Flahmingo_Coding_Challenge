import React from 'react';

import {View, StatusBar} from 'react-native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {FONTS, SIZES, COLORS, images} from '../../constants';

const MainLayout = ({children}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#E4DFFF',
      }}>
      <KeyboardAwareScrollView
        keyboardDismissMode="on-drag"
        contentContainerStyle={{
          flex: 1,
        }}>
        {/* Status bar */}
        <StatusBar barStyle="dark-content" backgroundColor="#E4DFFF" />
        {/* background color image */}
        {/* Content / Children */}
        {children}
      </KeyboardAwareScrollView>
    </View>
  );
};

export default MainLayout;
