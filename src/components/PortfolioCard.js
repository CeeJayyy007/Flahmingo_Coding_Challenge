import React from 'react';
import {Text, View, Image} from 'react-native';

import {FONTS, COLORS, SIZES, icons} from '../constants';

const PortfolioCard = ({
  cardContainerStyle,
  clipContainerStyle,
  headerTextStyle,
  bodyTextStyle,
  footerTextStyle,
  appendComponent,
  notificationComponent,
}) => {
  return (
    <View
      style={{
        height: 152,
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderRadius: SIZES.padding,
        paddingHorizontal: SIZES.padding,
        ...cardContainerStyle,
      }}>
      {/* card header text */}
      <Text
        style={{
          paddingBottom: SIZES.radius,
          ...FONTS.body5Ex,
          color: COLORS.lightGray4,
          ...headerTextStyle,
        }}>
        Portfolio Balance
      </Text>
      {/* card body text */}
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Text
          style={{
            paddingVertical: SIZES.base,
            ...FONTS.largeTitleEx,
            color: COLORS.white,
            ...bodyTextStyle,
          }}>
          $31,082
          <Text
            style={{
              ...FONTS.body2Ex,
              color: COLORS.lightGray4,
            }}>
            .20
          </Text>
        </Text>
        <View
          style={{
            flexDirection: 'row',
            height: 20,
            width: 62,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            marginLeft: SIZES.radius,
            ...clipContainerStyle,
          }}>
          <Image
            source={icons.triangle}
            style={{
              height: 5,
              width: 5,
              marginRight: 5,
            }}
          />
          <Text style={{color: COLORS.white, ...FONTS.body5Ex}}>810%</Text>
          {appendComponent}
        </View>
      </View>
      {/* card footer text */}
      <Text style={{...FONTS.h4Ex, color: COLORS.white, ...footerTextStyle}}>
        $1,208.24
        <Text style={{...FONTS.body5Ex, color: COLORS.lightGray4}}>
          {' '}
          (Today)
        </Text>
      </Text>
      {notificationComponent}
    </View>
  );
};

export default PortfolioCard;
