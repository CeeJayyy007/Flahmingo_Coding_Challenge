import React from 'react';

import {View, Text, Image} from 'react-native';

import {COLORS, FONTS, icons, SIZES} from '../constants';

const PortfolioIndicator = ({overallGainAmount, gainAmount}) => {
  return (
    <View
      style={{
        // position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: SIZES.padding * 1.3,
        width: 200,
      }}>
      {/* Left */}
      <View
        style={{
          flexDirection: 'row',
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
            marginHorizontal: SIZES.padding,
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
              color: COLORS.black,
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
      <View
        style={{
          height: '70%',
          //   width: '100%',
          backgroundColor: COLORS.lightGray3,
        }}
      />

      {/* Right */}
      <View
        style={{
          flexDirection: 'row',
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
              color: COLORS.black,
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
