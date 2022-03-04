import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {FONTS, COLORS, SIZES} from '../constants';

const TextButton = ({
  buttonContainerStyle,
  disabled,
  label,
  labelStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.primary,
        ...buttonContainerStyle,
        borderRadius: SIZES.radius,
      }}
      disabled={disabled}
      onPress={onPress}>
      {/* Button text */}
      <Text
        style={{
          color: COLORS.white,
          ...FONTS.h3,
          ...labelStyle,
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TextButton;
