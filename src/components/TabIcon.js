import React from 'react';
import {View, Text, Image} from 'react-native';

import {FONTS, COLORS} from '../constants';

const TabIcon = ({focused, icon, iconStyle, isReset}) => {
  if (isReset) {
    return (
      <View
        style={{
          alignItems: 'baseline',
          justifyContent: 'center',
          width: 64,
          height: 64,
          borderRadius: 60,
          backgroundColor: COLORS.primary,
          bottom: 20,
        }}>
        <Image
          source={icon}
          resizeMode="contain"
          style={{
            width: 25,
            height: 25,
            tintColor: COLORS.white,
            alignSelf: 'center',
            ...iconStyle,
          }}
        />
      </View>
    );
  } else {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={icon}
          resizeMode="contain"
          style={{
            width: 24,
            height: 24,
            tintColor: focused ? COLORS.primary : COLORS.icon,
            ...iconStyle,
          }}
        />
      </View>
    );
  }
};

export default TabIcon;
