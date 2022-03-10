import React from 'react';

import {View, StatusBar} from 'react-native';

import {FONTS, SIZES, COLORS, images} from '../../constants';

const MainLayout = ({children}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#E4DFFF',
      }}>
      {/* Status bar */}
      <StatusBar barStyle="dark-content" backgroundColor="#E4DFFF" />
      {/* background color image */}
      {/* Content / Children */}
      {children}
    </View>
  );
};

export default MainLayout;
