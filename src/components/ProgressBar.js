import React from 'react';

import {Text, View} from 'react-native';
import {COLORS, SIZES} from '../constants';

const ProgressBar = ({barStyle}) => {
  return (
    <View
      style={{
        height: 7,
        width: 70,
        marginTop: 25,
        borderRadius: 5,
        ...barStyle,
      }}></View>
  );
};

export default ProgressBar;
