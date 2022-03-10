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

const CardItem = ({item, isSelected, onPress, selectedCard}) => {
  // console.log(selectedCard.id);

  return (
    <TouchableOpacity
      style={[
        styles.shadowProp,
        {
          flexDirection: 'row',
          height: 77,
          width: 327,
          alignItems: 'center',
          justifyContent: 'space-between',
          borderRadius: SIZES.radius,
          borderColor: COLORS.lightGray4,
          borderWidth: 1,
          marginVertical: SIZES.base,
        },
      ]}
      onPress={onPress}>
      {/* Image background */}
      <ImageBackground
        source={
          (selectedCard?.id == item.id && selectedCard?.id == 1) ||
          (selectedCard?.id == item.id && selectedCard?.id == 3)
            ? images.pattern
            : (selectedCard?.id == item.id && selectedCard?.id == 2) ||
              (selectedCard?.id == item.id && selectedCard?.id == 4)
            ? images.patternDark
            : images.patternBlank
        }
        resizeMode="stretch"
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          height: '100%',
          width: '100%',
        }}>
        {/* Image */}
        <Image
          source={item.icon}
          resizeMode="center"
          style={{
            width: 30,
            height: 30,
            marginLeft: SIZES.radius,
          }}
        />
        {/* Card Name */}
        <Text
          style={{
            flex: 1,
            marginLeft: SIZES.radius,
            ...FONTS.h3,
            color: selectedCard?.id == item.id ? COLORS.white : COLORS.text,
          }}>
          {item.name}
        </Text>
        {/* check box */}

        <Image
          source={isSelected ? icons.shape : icons.tick}
          style={{
            width: 25,
            height: 25,
            marginRight: SIZES.radius,
          }}
        />
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CardItem;

const styles = StyleSheet.create({
  shadowProp: {
    shadowColor: COLORS.secondary,
    shadowOffset: {width: 2, height: 5},
    shadowRadius: 0,
    shadowOpacity: 0.2,
    elevation: 0,
  },
});
