import React from 'react';

import {View, Text, Image} from 'react-native';

import {Divider} from 'react-native-paper';

import {COLORS, FONTS, icons, SIZES} from '../constants';

const PortfolioIndicator = ({overallGainAmount, gainAmount}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: SIZES.padding,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 200,
      }}>
      {/* Left */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={icons.loss}
          style={{
            height: 48,
            width: 48,
          }}
        />
        <View
          style={{
            flex: 1,
            marginLeft: SIZES.padding,
          }}>
          <Text
            style={{
              ...FONTS.body5Ex,
            }}>
            Today Gains
          </Text>
          <Text
            style={{
              paddingTop: SIZES.base,
              ...FONTS.body3Ex,
              color: COLORS.textDark,
            }}>
            {gainAmount}
            <Text
              style={{
                ...FONTS.body5Ex,
                color: COLORS.lightGray,
              }}>
              .42
            </Text>
          </Text>
        </View>
      </View>
      {/* Divider */}
      <Divider
        orientation="vertical"
        style={{
          color: COLORS.lightGray3,
          width: '13%',
          height: 1.5,
          transform: [{rotate: '90deg'}],
          marginLeft: -SIZES.padding * 1.5,
        }}
      />

      {/* Right */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: SIZES.base,
        }}>
        <Image
          source={icons.gain}
          style={{
            height: 48,
            width: 48,
          }}
        />
        <View
          style={{
            flex: 1,
            marginHorizontal: SIZES.padding,
          }}>
          <Text
            style={{
              ...FONTS.body5Ex,
            }}>
            Overall Gains
          </Text>
          <Text
            style={{
              paddingBottom: SIZES.base,
              ...FONTS.body4Ex,
              color: COLORS.textDark,
            }}>
            {overallGainAmount}
            <Text
              style={{
                ...FONTS.body5Ex,
                color: COLORS.lightGray,
              }}>
              .11
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PortfolioIndicator;
