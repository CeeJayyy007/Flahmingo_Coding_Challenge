import React from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {COLORS, SIZES, FONTS} from '../constants';

const InterestCard = ({
  item,
  onPress,
  selectedCard,
  isSelected,
  iconStyle,
  iconContainerStyle,
}) => {
  return (
    <>
      <TouchableOpacity
        style={{
          flexDirection: 'column',
          marginHorizontal: SIZES.padding,
          marginVertical: SIZES.radius,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={onPress}>
        {/* Image */}
        <View
          style={[
            styles.shadowProp,
            {
              height: 72,
              width: 72,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: SIZES.radius,
              backgroundColor:
                (selectedCard?.id == item.id && selectedCard?.id == 1) ||
                (selectedCard?.id == item.id && selectedCard?.id == 6) ||
                (selectedCard?.id == item.id && selectedCard?.id == 8)
                  ? COLORS.secondaryLight
                  : (selectedCard?.id == item.id && selectedCard?.id == 2) ||
                    (selectedCard?.id == item.id && selectedCard?.id == 4) ||
                    (selectedCard?.id == item.id && selectedCard?.id == 7)
                  ? COLORS.female
                  : (selectedCard?.id == item.id && selectedCard?.id == 3) ||
                    (selectedCard?.id == item.id && selectedCard?.id == 5) ||
                    (selectedCard?.id == item.id && selectedCard?.id == 9)
                  ? COLORS.interest
                  : COLORS.white,
              ...iconContainerStyle,
            },
          ]}>
          <Image
            source={item.icon}
            resizeMode="stretch"
            style={{
              width: 30,
              height: 30,
              ...iconStyle,
            }}
          />
        </View>

        {/* Card Name */}
        <Text
          style={{
            marginTop: SIZES.base,
            ...FONTS.body4,
            color: COLORS.text,
          }}>
          {item.name}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default InterestCard;

const styles = StyleSheet.create({
  shadowProp: {
    shadowColor: COLORS.secondary,
    shadowOffset: {width: -2, height: -5},
    shadowRadius: 0,
    shadowOpacity: 0.2,
    elevation: 8,
  },
});
