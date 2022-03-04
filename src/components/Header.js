import React from 'react';

import {View, Text, Image} from 'react-native';

import {COLORS, FONTS} from '../constants';

const Header = ({
  containerStyle,
  title,
  titleStyle,
  leftComponent,
  rightComponent,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        ...containerStyle,
      }}>
      {/* Left */}
      {leftComponent}
      {/* Title */}
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{...FONTS.h3, fontSize: 18, ...titleStyle}}>{title}</Text>
      </View>
      {/* Right */}
      {rightComponent}
    </View>
  );
};

export default Header;
