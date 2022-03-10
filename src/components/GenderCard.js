import React from 'react';

import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {COLORS, SIZES, FONTS, icons, images} from '../constants';

const GenderCard = ({item, isSelected, onPress, selectedCard}) => {
  // console.log(selectedCard.id);

  return (
    <TouchableOpacity
      style={[
        styles.shadowProp,
        {
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 200,
          width: 146,
          borderRadius: 20,
          marginHorizontal: SIZES.base,
        },
      ]}
      onPress={onPress}>
      {/* Image background */}
      <ImageBackground
        resizeMode="stretch"
        style={{
          //   flexDirection: 'column',
          alignItems: 'center',
          height: '100%',
          width: '100%',
          borderRadius: 20,
          backgroundColor:
            selectedCard?.id == item.id && selectedCard?.id == 1
              ? COLORS.male
              : (selectedCard?.id == item.id && selectedCard?.id == 2) ||
                (selectedCard?.id == item.id && selectedCard?.id == 4)
              ? COLORS.female
              : COLORS.white,
        }}>
        {/* Image */}
        <Image
          source={item.image}
          resizeMode="contain"
          style={{
            width: 134,
            height: 111,
            marginVertical: SIZES.padding,
            marginLeft: item?.id == 1 ? SIZES.padding : 0,
            marginRight: item?.id == 2 ? SIZES.padding * 1.5 : 0,
          }}
        />
        {/* Card Name */}
        <Text
          style={{
            flex: 1,
            ...FONTS.h3,
            fontSize: 18,
            color: selectedCard?.id == item.id ? COLORS.white : COLORS.text,
          }}>
          {item.gender}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default GenderCard;

const styles = StyleSheet.create({
  shadowProp: {
    shadowColor: COLORS.secondary,
    shadowOffset: {width: 2, height: 5},
    shadowRadius: 0,
    shadowOpacity: 0.2,
    elevation: 0,
  },
});
