import React from 'react';

import {View, Image, Text} from 'react-native';
import {COLORS, SIZES, FONTS} from '../constants';

const NotificationCard = ({item}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 54,
        width: 325,
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderColor: COLORS.lightGray2,
        borderBottomWidth: 0.2,
      }}>
      {/* Image background */}

      {/* Image */}
      <Image
        source={item.icon}
        resizeMode="stretch"
        style={{
          width: 24,
          height: 24,
        }}
      />
      {/* Card Name */}
      <Text
        style={{
          flex: 1,
          marginLeft: SIZES.radius,
          ...FONTS.body3,
          color: COLORS.text,
        }}>
        {item.name}
      </Text>
    </View>
  );
};

export default NotificationCard;
